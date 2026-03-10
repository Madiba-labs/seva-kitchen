function showPage(page){

let pages=document.querySelectorAll(".page")

pages.forEach(function(p){

p.classList.remove("active")

})

document.getElementById(page).classList.add("active")

}
function openDish(title,desc,price,image){

document.getElementById("dishPopup").style.display="flex"

document.getElementById("popupTitle").innerText=title

document.getElementById("popupDesc").innerText=desc

document.getElementById("popupPrice").innerText=price

document.getElementById("popupImage").src=image

document.getElementById("popupOrder").href="https://wa.me/2250759792044"

}

function closeDish(){

document.getElementById("dishPopup").style.display="none"

}
