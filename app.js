//using selectors inside the element solution
const questions = document.querySelectorAll(".question");

// looping over each question in article and query selecting each question-btn
questions.forEach(function (question) {
    const btn = question.querySelector(".question-btn");
    btn.addEventListener("click", function() {
        // creating another function to loop over each item in questions class 
        questions.forEach(function (item) {
            // saying if item is not equal to question already toggled then close toggle to open next clicked...basically not having two toggles open at the same time
            if (item !== question) {
                item.classList.remove("show-text")
            }
        });
        question.classList.toggle("show-text");


    });
});






// traversing the dom solution

// const questionBtns = document.querySelectorAll(".question-btn");

// // creating a forEach function to loop over each button in html document
// questionBtns.forEach(function (btn) {
//     // add event listener and an event(e) to look for the parentElement...class="question is parent elememt and question-title is the other parent element to eventually get to the question-btn"
//     btn.addEventListener("click", function (e) {
//         const question = e.currentTarget.parentElement.parentElement
//         // toggle show-text class and adds/subtracts it to parent element question when the plus/minus is pressed
//         question.classList.toggle("show-text");
//     });

// });