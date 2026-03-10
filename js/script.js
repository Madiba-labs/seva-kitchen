function showPage(pageId){

const pages = document.querySelectorAll('.page');

pages.forEach(page=>{
page.classList.remove('active');
});

setTimeout(()=>{
document.getElementById(pageId).classList.add('active');
},100);

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
