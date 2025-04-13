function generateSmoothie(event) {
  event.preventDefault();
  Typewriter("#smoothie", {
    strings: response.data.answer,
    autoStart: true,
    cursor: null,
    delay: 1,
  });

  let apiKey = "10588b3do607b336f1e63a30b7f6ft4a";
  let context =
    "Your are a health concious AI Assistant that generates healthy smoothie reciepes. The reciepe must be provided in HTML format. Example: <p>Here is your smoothie!</p>";
  let prompt =
    "Generate a healthy smoothie reciepe. This should be in less than 10 lines. Please use an emoji for each line. ";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let smoothieElement = document.querySelector("#smoothie");

  smoothieElement.innerHTML =
    "Generating a healthy smoothie for you... it will be worth the wait";

  console.log("called the AI api");
  axios.get(apiUrl).then(displaySmoothie);
}

let generatorButton = document.querySelector("#generate-smoothie-button");
generatorButton.addEventListener("click", generateSmoothie);
