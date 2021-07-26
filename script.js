const BITLY_API_ACCESS_TOKEN = "your-token-here";
// never put your token inside javascript file while pulibish your website

const form = document.getElementById("form");

const urlField = document.getElementById("url");

const short_url = document.getElementById("short-url");

const debug = document.getElementById("debug");

form.addEventListener("submit", event => {

    event.preventDefault();


    // https://dev.bitly.com/api-reference

    const data = { long_url: urlField.value };

    fetch("https://api-ssl.bitly.com/v4/shorten", {

    method: "POST",

    headers: {

        "Authorization": `Bearer ${BITLY_API_ACCESS_TOKEN}`,

        "Content-Type": "application/json"

    },

    body: JSON.stringify(data)

    })

    .then(response => {

    if (!response.ok) {

        throw new Error(`HTTP error! status: ${response.status}`)

    }

    return response.json();

    })

    .then(json => {

    short_url.innerHTML = json.link;

    debug.innerHTML = JSON.stringify(json, null, 2);

    })

    .catch(err => debug.innerHTML = err);

});
