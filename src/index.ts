import * as flatbuffers from 'flatbuffers';

import * as MyGame from './my-game/sample';


export default {
  async fetch(request): Promise<Response> {
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
    const pr = url.searchParams.get("name");

    if (!pr) {
      return new Response("Missing 'name' query parameter", { status: 400 });
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

    html_content += "<p> hp: " + hp + "</p>";
    html_content += "<p> mana: " + mana + "</p>";

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