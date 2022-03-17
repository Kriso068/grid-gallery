



let allGridItems = [...document.getElementsByClassName("grid-item")];
let popupBg = document.getElementById("popup-bg");
let popupImg = document.getElementById("popup-img");

const openPopup = (e) => {

    let gridItemClicked = e.target.closest(".grid-item");
    let clickedImageName = gridItemClicked.id;
    popupBg.classList.add("open");
    popupImg.src= `./img/${clickedImageName}.jpg`;
};


const closePopup = () =>{
    popupBg.classList.remove("open");
}
allGridItems.forEach(el => el.addEventListener("click", openPopup));
popupImg.addEventListener("click", (e) => e.stopPropagation());
popupBg.addEventListener("click", closePopup);



