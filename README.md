j-accordion.js v.2.0
===========

j-accordion.js is a jQuery accordion plugin.

You can see the demo [HERE](https://codepen.io/jerrywu/pen/pxZoQM).

## New features
* Mobile friendly (By default, it uses Twitter Bootstrap)
* Capabilities to specify the number of accordions and the number of sliding boxes to be created

## Settings
##### numberOfAccordions (Optional)
* Type: integer
* Default: 4

Specify the number of accordions to be created.

##### numberOfBoxesPerAccordion (Optional)
* Type: integer
* Default: 3

Specify the number of sliding boxes (per accordion) to be created.

##### accordionHeadings (Optional)
* Type: array
* Default: \['Heading 1', 'Heading 2', 'Heading 3', 'Heading 4'\]

Specify the heading for each accordion.

##### divAccordionContainerClass (Optional)
* Type: string
* Default: 'col-sm'

Specify the CSS class for each accordion. By default, the value is Twitter Bootstrap grid system class 'col-sm'.

##### data
* Type: array
* Default: 'col-sm'

Content that is going to present. An example for 2 accordions, each accordion has 3 sliding boxes.
  
  \[
    \[\{
      imagePath: 'images/yosemite-640x400.jpg',
      heading: 'Yosemite',
      content: 'California'
    \},
    \{
      imagePath: 'images/yellowstone-national-park-640x400.jpg',
      heading: 'Yellowstone',
      content: 'Wyoming, Montana and Idaho'
    \},
    \{
      imagePath: 'images/grand-canyon-national-park-640x400.jpg',
      heading: 'Grand Canyon',
      content: 'Arizona'
    \}\],
    \[\{
      imagePath: 'images/nozawa-onsen-640x400.jpg',
      heading: 'Nozawa Onsen',
      content: 'Nagano Prefecture'
    \},
    \{
      imagePath: 'images/kyoto-640x400.jpg',
      heading: 'Kyoto',
      content: 'Kyoto Prefecture'
    \},
    \{
      imagePath: 'images/tokyo-640x400.jpg',
      heading: 'Tokyo',
      content: 'Tokyo Metropolis'
    \}\]
  \]
  
