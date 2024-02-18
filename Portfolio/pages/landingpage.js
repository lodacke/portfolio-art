import { swapStyleSheet } from "../utilities/cssSwap.js";
import { wrapper } from "../utilities/variables.js";

export function renderLandingpage(){

    swapStyleSheet("CSS/landningpage.css");

    wrapper.innerHTML = `
    <div id="landingpage">
        <div id="welcomeNote">
            <div class="top-row">
                 <h1> Lo </h1>
            </div>
            <div class="last-row"
                <h1> <i> Dacke </i> </h1>
            </div>
            <div class="breadNote">
            </div>
        </div>
        <div class="landingpageImg">
        <img class="landingpageimgTAG" src="./media/artwork/image1.jpg"
        </div>
    </div>`;


    let imgDOM = document.querySelector("img");

    let i = 0;

    let strings = [
        {
        img: "/Portfolio/media/artwork/image5.jpg",
        alt: "image of birds"
        }, 
        {
        img: "/Portfolio//media/artwork/image3.jpg",
        alt:"image"
        }
        , {
        img: "/Portfolio/media/artwork/image4.jpg",
        alt: "image of hands",
    }];

    setInterval(() => {
        imgDOM.src = strings[i % strings.length].img;
        imgDOM.alt = strings[i % strings.length].alt;
        i++;
    }, 3000);
    
}