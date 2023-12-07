const questions = document.querySelectorAll(".question");

questions.forEach((question) => {
   question.addEventListener("click", () => {
      let answer = question.nextElementSibling;
      answer.classList.toggle("close");

      //change icon
      let plusIcon = question.querySelectorAll(".plus");
      let minusIcon = question.querySelectorAll(".minus");

      plusIcon.forEach((icon) => {
         if (answer.classList.contains("close")) {
            icon.style.display = "block"; // Show plus icon
         } else {
            icon.style.display = "none"; // Hide plus icon
         }
      });

      minusIcon.forEach((icon) => {
         if (answer.classList.contains("close")) {
            icon.style.display = "none"; // Hide minus icon
         } else {
            icon.style.display = "block"; // Show minus icon
         }
      });
   });
});
