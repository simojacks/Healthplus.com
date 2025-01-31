document.addEventListener('DOMContentLoaded', () => {
    const appointmentForm = document.getElementById('appointment-form');
    const contactForm = document.getElementById('contact-form');
  
    if (appointmentForm) {
      appointmentForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Appointment successfully submitted!');
        appointmentForm.reset();
      });
    }
  
    if (contactForm) {
      contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Message successfully sent!');
        contactForm.reset();
      });
    }
  });
  