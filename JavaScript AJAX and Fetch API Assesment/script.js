document.getElementById("jokebutton").addEventListener("click", function () {
  for (let i = 1; i <= 50; i++) {
    setTimeout(() => {
      fetch("https://official-joke-api.appspot.com/random_joke")
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          const jokequestion = document.getElementById("jokequestion");
          const jokeanswer = document.getElementById("jokeanswer");
          jokequestion.innerText = data.setup;
          jokeanswer.innerText = data.punchline;
        })
        .catch((error) => console.log(error));
    }, i * 10000);
  }
});

//   document.getElementById("fetchJokeButton").addEventListener("click", function() {
//     fetch("https://official-joke-api.appspot.com/random_joke")
//       .then(response => response.json())
//       .then(data => {
//         console.log(data);
//         const jokeSetup = document.getElementById("jokeSetup");
//         const jokePunchline = document.getElementById("jokePunchline");
//         jokeSetup.innerText = data.setup;
//         jokePunchline.innerText = data.punchline;
//       })
//       .catch(error => console.error('Error:', error));
//   });
