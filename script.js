document.addEventListener('DOMContentLoaded', () => {
    const toggler = document.querySelector('.toggler');
    toggler.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
    });
});

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.skill-card').forEach(card => {
        const percentage = card.getAttribute('data-percentage');
        const circle = card.querySelector('.progress');
        const radius = circle.r.baseVal.value;
        const circumference = 2 * Math.PI * radius;
        
        // Set the stroke-dasharray and stroke-dashoffset
        circle.style.strokeDasharray = circumference;
        circle.style.strokeDashoffset = circumference - (percentage / 100 * circumference);
        
        // Update percentage text
        const percentageText = card.querySelector('.percentage');
        percentageText.textContent = `${percentage}%`;
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('main > section');
    const navItems = document.querySelectorAll('header h5');

    // Function to show the active section
    function showSection(targetId) {
        sections.forEach(section => {
            section.style.display = section.id === targetId ? 'flex' : 'none';
        });
    }

    // Initially show the hero section
    showSection('hero');

    // Add click event listeners to each nav item
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            const targetId = item.getAttribute('data-target');
            showSection(targetId);
        });
    });
});
