const dataModule = (() => {
    class Joke {
        constructor(value) {
            this.value = value;
        };
    };

    const getJoke = () => {

        return fetch("https://api.chucknorris.io/jokes/random").then(res => res.json()).then(joke => new Joke(joke.value));
    };

    return { getJoke: getJoke }
}

)();