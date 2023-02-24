
const appModule = ((data, ui) => {
    const btnEl = document.getElementById("btn");
    const getData = () => {
        data.getJoke().then((joke) => {
            ui.renderJoke(joke);
        });
    }



    btnEl.addEventListener("click", getData);
})(dataModule, uiModule);