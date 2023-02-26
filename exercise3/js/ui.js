
const jokeDivEl = document.querySelector("#jokeDiv");
const btnEl = document.getElementById("btn");
export const renderJoke = (joke) => {
    let html = `<p>${joke.value}</p>`
    jokeDivEl.innerHTML = html;
    btnEl.innerText = "Tell me another one..."

}

