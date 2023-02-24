const uiModule = (() => {
    const jokeDivEl = document.querySelector(".jokeDiv");

    const renderJoke = (joke) => {
        let html = `Joke:<p>${joke.value}</p>`
        jokeDivEl.innerHTML = html;

    }

    return { renderJoke: renderJoke };
})();
