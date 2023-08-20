"use strict";

const form = document.querySelector("form");
const inputTitle = document.getElementById("title");
const inputBody = document.getElementById("body");

async function postData(url = "") {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title: inputTitle.value, body: body.value }),
    });

    console.log(response);
    if (!response.ok)
      throw new Error(` request not found : ${response.status} `);

    const data = await response.json();
    console.log(data);
  } catch (err) {
    console.error(err);
    alert(err);
  }
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  postData("https://jsonplaceholder.typicode.com/posts");
});
