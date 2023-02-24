const btnEl = document.getElementById("btn");
const jokeDivEl = document.getElementById("jokeDiv");

const getJoke = () => {

    fetch("https://api.chucknorris.io/jokes/random").then(res => res.json()).then(data => jokeDivEl.innerHTML = data.value);
}

btnEl.addEventListener("click", getJoke);