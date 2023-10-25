// To top button

const toTop = document.querySelector("#toTop");

window.addEventListener("scroll", function(){
    if(this.window.pageYOffset > 150){
        toTop.classList.add("active")
    }else{
        toTop.classList.remove("active");
    }
})



// Responsive Nav

const bars = document.querySelector(".bars");
const responsiveNav = document.querySelector(".responsiveMenu");

bars.addEventListener("click", function(){
    responsiveNav.classList.toggle("active");
    if(bars.classList.toggle("active")){
        bars.querySelector("svg").classList.replace("fa-bars", "fa-xmark")
        bars.style.color = "2D3748"
    }else{
        bars.querySelector("svg").classList.replace("fa-xmark", "fa-bars")
        bars.style.color = "white"
    }
})


// hide and show password

const pass = document.querySelector(".inputPass input");
const togglePass = document.querySelector(".toggle");

function showHide(){
    if(password.type === "password"){
        pass.setAttribute("type" , "text");
        togglePass.querySelector("svg").classList.replace("fa-eye" , "fa-eye-slash");

    }else{
        pass.setAttribute("type" , "password");
        togglePass.querySelector("svg").classList.replace("fa-eye-slash" , "fa-eye")
    }
}



// Password requirements

const passwordInput = document.querySelector(".inputPass input");
const requirementList = document.querySelectorAll(".requirement-list li");

console.log(requirementList.length);

const requirements = [
    {regex: /.{8,}/, index: 0},
    {regex: /[0-9]/, index: 1},
    {regex: /[a-z]/, index: 2},
    {regex: /[A-Z]/, index: 3},
    {regex: /[^A-Za-z0-9]/, index: 4},
]

passwordInput.addEventListener("keyup", (e)=>{
    requirements.forEach(item => {
        const isValid = item.regex.test(e.target.value);
        const requirementItem = requirementList[item.index];

        if(isValid){
            requirementItem.classList.add("valid");
            requirementItem.firstElementChild.classList = "fa-solid fa-check";
        }else{
            requirementItem.classList.remove("valid");
            requirementItem.firstElementChild.classList = "fa-solid fa-circle-check";
        }
    })
})


const inputBtn = document.querySelector(".inputBtn");
const name = document.querySelector("#name")
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const result1 = document.querySelector("#result1");
const result2 = document.querySelector("#result2");
const result3 = document.querySelector("#result3");


inputBtn.addEventListener("click", function(){
    if(name.value === ""){
        result1.textContent = "Enter your name";
        result1.style.color = "red";
    }else{
        result1.textContent = " ";
    }
})


inputBtn.addEventListener("click", function(){
    const mailRegex =  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(email.value.match(mailRegex)){
        result2.textContent = "Valid email address !";
        result2.style.color = "green"
        return true;
    }else{
        result2.textContent = "You have entered an invalid email address !";
        result2.style.color = "red"
        return false;
    }
})


inputBtn.addEventListener("click", function(){
    if(password.value === ""){
        result3.textContent = "Please enter your Password";
        result3.style.color = "red"
    }else{
        result3.textContent = " "
    }
})