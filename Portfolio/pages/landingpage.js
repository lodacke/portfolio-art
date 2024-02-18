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
        <img class="landingpageimgTAG" src="./media/artwork/forstamorgonen.jpg"
        </div>
    </div>
</div>
    <div class="LPcontent">
        <img src="./media/artwork/Mazetti.jpg">
        <img src="./media/artwork/sovrummet.jpg">
    <div class="blackwhite">
        <img class="img1"src= "./media/artwork/duvor.jpg">
        <img class="img2" src= "./media/artwork/blames.jpg">   
    </div>
       
    </div>`;


    let imgDOM = document.querySelector("img.landingpageimgTAG");

    let i = 0;

    let strings = [
        {
        img: "/Portfolio/media/artwork/spelplanen1.PNG",
        alt: "checkers"
        }, 
        {
        img: "/Portfolio//media/artwork/spelplan2.PNG",
        alt:"checkers"
        }];

    setInterval(() => {
        imgDOM.style.transition = 'opacity 0.5s ease-in-out';
        imgDOM.style.opacity = 0; 

        setTimeout(() => {
            imgDOM.src = strings[i % strings.length].img;
            imgDOM.alt = strings[i % strings.length].alt;

            setTimeout(() => {
                imgDOM.style.opacity = 1;
            }, 100); 
            i++;
        }, 500); 
    }, 3000);

}