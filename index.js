const openBtn = document.querySelector(".openBtn");
const closeBtn = document.querySelector(".closeBtn");

openBtn.addEventListener("click",  ()=> {
    document.querySelector('.cookiesBox').classList.add('active');
});

closeBtn.addEventListener("click", ()=> {
    document.querySelector(".cookiesBox").classList.remove("active")
})