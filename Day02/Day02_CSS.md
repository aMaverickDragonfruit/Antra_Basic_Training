# CSS
## Why links the CSS in front of body tag?
HTML files read from top to bottom, we want the style applies when the page loads. Good practice to link the style sheet before the body tag.
## bootstrap: most popular front-end open-source toolkit
## CDN: content deliver network (ATM metaphor)
CDN is a geographically distributed group of servers that caches content close to end users
## CSS Selector
### CSS Single Selector
- element selector: 'element-name' {}
- id selector: '#id-name'{} (one element can only have one id, id is unique)
- class selector: '.class-name'{}
### CSS combination Selector
- #class-1-name, #class-2-name {}
  - apply style to class-1 and class-2
- #class-1-name #class-2-name {} 
  - descendant selector 
  - there is a single space (' ') in between
  - select the elements which are descendants/nested of a specific ancestor element, no matter how deep the nesting is 
  - class-2 is the descendant of class-1, the style will apply to this class-2
- #class-1-name#class-2-name {}
  - chain selector
  - no single space (' ') in between
  - select the element that have multiple specific rules to them simultaneously
  - more specific
  - e.x. \<div class="class-1-name class-2-name">\</div>
## Cascade
- The algorithm determines how to find the value to apply for each property for each document element
- determine the style priority
  - Inline
  - Internal style
  - External style
  - Online external style (user)
  - Default browser
- Order matter
  - When two rules with same equal specificity apply, the later one wins
## Specificity
- The algorithm calculates the specificity of a CSS selector to determine which rule apply to the selected element
- When multiple selectors apply to the same element, browser determine which rule applies according to the specificity
## Box Model
- Content
- Padding: transparent space surrounding the content
  - inline elements doesn't have top & bottom padding
  - cannot be negative
- Border: surrounding padding and content
- Margin: transparent space outside border, separating elements
  - can be negative or positive
## Content Box VS Border Box
### box-sizing: content box
- default setting
- The actual box width / height = content + padding + border
- e.x. .box {width: 350px; border: 10px solid black;}
  - the box is 370px wide
  - box content is 350px
### box-sizing: border box
- The actual box width / height = content
- padding, border are including inside of the content
- e.x. .box {width: 350px; border: 10px solid black;}
  - the box is 370px wide
  - box content is 330px
    - width - border * 2
## Display
### block: takes whole line(screen width) space
### inline: doesn't have height
### inline-block: has height
### none: hide element, doesn't take up web page space
### flex: one dimensional layout model
- flex: flex-grow, flex-shrink, flex-basis
### grid: two dimensional layout model
## Unit
### rem: 1rm = 16px (default)
why using rem:
- if user changes font size, rem unit will adjust it accordingly
- better for responsive part
## CSS reset
### why reset CSS:
- ensure cross browser compatibility
## Responsive Design
How to implement responsive design
- using flex or grid
  - flex-wrap: wrap
  - grid: 
    - grid-template-columns: repeat(auto-fit, minmax(200px, 1fr))
-  meta tag with viewport
-  Media query: most important part, while screen size change
   -  @media screen (min-width: 700px) {}
## BEM: Block Element Modifier
- BEM is a methodology helps developers to create reusable components and code sharing in front-end development
- [know more about BEM](https://getbem.com/introduction/)
- Block: Standalone entity that is meaningful on its own
  - e.x. header, container, menu, checkbox, input
- Element: A part of a block that has no standalone meaning and is semantically tied to its block
  - menu item, list item, checkbox caption, header title
- Modifier: A flag on a block or element. Use them to change appearance or behavior
  - disabled, highlighted, checked, fixed, size big, color yellow

## SCSS, SASS: Both are CSS preprocessor