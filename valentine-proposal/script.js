// Get URL parameters
function getUrlParams() {
    const params = new URLSearchParams(window.location.search);
    return {
        name: params.get('name'),
        sender: params.get('sender'),
        no: params.get('no') === 'true'
    };
}

// Check if this is a proposal view (has name parameter)
function isProposalView() {
    const params = getUrlParams();
    return params.name !== null;
}

// Initialize the page
function initializePage() {
    const params = getUrlParams();

    if (isProposalView()) {
        // Show proposal section
        document.getElementById('creator-section').style.display = 'none';
        document.getElementById('proposal-section').style.display = 'block';

        // Update title and question with names
        const recipientName = params.name;
        const senderName = params.sender || 'someone special';

        document.getElementById('title').textContent = `A Special Message for ${recipientName}`;
        document.getElementById('question').textContent = `Will you be my Valentine, ${recipientName}?`;

        // Make "No" button unclickable if specified
        if (params.no) {
            document.getElementById('no-btn').classList.add('disabled');
        }

        // Set up proposal buttons
        setupProposalButtons(recipientName, senderName);
    } else {
        // Show creator section
        document.getElementById('creator-section').style.display = 'block';
        document.getElementById('proposal-section').style.display = 'none';

        // Set up link generation
        setupLinkGeneration();
    }
}

// Set up proposal buttons
function setupProposalButtons(recipientName, senderName) {
    const yesBtn = document.getElementById('yes-btn');
    const noBtn = document.getElementById('no-btn');

    yesBtn.addEventListener('click', function() {
        showResponse(true, recipientName, senderName);
    });

    noBtn.addEventListener('click', function() {
        if (!noBtn.classList.contains('disabled')) {
            showResponse(false, recipientName, senderName);
        }
    });

    // Make "No" button move away on hover if not disabled
    if (!noBtn.classList.contains('disabled')) {
        noBtn.addEventListener('mouseover', function() {
            const randomX = Math.random() * 200 - 100;
            const randomY = Math.random() * 200 - 100;
            noBtn.style.transform = `translate(${randomX}px, ${randomY}px)`;
        });

        noBtn.addEventListener('mouseout', function() {
            noBtn.style.transform = '';
        });
    }
}

// Show response after button click
function showResponse(isYes, recipientName, senderName) {
    const questionSection = document.querySelector('.question-section');
    const buttons = document.querySelector('.buttons');

    // Hide buttons
    buttons.style.display = 'none';

    // Show response
    let responseMessage = '';
    let emoji = '';

    if (isYes) {
        responseMessage = `Yay! ${recipientName} said YES! 💕\n\nThank you for making my Valentine's Day special!`;
        emoji = '🎉❤️';
        questionSection.innerHTML = `
            <h2 style="color: #4caf50;">${responseMessage}</h2>
            <div style="font-size: 4rem; margin: 20px 0;">${emoji}</div>
            <p style="font-size: 1.2rem; color: #666;">From ${senderName} with love</p>
        `;
    } else {
        responseMessage = `That's okay, ${recipientName}! 😊\n\nI hope we can still be friends!`;
        emoji = '🤗💝';
        questionSection.innerHTML = `
            <h2 style="color: #666;">${responseMessage}</h2>
            <div style="font-size: 4rem; margin: 20px 0;">${emoji}</div>
            <p style="font-size: 1.2rem; color: #666;">From ${senderName}</p>
        `;
    }

    // Add confetti effect for yes response
    if (isYes) {
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

// Set up link generation for creator view
function setupLinkGeneration() {
    const generateBtn = document.getElementById('generate-link');
    const linkContainer = document.getElementById('generated-link');
    const linkInput = document.getElementById('link-input');
    const copyBtn = document.getElementById('copy-link');
    const noUnclickable = document.getElementById('no-unclickable');

    generateBtn.addEventListener('click', function() {
        const recipientName = prompt('Enter the recipient\'s name:');
        if (!recipientName) return;

        const senderName = prompt('Enter your name (optional):') || '';

        const baseUrl = window.location.origin + window.location.pathname;
        let url = `${baseUrl}?name=${encodeURIComponent(recipientName)}`;

        if (senderName) {
            url += `&sender=${encodeURIComponent(senderName)}`;
        }

        if (noUnclickable.checked) {
            url += '&no=true';
        }

        linkInput.value = url;
        linkContainer.style.display = 'block';

        // Scroll to show the link
        linkContainer.scrollIntoView({ behavior: 'smooth' });
    });

    copyBtn.addEventListener('click', function() {
        linkInput.select();
        document.execCommand('copy');

        // Show feedback
        const originalText = copyBtn.textContent;
        copyBtn.textContent = 'Copied!';
        copyBtn.style.background = '#4caf50';

        setTimeout(() => {
            copyBtn.textContent = originalText;
            copyBtn.style.background = '';
        }, 2000);
    });
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', initializePage);