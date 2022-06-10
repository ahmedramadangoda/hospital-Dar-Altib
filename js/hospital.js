// change color in all page
// local storage  
let mainColor = localStorage.getItem("color_option");
// check if there is color option
if (mainColor !== null) {
    document.documentElement.style.setProperty("--green-color", mainColor)
    // document.documentElement.style.setProperty("--main-color", mainColor)
}

let colorLi = document.querySelectorAll(".switcher li");
// do loop on < li >
colorLi.forEach( (ele) => {
    // click on every li  
    ele.addEventListener("click", function (even) {

        // this is very important code for me
        // set colors in root ( in css )
        document.documentElement.style.setProperty("--green-color" ,ele.dataset.color);
        // document.documentElement.style.setProperty("--dark-color" ,ele.dataset.bg);
        // set color in local storage
        localStorage.setItem("color_option", ele.dataset.color);

        even.target.parentElement.querySelectorAll(".switcher .active").forEach((element) => {

        element.classList.remove("active");

        });

    even.target.classList.add("active");

    // localStorage.setItem("class_active",even.target.classList.add("active"));

    })
});









// *************************************//
// right button in window
let btn = document.querySelector(".btn-up");

window.onscroll = function () {
    // scroll button right of page
    if (window.scrollY >= 300) {
        btn.style.cssText = "display: block; opacity: .9;"
    } else {
        btn.style.cssText = "display: block; right: -70px"
    }
};
// function of button up in window
btn.onclick = function(){
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
};

// ***************************************************************//

// ************** start ul li projects ****************************************//
// let liProject = document.querySelectorAll(".swicher-common li");
// let imgsProjects = document.querySelectorAll(".big-box");

// liProject.forEach( (li)=> {
//     li.addEventListener("click", removeActive);
//     li.addEventListener("click", manageImg);
// });

// remove active class from all li and add to the current element you clicked on it

// function removeActive(){
//     liProject.forEach((li) => {
//         li.classList.remove("active-common");
//         this.classList.add("active-common");
//     })
// };
// manage img

// function manageImg() {
//     imgsProjects.forEach((box) => {
//         box.style.display = "none";
//     });
//     document.querySelectorAll(this.dataset.work).forEach((ele) => {
//         ele.style.display = "block";
//     })
// };

// ************** End ul li projects ************************************//