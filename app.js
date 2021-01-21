// mobile menu
let mobileMenu = document.querySelector(".nav-mobile-menu");
let mainMenu = document.querySelector(".menu");

mobileMenu.addEventListener("click",function(){
    mobileMenu.classList.toggle("active-menu");
    if(mobileMenu.classList.contains("active-menu")) {
        mainMenu.classList.add("active-menu");
    } else {
        mainMenu.classList.remove("active-menu");
    }
})

// tabs

let tabItems = document.querySelectorAll(".tab-title-item");
let tabContent = document.querySelectorAll(".tab-content");
let tabWrap = document.querySelector(".tab-title-items");
let tabSpan = document.querySelectorAll(".tab-span");

function hideTabsContent() {
    tabContent.forEach(tab => {
        tab.classList.add("hide");
        tab.classList.remove("show");
    })
    tabItems.forEach(item => {
        item.classList.remove("active")
    })
    tabSpan.forEach(item => {
        item.classList.remove("active-tab-spans")
    })
}
function showTabsContent(i = 0) {
    tabContent[i].classList.add("show");
    tabContent[i].classList.remove("hide");
    tabItems[i].classList.add("active");
    tabSpan[i].classList.add("active-tab-spans");
    
}
hideTabsContent()
showTabsContent()

tabWrap.addEventListener("click",function(e){
    let target = e.target;

    if(target.classList.contains("tab-title-item")) {
        tabItems.forEach((item, i) =>{
            if (target == item) {
                hideTabsContent();
                showTabsContent(i)       
            }
        })

    }
}) 