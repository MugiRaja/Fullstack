// function add(callback) {
//   setTimeout(() => {
//     let sample = "hello how are you";
//     callback(sample);
//   }, 5000);
// }

// function input(sample) {
//   console.log("I am Mukilan:", sample);
// }

// add(input);

// let fetchData = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Data fetched");
//   }, 2000);
// });

// fetchData
//   .then((result) => console.log(result))
//   .catch((error) => console.error(error));

// function jokes() {
//   for (let i = 1; i <= 5; i++) {
//     setTimeout(() => {
//       fetch("https://official-joke-api.appspot.com/random_joke")
//         .then((response) => response.json())
//         .then((data) => {
//           console.log(data);
//           console.log(data.setup);
//           console.log(data.punchline);
//         })
//         .catch((error) => console.error("Error:", error));
//     }, 5000);
//   }
// }
// jokes();


function jokes() {
  setInterval(() => {
    fetch("https://official-joke-api.appspot.com/random_joke")
      .then(response => response.json())
      .then(data => {
        console.log(data);
        console.log(data.setup); // Setup of the joke
        console.log(data.punchline); // Punchline of the joke
      })
      .catch(error => console.error("Error:", error));
  }, 5000); // Fetch a joke every 5 seconds
}

jokes();

