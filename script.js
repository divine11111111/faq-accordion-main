const questions = document.querySelectorAll(".question");


questions.forEach((question) => {
   question.addEventListener("click", () => {
let answer = question.nextElementSibling;
answer.classList.toggle("close");

let plus = document.querySelector("#plus");
let minus = document.querySelector("#minus");

//change icon

      if (answer.classList.contains("close")) {
         plus.style.display = "block"; // Show plus icon
         minus.style.display = "none"; // Hide minus icon
      } else {
         plus.style.display = "none"; // Hide plus icon
         minus.style.display = "block"; // Show minus icon
      }
   })
})