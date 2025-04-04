(function() {
    // alert('javascript loaded.');
    // Nav gradient cursor
    const elements = document.querySelectorAll('.wp-block-template-part');

    elements.forEach(element => {
      element.addEventListener('mousemove', (e) => {
        const rect = element.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
    
        element.style.setProperty('--x', `${x}%`);
        element.style.setProperty('--y', `${y}%`);
      });
    
      element.addEventListener('mouseleave', () => {
        // Reset to center when mouse leaves
        element.style.setProperty('--x', `50%`);
        element.style.setProperty('--y', `50%`);
      });
    });
    
    // Get URL of class for specific targetting
    // Get the current URL
    const url = window.location.href;
    const specialURL = ["about", 'static-homepage']

    // if URL contains "about"
    if (url.includes("static")) {
        document.querySelector('.wp-block-post-content').classList.add('special-main');
        //console.log(document.querySelectorAll('.wp-block-post-content'));
    }


    if (url.includes("about")) {
        document.querySelector('.wp-block-post-content').classList.add('special-about');
    }

    // // Notes positioning
    // window.addEventListener('DOMContentLoaded', () => {
    //     const anchor = document.getElementById('notes');
    //     const sidebar = document.querySelector('.sidebar');
    
    //     if (anchor && sidebar) {
    //       const rect = anchor.getBoundingClientRect();
    //       const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    //       sidebar.style.top = `${rect.top + scrollTop}px`; // vertical alignment
    //       sidebar.style.left = `${rect.left + anchor.offsetWidth + 56}px`; // horizontal position (56px from anchor)
    //     }
    
    const notes = document.querySelectorAll('[id^="notes-"]'); // Select all elements with ID starting with "notes-"

    function positionSidebars() {
        notes.forEach(note => {
            const noteId = note.id; // e.g., "notes-1"
            const sidebar = document.querySelector(`.sidebar-${noteId.split('-')[1]}`); // Match "sidebar-1", "sidebar-2", etc.

            if (sidebar) {
                const rect = note.getBoundingClientRect();
                const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

                sidebar.style.position = "absolute"; // Ensure absolute positioning
                sidebar.style.top = `${rect.top + scrollTop}px`; // Align vertically
                sidebar.style.left = `${rect.left + note.offsetWidth + 56}px`; // 56px to the right
            }
        });
    }

    window.addEventListener('DOMContentLoaded', positionSidebars);
    window.addEventListener('resize', positionSidebars);
})();

  