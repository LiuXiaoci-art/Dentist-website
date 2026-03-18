document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("bookingForm");
    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault(); // Stop form from actually submitting

           
            alert("Your appointment request has been submitted successfully!");

            // Optional: clear form
            form.reset();
        });
    }
});
