const loader = document.getElementById("loader");
const content = document.getElementById("content");
const navigation = document.getElementById('menu-android');
const openMenuBtn = document.getElementById('menu-android-btn');
const closeMenuBtn = document.getElementById('close-nav');
const itemsMenu = document.querySelectorAll(".menu-android .items .item");

window.addEventListener("load", () => {
    loader.style.display = "none";
    content.style.display = "block";
});

openMenuBtn.addEventListener('click', () => {
   navigation.classList.add('active');
});

closeMenuBtn.addEventListener('click', () => {
   navigation.classList.remove('active');
});

itemsMenu.forEach(item => {
    item.addEventListener("click", () => {
        if(navigation.classList.contains("active")){
            navigation.classList.remove('active');
        }
    });
});