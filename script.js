// JavaScript for Sahith Chunduru Portfolio

document.addEventListener('DOMContentLoaded', () => {
  // Initialize Lucide Icons
  if (window.lucide) {
    lucide.createIcons();
  }

  // --- Theme Toggle Logic ---
  const themeToggleBtn = document.getElementById('theme-toggle');
  const htmlElement = document.documentElement;

  // Saved or preferred theme initialization
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  if (savedTheme === 'light' || (!savedTheme && !prefersDark)) {
    htmlElement.classList.remove('dark');
  } else {
    htmlElement.classList.add('dark');
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      if (htmlElement.classList.contains('dark')) {
        htmlElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      } else {
        htmlElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      }
      if (window.lucide) lucide.createIcons();
    });
  }

  // --- Mobile Menu Toggle ---
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });

    // Close menu when clicking a link
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
      });
    });
  }

  // --- Toast Notification Helper ---
  const toast = document.getElementById('toast');
  const toastMessage = document.getElementById('toast-message');
  let toastTimeout;

  function showToast(message) {
    if (!toast || !toastMessage) return;
    toastMessage.textContent = message;
    toast.classList.remove('translate-y-20', 'opacity-0', 'pointer-events-none');
    toast.classList.add('translate-y-0', 'opacity-100');

    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => {
      toast.classList.remove('translate-y-0', 'opacity-100');
      toast.classList.add('translate-y-20', 'opacity-0', 'pointer-events-none');
    }, 3000);
  }

  // --- Copy Email Buttons ---
  const emailText = 'Sahithchunduru@gmail.com';

  const copyEmailHero = document.getElementById('copy-email-hero');
  const copyEmailCard = document.getElementById('copy-email-card');

  function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
      showToast('Copied email to clipboard!');
    }).catch(() => {
      // Fallback
      const textArea = document.createElement('textarea');
      textArea.value = text;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      showToast('Copied email to clipboard!');
    });
  }

  if (copyEmailHero) {
    copyEmailHero.addEventListener('click', () => copyToClipboard(emailText));
  }
  if (copyEmailCard) {
    copyEmailCard.addEventListener('click', () => copyToClipboard(emailText));
  }

  // --- Contact Form Handler ---
  const contactForm = document.getElementById('contact-form');
  const submitBtnText = document.getElementById('submit-btn-text');

  if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      
      const formData = new FormData(contactForm);
      const accessKey = formData.get('access_key');
      const name = formData.get('name');
      const email = formData.get('email');
      const message = formData.get('message');

      if (!accessKey || accessKey === 'YOUR_WEB3FORMS_ACCESS_KEY') {
        // Fallback to mailto link if Web3Forms access key is not configured yet
        window.location.href = `mailto:Sahithchunduru@gmail.com?subject=Portfolio Message from ${encodeURIComponent(name)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
        showToast('Opening your email app...');
        contactForm.reset();
        return;
      }

      if (submitBtnText) submitBtnText.textContent = 'Sending...';

      try {
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          body: formData
        });
        const result = await response.json();

        if (result.success) {
          showToast('Message sent! Check your email inbox.');
          contactForm.reset();
        } else {
          showToast(result.message || 'Error sending message.');
        }
      } catch (error) {
        showToast('Failed to send. Opening email app...');
        window.location.href = `mailto:Sahithchunduru@gmail.com?subject=Portfolio Message from ${encodeURIComponent(name)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
      } finally {
        if (submitBtnText) submitBtnText.textContent = 'Send Message';
      }
    });
  }

  // --- Intersection Observer for Active Nav Link ---
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  const observerOptions = {
    root: null,
    rootMargin: '-20% 0px -70% 0px',
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach(section => observer.observe(section));
});
