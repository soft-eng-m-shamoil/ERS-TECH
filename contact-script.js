document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    console.log("Form data:", formData);
});