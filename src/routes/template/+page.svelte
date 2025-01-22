<script>
    let imageSrc = 'base-images/test-image-1.jpg'
</script>
<div class='content'>
    <h1>
        PRINCIPLE/ITEM TITLE
    </h1>

    <p>Lorem ipsum si dolor est</p>
    <p>Lorem ipsum si dolor est</p>

    <h2>
        EXAMPLE (section)
    </h2>

    <p>
        Text about this example, lorem etc. There may be 3 or 4 items here w/images that float left.
    </p>

    <div class='further-reading'>
        <h2>
            FURTHER READING
        </h2>

        <div class="flex items-start gap-4 p-4">
            <!-- Image on the left -->
            <img 
              src={imageSrc} 
              alt="Descriptive Alt Text" 
              class="w-48 h-auto object-cover rounded-md shadow-md"
            />
          
            <!-- Text on the right -->
            <div class="text-content">
              <h2 class="text-2xl font-bold mb-2">Heading</h2>
              <p class="text-gray-700 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et mi 
                ac ligula venenatis euismod. Curabitur sit amet augue nec turpis 
                volutpat tristique. Suspendisse potenti. Praesent posuere tristique 
                massa, non tincidunt magna consequat nec.
              </p>
            </div>
          </div>

        <p>
            Placeholder text with formatting to include <b> bold</b> <em>italics</em> and new/visited link color. This section should also have formatting
            for ordered and unordered lists as well as hanging indents to support academic citations.
        </p>
        <br/>
        <p class="hanging-indent">
            This is an example of a paragraph with a hanging indent. The first line is flush
            with the margin, while subsequent lines are indented.
        </p>
        <br/>
        <ul>
            <li>
                ABC
            </li>
            <li>
                123
            </li>
        </ul>
        <br/>
        <ol>
            <li>
                ABC
            </li>
            <li>
                123
            </li>
        </ol>
    </div>
</div>

<style>
    .content {
        max-width: 960px;
        margin: auto;
    }

    .hanging-indent {
    text-indent: -1.5em;
    padding-left: 1.5em;
    }
</style>
