document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("apoyo").addEventListener("click", function() {
        document.getElementById("options").classList.add("hidden");
        document.getElementById("form-container").classList.remove("hidden");
    });

    document.getElementById("no-apoyo").addEventListener("click", function() {
        document.getElementById("options").classList.add("hidden");
        document.getElementById("response").classList.remove("hidden");
    });

    document.getElementById("support-form").addEventListener("submit", function(event) {
        event.preventDefault();
        document.getElementById("form-container").classList.add("hidden");
        document.getElementById("thank-you").classList.remove("hidden");
    });
});