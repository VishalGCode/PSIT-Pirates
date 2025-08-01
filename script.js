// Mobile menu toggle
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    menuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });

    // Animate cards and images on mouse move for subtle 3D effect
    const cards = document.querySelectorAll('.card-3d');
    cards.forEach(card => {
      card.addEventListener('mousemove', e => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = ((y - centerY) / centerY) * 10;
        const rotateY = ((x - centerX) / centerX) * 10;
        card.style.transform = `rotateX(${-rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
      });
      card.addEventListener('mouseleave', () => {
        card.style.transform = '';
      });
    });

    // Also add subtle 3D effect on images with class img-3d inside cards
    const images = document.querySelectorAll('.img-3d');
    images.forEach(img => {
      img.addEventListener('mousemove', e => {
        const rect = img.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = ((y - centerY) / centerY) * 8;
        const rotateY = ((x - centerX) / centerX) * 8;
        img.style.transform = `rotateX(${-rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
        img.style.zIndex = '20';
        img.style.boxShadow = '0 25px 50px rgba(16,185,129,0.7)';
      });
      img.addEventListener('mouseleave', () => {
        img.style.transform = '';
        img.style.zIndex = '';
        img.style.boxShadow = '0 8px 20px rgba(0,0,0,0.4)';
      });
    });

    // WhatsApp and SMS send message on form submit
    document.getElementById('contactForm').addEventListener('submit', function (e) {
      e.preventDefault();
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();

      // WhatsApp number (with country code, no + or spaces)
      const whatsappPhone = '918471030498';
      // SMS number (with country code if needed, or just the number)
      const smsPhone = '918471030498'; // Replace with founder's number

      const text = `New message for PIRATES:\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`;

      // Ask user which method to use
      const useWhatsApp = confirm("Do you want to send this message via WhatsApp?\n\nPress OK for WhatsApp, Cancel for SMS.");

      if (useWhatsApp) {
        const waText = encodeURIComponent(text);
        window.open(`https://wa.me/${whatsappPhone}?text=${waText}`, '_blank');
      } else {
        // For SMS, use sms: link (works on mobile)
        const smsText = encodeURIComponent(text);
        window.location.href = `sms:${smsPhone}?body=${smsText}`;
      }
    });