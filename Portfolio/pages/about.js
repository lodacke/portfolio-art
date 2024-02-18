import { wrapper } from "../utilities/variables.js";
import { swapStyleSheet } from "../utilities/cssSwap.js";

export function renderAbout (){
swapStyleSheet("CSS/about.css")

    wrapper.innerHTML = `
    <div class="topContent">
        <img src="./media/artwork/nylle_lol.PNG">
        <div class="info">
            <h1> ABOUT </h1>
            <p> NAME: LO </p>
        </div>
    </div>`;
}