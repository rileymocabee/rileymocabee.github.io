document.addEventListener('DOMContentLoaded', () => {
  // 1) SHOWS ARRAY (empty => no shows)
  const shows = [
    // Example:
    // { date: "Sep 15, 2025", venue: "The Rose Theater", location: "Los Angeles, CA", tickets: "https://ticket-link.com" },
    // { date: "Oct 02, 2025", venue: "Night Owl Club", location: "Seattle, WA", tickets: "https://ticket-link.com" }
  ];

  const showsListEl = document.getElementById('shows-list');
  const noShowsMsgEl = document.getElementById('no-shows-message');

  // 2) Check if we have any shows
  if (shows.length === 0) {
    showsListEl.style.display = 'none';
    noShowsMsgEl.style.display = 'block';
  } else {
    noShowsMsgEl.style.display = 'none';
    shows.forEach(show => {
      const li = document.createElement('li');
      li.innerHTML = `
        <span class="show-date">${show.date}</span> –
        <span class="show-venue">${show.venue}</span> –
        <span class="show-location">${show.location}</span>
        <a class="ticket-link" href="${show.tickets}" target="_blank">Tickets</a>
      `;
      showsListEl.appendChild(li);
    });
  }

  // 3) Fade-in on scroll
  const fadeItems = document.querySelectorAll('.fade-in-on-scroll');
  const appearOptions = { threshold: 0.1 };

  const appearOnScroll = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if(!entry.isIntersecting) return;
      entry.target.classList.add('fade-in-active');
      obs.unobserve(entry.target);
    });
  }, appearOptions);

  fadeItems.forEach(item => {
    appearOnScroll.observe(item);
  });
});