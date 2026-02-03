// Initialize the page
function initializePage() {
    setupProposalButtons();
}

// Set up proposal buttons
function setupProposalButtons() {
    const yesBtn = document.getElementById('yes-btn');
    const noBtn = document.getElementById('no-btn');

    yesBtn.addEventListener('click', function() {
        showResponse(true);
    });

    noBtn.addEventListener('click', function() {
        // No button is disabled, so this shouldn't happen
        // But just in case, do nothing
    });

    // Make "No" button move when mouse gets close (but keep it in document flow)
    noBtn.addEventListener('mouseenter', function() {
        const container = document.querySelector('.container');
        const containerRect = container.getBoundingClientRect();
        const buttonRect = noBtn.getBoundingClientRect();

        // Generate random position within a reasonable area around the container
        const offsetX = (Math.random() - 0.5) * 400; // -200 to +200 pixels
        const offsetY = (Math.random() - 0.5) * 300; // -150 to +150 pixels

        // Move button using transform (keeps it in document flow)
        noBtn.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
        noBtn.style.zIndex = '10000';
    });

    // Reset position when mouse leaves
    noBtn.addEventListener('mouseleave', function() {
        noBtn.style.transform = 'translate(0, 0)';
    });
}

// Show response after button click
function showResponse(isYes) {
    const questionSection = document.querySelector('.question-section');
    const buttons = document.querySelector('.buttons');

    // Hide buttons
    buttons.style.display = 'none';

    if (isYes) {
        // Show celebration response
        questionSection.innerHTML = `
            <h1 style="color: #4caf50;">Yay! You said YES! 💕</h1>
            <div style="font-size: 4rem; margin: 20px 0;">🎉❤️</div>
            <p style="font-size: 1.2rem; color: #666;">Thank you for making my Valentine's Day special!</p>
        `;

        // Add confetti effect
        createConfetti();
    }
}

// Create confetti effect
function createConfetti() {
    const colors = ['#ff6b9d', '#c44569', '#e91e63', '#f44336', '#4caf50', '#2196f3'];
    const container = document.body;

    for (let i = 0; i < 100; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.style.position = 'fixed';
            confetti.style.left = Math.random() * 100 + 'vw';
            confetti.style.top = '-10px';
            confetti.style.width = '10px';
            confetti.style.height = '10px';
            confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
            confetti.style.zIndex = '9999';
            confetti.style.pointerEvents = 'none';

            container.appendChild(confetti);

            const animation = confetti.animate([
                { transform: 'translateY(0) rotate(0deg)', opacity: 1 },
                { transform: `translateY(${window.innerHeight + 20}px) rotate(${Math.random() * 360}deg)`, opacity: 0 }
            ], {
                duration: Math.random() * 3000 + 2000,
                easing: 'ease-out'
            });

            animation.onfinish = () => {
                confetti.remove();
            };
        }, i * 50);
    }
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', initializePage);
