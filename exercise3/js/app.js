import { getJoke } from "./data.js";
import { renderJoke } from "./ui.js";



const btnEl = document.getElementById("btn");
const getData = () => {
    getJoke().then((joke) => {
        renderJoke(joke);
    });
}



btnEl.addEventListener("click", getData);

