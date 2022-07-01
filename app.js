const dropDown = document.querySelectorAll(".dropdown");
const body = document.querySelector("body");
const openSidebar = document.querySelector(".open-sidebar");
const closeSidebar = document.querySelector(".close-sidebar");
const sidebar = document.querySelector(".sidebar");

dropDown.forEach(item => {
    item.addEventListener("click", () => {
        const titleArrow = item.firstElementChild.firstElementChild;
        const menu = item.lastElementChild;
        titleArrow.classList.toggle("fa-angle-up");
        menu.classList.toggle("hidden");
    })
})

openSidebar.addEventListener("click", () => {
    sidebar.style.transform = `translateX(0)`;
    setTimeout(() => { body.classList.add("modal") }, 300);
});
closeSidebar.addEventListener("click", () => {
    sidebar.style.transform = `translateX(100%)`;
    setTimeout(() => { body.classList.remove("modal") }, 300);
});