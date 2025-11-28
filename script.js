document.addEventListener('DOMContentLoaded', function() {
    // Search Functionality
    const searchInput = document.querySelector('.search-bar input');
    const animeCards = document.querySelectorAll('.anime-card');

    if (searchInput) {
        searchInput.addEventListener('input', function(e) {
            const searchTerm = e.target.value.toLowerCase();

            animeCards.forEach(card => {
                const title = card.querySelector('.anime-title').textContent.toLowerCase();
                if (title.includes(searchTerm)) {
                    card.style.display = '';
                    // Re-trigger animation for found items
                    card.style.animation = 'none';
                    card.offsetHeight; /* trigger reflow */
                    card.style.animation = 'fadeInUp 0.5s ease forwards';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    }

    // Add staggered animation delay to cards on load
    animeCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
    });
});
