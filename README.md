j-accordion.js
===========

j-accordion.js is a jQuery accordion plugin just like the one on the NVIDIA homepage (<a href="http://www.nvidia.com/page/home.html" target="_blank">http://www.nvidia.com/page/home.html</a>)

### Include the following CSS in the HTML header:

    <!-- YUI 3 CSS -->
    <link rel="stylesheet" type="text/css" href="http://yui.yahooapis.com/combo?3.12.0/cssreset/cssreset-min.css&3.12.0/cssfonts/cssfonts-min.css&3.12.0/cssgrids/cssgrids-min.css&3.12.0/cssbase/cssbase-min.css">

    <!-- j-accordion style CSS -->
    <link rel="stylesheet" type="text/css" href="style.css">

### This is the basic HTML structure required:

    <div class="accordion_container">
        <h1>Title 1</h1>
        <div class="accordion">
            <div class="first current">
                <div class="content"><img src="http://placehold.it/200x95" /></div>
                <div class="tab">
                    <strong>Sub Title 1-1</strong>
                    <p>Content 1-1</p>
                </div>
            </div>
            <div class="second">
                <div class="content second"><img src="http://placehold.it/200x95" /></div>
                <div class="tab">
                    <strong>Sub Title 1-2</strong>
                    <p>Content 1-2</p>
                </div>
            </div>
            <div class="third">
                <div class="content third"><img src="http://placehold.it/200x95" /></div>
                <div class="tab">
                    <strong>Sub Title 1-3</strong>
                    <p>Content 1-3</p>
                </div>
            </div>
        </div>
    </div>

### The JavaScript before the closing body tag:

    <body>

        Here is the content

        <script type="text/javascript" src="http://code.jquery.com/jquery-latest.js"></script>
        <script type="text/javascript" src="j-accordin.js"></script>
        <script type="text/javascript">
        $(document).ready(function(){
            $('.accordion').jaccordion();
        });
        </script>
    </body>
