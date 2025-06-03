(function() {
    // alert('javascript loaded.');
    
    // changing A.I. tagline on load
    const allTags = document.getElementsByClassName("wp-block-site-tagline");
    phrase = getPhrase();
    // replace it in each location.   
    for (const one of allTags) {
      one.innerHTML = phrase;
    }
  
    // setting timer to refresh tagline on interval
  setInterval(changeAIText, 2500);
  

// this function controls changing the text 
function changeAIText() {
  for (const one of allTags) {
    one.classList.add('hide');
  setTimeout(function () {
      one.innerHTML = getPhrase();
      one.classList.remove('hide');
  }, 800);
}
}
    
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

    // This function tests out the SVG interactivity
  document.addEventListener("DOMContentLoaded", function () {
    const circle = document.getElementById("circle1");
    const rect = document.getElementById("rect1");
    const islandgrp2 = document.getElementById("island-group-2");
    const islandgrp1 = document.getElementById("island-group-1");
    const hoverText = document.getElementById("hover-text");

    // Function to show tooltip
    function showText(text, event) {
      hoverText.textContent = text;
      hoverText.style.opacity = 1;

      // Move tooltip near mouse
      const container = document.getElementById("svg-container");
      const rect = container.getBoundingClientRect();
      hoverText.style.left = (event.clientX - rect.left + 10) + "px";
      hoverText.style.top = (event.clientY - rect.top + 10) + "px";
    }

    function showTextAtGroupCenter(groupId, text) {
      const group = document.getElementById(groupId);
      const bbox = group.getBBox(); // SVG coordinates
      const svgRect = svg.getBoundingClientRect();
      const containerRect = container.getBoundingClientRect();

      // Calculate center of group in SVG space
      const centerX = bbox.x + bbox.width / 2;
      const centerY = bbox.y + bbox.height / 2;

      // Convert SVG center to container-relative position
      const xPercent = centerX / svg.viewBox.baseVal.width;
      const yPercent = centerY / svg.viewBox.baseVal.height;

      const containerX = xPercent * svgRect.width;
      const containerY = yPercent * svgRect.height;

      hoverText.textContent = text;
      hoverText.style.left = containerX + "px";
      hoverText.style.top = containerY + "px";
      hoverText.style.opacity = 1;
    }


    // Function to hide tooltip
    function hideText() {
      hoverText.style.opacity = 0;
    }

    circle.addEventListener("mouseenter", (e) =>
      showText("Corporate AI is nowhere", e)
    );

    circle.addEventListener("mousemove", (e) =>
      showText("Corporate AI is nowhere", e)
    );
    circle.addEventListener("mouseleave", hideText);

    rect.addEventListener("mouseenter", (e) =>
      showText("AI can work in harmony with the environment", e)
    );
    rect.addEventListener("mousemove", (e) =>
      showText("AI can work in harmony with the environment", e)
    );
    rect.addEventListener("mouseleave", hideText);

    let text = ["Corporate AI is nowhere", "AI can work in harmony with the environment"];
    let objects = [islandgrp1, islandgrp2];

    for (let i in text) {
      console.log(i, text[i]);
      objects[i].addEventListener("mouseenter", (e) =>
        showText(text[i], e)
      );

      objects[i].addEventListener("mousemove", (e) =>
        showText(text[i], e)
      );

      objects[i].addEventListener("mouseleave", hideText);
    }

     // EChange color on click
    circle.addEventListener("click", () => {
      circle.setAttribute("opacity", 0.5);
    });
    
    // Change opacity on mouseenter
    islandgrp1.addEventListener("mouseenter", () => {
      islandgrp2.setAttribute("opacity", 0.2);
      islandgrp1.setAttribute("opacity", 1);
    });

      // Change opacity on mouseenter
    islandgrp2.addEventListener("mouseenter", () => {
      islandgrp1.setAttribute("opacity", 0.2);
      islandgrp2.setAttribute("opacity", 1);
    });


    islandgrp1.addEventListener("mouseleave", () => {
      islandgrp2.setAttribute("opacity", 1);
      islandgrp1.setAttribute("opacity", 1);
    });

    islandgrp2.addEventListener("mouseleave", () => {
      islandgrp2.setAttribute("opacity", 1);
      islandgrp1.setAttribute("opacity", 1);
    });


    // Animate movement
    rect.addEventListener("click", () => {
      let x = 100;
      const interval = setInterval(() => {
        x += 2;
        rect.setAttribute("x", x);
        if (x > 200) clearInterval(interval);
      }, 30);
    });

    // Example: Hide/show group
    group1.addEventListener("dblclick", () => {
      const visibility = group1.getAttribute("visibility") === "hidden" ? "visible" : "hidden";
      group1.setAttribute("visibility", visibility);
    });
  });
})();

// load the As and the Is and
function getPhrase() {
  const awords = ['Able', 'Abolitionist ', 'Abrasive', 'Absolute', 'Abundant', 'Active', 'Actualized', 'Adaptive', 'Adorable', 'Advantageous', 'Adversarial', 'Affiliated', 'Afloat', 'Agreeable', 'Allied', 'Amalgmated', 'Ambivalent', 'Amorphous', 'Ample', 'Amplified', 'Analog', 'Ancestral', 'Anchored', 'Ancient', 'Antiquated', 'Any kind of', 'Apodictic', 'Applicable', 'Applied', 'Apposite', 'Apropos', 'Apt', 'Assembled', 'Auspicious', 'Authentic'];

 const iwords = ['Idealisms', 'Ideographs', 'Ideologies', 'Illusions', 'Images', 'Imaginations', 'Immersions', 'Importance', 'Incantations', 'Inclusion', 'Incrementalness', 'Information', 'Infrastructures', 'Inquisitiveness', 'Insights', 'Insubordination', 'Intelligences', 'Intercommunalism', 'Interconnectedness', 'Interdependence', 'Interjections', 'Interlocutors', 'Intermediaries', 'Interpellations', 'Interpretations', 'Interregnums', 'Interrelations', 'Interrogations', 'Intersections', 'Intertwining', 'Interventions', 'Interweaving', 'Intuitions', 'Iterations'];


 // get a,i word
 var a = awords[ Math.floor(Math.random() * awords.length) ];
 var i = iwords[ Math.floor(Math.random() * iwords.length) ];

 return a + " " + i;
}
  


