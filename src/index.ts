import * as flatbuffers from 'flatbuffers';

import * as MyGame from './my-game/sample';
import { RequestPackage } from './royal/infrastructure/services/backend/protocol/request-package';
import { RequestType } from './royal/infrastructure/services/backend/protocol/request-type';

function sleep(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function getUserData(userId: string): Promise<string> {
  await sleep(100); // 1 giây
  return "hello";
}

async function getUserOrders(userId: string): Promise<string> {
  await sleep(200); // 2 giây
  return "hi";
}
// base64 to buffer
function base64ToByteArray(base64String: string): Uint8Array {
    const byteString = atob(base64String);
    const byteArray = new Uint8Array(byteString.length);
    for (let i = 0; i < byteString.length; i++) {
        byteArray[i] = byteString.charCodeAt(i);
    }
    return byteArray;
}
export default {
  async fetch(request): Promise<Response> {

    const start = performance.now();

    let html_content = "";
    let html_style =
      "body{padding:6em; font-family: sans-serif;} h1{color:#f6821f;}";

    html_content += "<p> Colo: " + request.cf?.colo + "</p>";
    html_content += "<p> Country: " + request.cf?.country + "</p>";
    html_content += "<p> City: " + request.cf?.city + "</p>";
    html_content += "<p> Continent: " + request.cf?.continent + "</p>";
    html_content += "<p> Latitude: " + request.cf?.latitude + "</p>";
    html_content += "<p> Longitude: " + request.cf?.longitude + "</p>";
    html_content += "<p> PostalCode: " + request.cf?.postalCode + "</p>";
    html_content += "<p> MetroCode: " + request.cf?.metroCode + "</p>";
    html_content += "<p> Region: " + request.cf?.region + "</p>";
    html_content += "<p> RegionCode: " + request.cf?.regionCode + "</p>";
    html_content += "<p> Timezone: " + request.cf?.timezone + "</p>";

    const url = new URL(request.url);
    let pr = url.searchParams.get("name");

    if (!pr) {
      pr = ""
      // return new Response("Missing 'name' query parameter", { status: 400 });
    }

    const numberArray: number[] = pr.split(",")
      .map(x => parseInt(x.trim(), 10))
      .filter(n => !isNaN(n));

    const bytes = new Uint8Array(numberArray);

    let buf2 = new flatbuffers.ByteBuffer(bytes);

    // Get an accessor to the root object inside the buffer.
    let monster = MyGame.Monster.getRootAsMonster(buf2);
    let hp = monster.hp();
    let mana = monster.mana();
    const userId = "abc123";

    const [data, orders] = await Promise.all([
      getUserData(userId),
      getUserOrders(userId),
    ]);
    html_content += "<p> data: " + data + "</p>";
    html_content += "<p> orders: " + orders + "</p>";

    if (request.method == "POST") {
       // Đảm bảo Content-Type là octet-stream
      const contentType = request.headers.get("content-type");
      if (contentType !== "application/octet-stream") {
        return new Response("Unsupported content type", { status: 415 });
      }

      const arrayBuffer = await request.arrayBuffer();
      const byteArray = new Uint8Array(arrayBuffer);
      let buf22 = new flatbuffers.ByteBuffer(byteArray);
      
      let req = RequestPackage.getRootAsRequestPackage(buf22);
      const arr = req.requestsTypeArray();
      let x = "";
      if (arr) {
        for (const i of arr) {
          x += " | " + RequestType[i] ;
        }
      }
      return new Response(x, { status: 200 });
    }
    else if (request.method == "GET") {
      const byteArray = base64ToByteArray(pr);
  
      let buf22 = new flatbuffers.ByteBuffer(byteArray);
      
      let req = RequestPackage.getRootAsRequestPackage(buf22);
      const arr = req.requestsTypeArray();
      if (arr) {
        for (const i of arr) {
          html_content += "<p> i: " + RequestType[i] + "</p>";
        }
      }
    }


    html_content += "<p> hp: " + hp + "</p>";
    html_content += "<p> mana: " + mana + "</p>";

    const end = performance.now();
    const elapsedMs = end - start;
    html_content += "<p> time: " + elapsedMs + " ms</p>";

    let html = `<!DOCTYPE html>
      <head>
        <title> Geolocation: Hello World </title>
        <style> ${html_style} </style>
      </head>
      <body>
        <h1>Geolocation: Hello World!</h1>
        <p>You now have access to geolocation data about where your user is visiting from.</p>
        ${html_content}
      </body>`;

    return new Response(html, {
      headers: {
        "content-type": "text/html;charset=UTF-8",
      },
    });
  },
} satisfies ExportedHandler;