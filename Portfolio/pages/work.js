import { wrapper } from "../utilities/variables.js";
import { swapStyleSheet } from "../utilities/cssSwap.js";

export function renderWork() {

    swapStyleSheet("CSS/work.css");

    wrapper.innerHTML = `
    <h1> COMICS </h1>
    <div class="containerC">
        <img src="/Portfolio/media/artwork/hander.jpg">
        <img src="/Portfolio/media/artwork/spelplan3.PNG">
    </div>`;
}