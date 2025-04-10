# Documentation
## How to add captions
<img width="667" alt="image" src="https://github.com/user-attachments/assets/38b8d449-7ad7-41e0-b4a9-d9feb2ad72bd" />

```html 
  <div class='caption'>Caption Text, 2025</div>
```


## How to add notes as a sidebar in WP
<img width="667" alt="image" src="https://github.com/user-attachments/assets/44f0518d-c2c1-4532-b756-cbedf52e369d" />

This feature has two steps:
1. Label the paragraph that the notes are supposed to be aligned with, under **HTML Anchor**, with `notes-#NUMBER#', e.g. `notes-1`
2. Add a custom HTML block underneath, that will contain the content of your notes

```html
<div class="sidebar sidebar-1"> /** This should correspond with the number of the HTML anchor of the block it will top align with **/
  <h2 class="sidebar-title">Notes from Essay</h2> 
  <p class="text">
    <span class="emphasis">Lorem ipsum</span> si dolor est ... /** For emphasizing parts of the text **/
  </p>
  <p class="text">
    <span class="emphasis">DEFINITION OF TERM:</span>
    Lorem ipsum si dolor est ...
  </p>
  <p class="text">
    <span class="emphasis">DEFINITION OF TERM AGAIN:</span> 
    Lorem ipsum si dolor est ...
  </p>
</div>
```

