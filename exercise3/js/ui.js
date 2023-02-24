
const jokeDivEl = document.querySelector("#jokeDiv");

export const renderJoke = (joke) => {
    let html = `Joke:<p>${joke.value}</p>`
    jokeDivEl.innerHTML = html;

}

