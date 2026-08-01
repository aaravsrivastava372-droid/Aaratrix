if (document.getElementById("loading")) {

    setTimeout(() => {
        window.location.href = "profiles.html";
    }, 4500);

}

// ===============================
// PROFILES PAGE
// ===============================

const aaratrika =
document.getElementById("aaratrika");

const dobby =
document.getElementById("dobby");

const toast =
document.getElementById("toast");

if(aaratrika){

aaratrika.onclick=()=>{

aaratrika.style.transform="scale(12)";
aaratrika.style.opacity="0";

setTimeout(()=>{

window.location.href="home.html";

},800);

};

}

if(dobby){

dobby.onclick=()=>{

toast.classList.add("show");

setTimeout(()=>{

toast.classList.remove("show");

},2500);

};

}
/* ===========================================
   AARATRIX HOME PAGE
=========================================== */

const playButton = document.getElementById("playButton");
const heroImage = document.querySelector(".heroImage");
const navbar = document.querySelector(".navbar");
const logo = document.getElementById("logo");
const cards = document.querySelectorAll(".movieCard");

// -------------------------
// Cinematic Hero Zoom
// -------------------------

if(heroImage){

    let zoom = 1;

    setInterval(()=>{

        zoom += 0.00035;

        if(zoom >= 1.08){
            zoom = 1;
        }

        heroImage.style.transform =
        `scale(${zoom})`;

    },30);

}

// -------------------------
// Navbar Background
// -------------------------

window.addEventListener("scroll",()=>{

    if(!navbar) return;

    if(window.scrollY > 80){

        navbar.style.background="#141414";

    }

    else{

        navbar.style.background=
        "linear-gradient(to bottom,rgba(0,0,0,.85),transparent)";

    }

});

// -------------------------
// Play Button
// -------------------------

if(playButton){

playButton.onclick=()=>{

document.body.style.transition="1s";

document.body.style.opacity="0";

setTimeout(()=>{

window.location.href="movie.html";

},900);

};

}

// -------------------------
// Poster Click
// -------------------------

cards.forEach(card=>{

card.addEventListener("click",()=>{

card.style.transform="scale(1.12)";

setTimeout(()=>{

window.location.href="movie.html";

},300);

});

});

// -------------------------
// Secret Easter Egg
// -------------------------

let secretClicks=0;

if(logo){

logo.onclick=()=>{

secretClicks++;

if(secretClicks===13){

alert("❤️ Secret unlocked!\n\nYou found the hidden ending.");

window.location.href="secret.html";

}

};

}

// -------------------------
// Fade In
// -------------------------

window.onload=()=>{

document.body.style.opacity="0";

setTimeout(()=>{

document.body.style.transition="1s";

document.body.style.opacity="1";

},100);

};

console.log("🎬 AARATRIX Home Loaded");
/* ===========================================
   MOVIE PAGE
=========================================== */

const watchNow=document.getElementById("watchNow");

const backHome=document.getElementById("backHome");

if(backHome){

backHome.onclick=()=>{

document.body.style.transition=".8s";

document.body.style.opacity="0";

setTimeout(()=>{

window.location.href="home.html";

},700);

};

}

if(watchNow){

watchNow.onclick=()=>{

document.body.style.transition=".8s";

document.body.style.opacity="0";

setTimeout(()=>{

window.location.href="player.html";

},700);

};

}
/* ===========================================
PLAYER
=========================================== */

const loader=document.getElementById("loader");

const container=document.getElementById("videoContainer");

const movie=document.getElementById("movie");

const credits=document.getElementById("credits");

if(movie){

setTimeout(()=>{

loader.style.display="none";

container.style.display="block";

movie.play();

},3000);

movie.onended=()=>{

container.style.display="none";

credits.style.display="block";

};

}
