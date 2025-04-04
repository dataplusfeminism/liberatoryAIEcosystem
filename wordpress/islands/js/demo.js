(function() {
    // alert('javascript loaded.');
    // Nav gradient cursor
    const element = document.querySelector('.wp-block-template-part');

    element.addEventListener('mousemove', (e) => {
    const rect = element.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    element.style.setProperty('--x', `${x}%`);
    element.style.setProperty('--y', `${y}%`);
    });

    element.addEventListener('mouseleave', () => {
    // Optional: Reset to center or freeze where it was
    element.style.setProperty('--x', `50%`);
    element.style.setProperty('--y', `50%`);
    });
    
})();

  