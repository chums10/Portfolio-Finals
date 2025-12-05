const sunIcon = document.getElementById('sun-icon');
const moonIcon = document.getElementById('moon-icon');
const body = document.body;

sunIcon.addEventListener('click', () => {
    body.classList.add('dark-mode');
    sunIcon.style.display = 'none';
    moonIcon.style.display = 'inline';
});

moonIcon.addEventListener('click', () => {
    body.classList.remove('dark-mode');
    sunIcon.style.display = 'inline';
    moonIcon.style.display = 'none';
});

function showSection(sectionId) {
    const cards = document.querySelectorAll('.section-card');
    cards.forEach(card => {
        card.style.display = 'none';
    });
    const section = document.getElementById(sectionId);
    if (section) section.style.display = 'block';
}

// FAQ accordion toggle
document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.faq-item').forEach(item => {
    const btn = item.querySelector('.faq-q');
    const ans = item.querySelector('.faq-a');

    // ensure collapsed state on load
    ans.style.maxHeight = null;

    btn.addEventListener('click', () => {
      const opening = !item.classList.contains('open');

      // close any open item (optional: remove this block if you want multiple open)
      document.querySelectorAll('.faq-item.open').forEach(openItem => {
        if (openItem !== item) {
          openItem.classList.remove('open');
          const a = openItem.querySelector('.faq-a');
          if (a) a.style.maxHeight = null;
        }
      });

      item.classList.toggle('open', opening);
      if (opening) {
        ans.style.maxHeight = ans.scrollHeight + 'px';
      } else {
        ans.style.maxHeight = null;
      }
    });
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const contactForm = document.getElementById('contact-form');
  if (!contactForm) return;

  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const sender = document.getElementById('contact-email').value.trim();
    const message = document.getElementById('contact-message').value.trim();
    if (!sender || !message) {
      alert('Please enter your email and a message.');
      return;
    }

    const to = 'shaymaesumagang14@gmail.com';
    const subject = encodeURIComponent('Website inquiry from ' + sender);
    const bodyLines = [
      'From: ' + sender,
      '',
      'Message:',
      message
    ];
    const body = encodeURIComponent(bodyLines.join('\n'));
    const mailto = `mailto:${to}?subject=${subject}&body=${body}`;

    window.location.href = mailto;
  });
});
