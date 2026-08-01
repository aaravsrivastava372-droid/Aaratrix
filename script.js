setTimeout(()=>{

window.location.href="profiles.html";

},4500);
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
