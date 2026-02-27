document.addEventListener("DOMContentLoaded", function() {

    const buttons = document.querySelectorAll(".faq-btn");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const answer = button.nextElementSibling;
            button.classList.toggle("active");
            button.firstElementChild.classList.toggle("active");
            answer.classList.toggle("active");
        });
    });

});