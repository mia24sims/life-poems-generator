function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: ["Generating Poem..."],
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let poemForm = document.querySelector("#poem-form");
poemForm.addEventListener("submit", generatePoem);
