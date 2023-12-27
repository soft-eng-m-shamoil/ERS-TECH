function bookAppointment(button) {
    // Change button text to "Appointment Booked"
    button.innerHTML = "Appointment Booked";
    
    // Change button color to blue
    button.style.backgroundColor = "#007bff";
    button.style.color = "#fff";

    // Disable the button after booking
    button.disabled = true;
}
