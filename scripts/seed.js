import fetch from "node-fetch";
import fs from "fs";

const EVENT_PATH = "../data/events.json";
const BEARER_TOKEN = "USE YOUR OWN TOKEN";

let rawdata = fs.readFileSync(EVENT_PATH);
let events = JSON.parse(rawdata);
// console.log(events)

function createEvent(event) {
  fetch("https://l4yporup.directus.app/items/Events", {
    headers: {
      accept: "application/json, text/plain, */*",
      "accept-language": "en-US,en;q=0.9",
      authorization: BEARER_TOKEN,
      "cache-control": "no-store",
      "content-type": "application/json",
      "sec-ch-ua":
        '" Not A;Brand";v="99", "Chromium";v="101", "Google Chrome";v="101"',
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": '"Linux"',
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-origin",
      cookie:
        "directus_refresh_token=2QZ-AH_tJu1ZXJDTtNDCjsUwkCwvU4Mj4qY6EUCUZyHwyUMzwyapHghmUAcdRbfe",
      Referer: "https://l4yporup.directus.app/admin/content/Events/+",
      "Referrer-Policy": "strict-origin-when-cross-origin",
    },
    body: JSON.stringify(event),
    method: "POST",
  })
    .then((res) => {
      console.log("Created Event" + event.title + "\n");
    })
    .catch((err) => console.log(err));
}

function deleteEvent(eventId) {
  fetch("https://l4yporup.directus.app/items/Events", {
    headers: {
      accept: "application/json, text/plain, */*",
      "accept-language": "en-US,en;q=0.9",
      authorization: BEARER_TOKEN,
      "cache-control": "no-store",
      "content-type": "application/json",
      "sec-ch-ua":
        '" Not A;Brand";v="99", "Chromium";v="101", "Google Chrome";v="101"',
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": '"Linux"',
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-origin",
    },
    referrer: "https://l4yporup.directus.app/admin/content/Events",
    referrerPolicy: "strict-origin-when-cross-origin",
    body: "[" + eventId + "]",
    method: "DELETE",
    mode: "cors",
    credentials: "include",
  })
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
}

function formatImages(images) {
  if (images) {
    let imageArray = [];
    images.map((image) => {
      imageArray.push({ imagename: image });
    });
    return imageArray;
  }

  return images;
}

function seeData() {
  events.map((event) => {
    console.log("Creating Event" + event.id + event.name + "\n");
    let data = {
      title: event.name,
      description: event.description,
      Venue: event.venue.name,
      Location: event.venue.address_1,
      Date: event.local_date,
      Time: event.local_time,
      Attendees: event.rsvp_limit,
      images: formatImages(event.images),
    };
    createEvent(data);
  });
}

seeData();
