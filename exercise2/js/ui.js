const uiModule = (() => {
    const jokeDivEl = document.querySelector("#jokeDiv");
    const btnEl = document.getElementById("btn");
    const renderJoke = (joke) => {
        const html = `<p>${joke.value}</p>`
        jokeDivEl.innerHTML = html;
        btnEl.innerText = "Tell me another one..."

    }

    return { renderJoke: renderJoke };
})();
