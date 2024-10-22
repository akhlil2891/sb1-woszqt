// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Get the CTA button
    const ctaButton = document.getElementById('cta-button');
    
    // Add click event listener to the CTA button
    ctaButton.addEventListener('click', () => {
        alert('Thank you for your interest! This feature is coming soon.');
    });

    // Get the contact form
    const contactForm = document.getElementById('contact-form');
    
    // Add submit event listener to the contact form
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent the form from submitting
        
        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        // In a real application, you would send this data to a server
        // For now, we'll just log it to the console
        console.log('Form submitted:', { name, email, message });
        
        // Show a thank you message
        alert('Thank you for your message! We will get back to you soon.');
        
        // Clear the form
        contactForm.reset();
    });
});