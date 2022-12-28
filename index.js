

/*function myFunction(){document.getElementById("chcolor").style.backgroundColor="red"; } */

const a=document.getElementById("chcolor");

if (localStorage.getItem("chcolorClicked")){
    a.style.background="green";
}
else{
    a.addEventListener("click",(e) => {
        e.preventDefault();
        a.style.background="green";
        localStorage.setItem("chcolorClicked", true)
    });
}










$('.collapse').collapse()