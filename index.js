function displaySmoothie(response) {
  console.log(response.data.answer);

  new Typewriter("#smoothie", {
    strings: response.data.answer,
    autoStart: true,
    cursor: null,
    delay: 1,
  });
}

function generateSmoothie(event) {
  event.preventDefault();
  let apiKey = "2046c535afeb092fo82f1d306d8a2b2t";
  let context =
    "Your are a healthy AI Assistant that gives healthy smoothie recipe. Your recipe's are less than 10 lines. The recipe must be provided in HTML format. Example: <p>this is a recipe</p>";
  let prompt =
    "Generate a healthy smoothie recipe, in less than 10 lines. Must include fruit. ";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let smoothieElement = document.querySelector("#smoothie");

  smoothieElement.innerHTML = "Generating a smoothie for you.. please wait";

  axios.get(apiUrl).then(displaySmoothie);
}

let generatorButton = document.querySelector("#generate-smoothie-button");
generatorButton.addEventListener("click", generateSmoothie);
