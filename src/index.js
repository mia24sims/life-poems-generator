function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "f2784deoc3ec5b8af02864390dt6ce37";
  let prompt = `Please provide a short poem about ${instructionsInput.value}`;
  let context =
    "You are highly skilled in haiku poems. Your assignment is to give a short and precise haiku poem with <br/> between the stanzas. Please make sure the poem is relating to the user's prompt. Sign the poem with `SheCodes AI`inside a HTML strong element at the end of the poem. ";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector(".poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = ` <div class = "blink">Generating haiku about ${instructionsInput.value}</div>`;
  axios.get(apiUrl).then(displayPoem);
}

let poemForm = document.querySelector("#poem-form");
poemForm.addEventListener("submit", generatePoem);
