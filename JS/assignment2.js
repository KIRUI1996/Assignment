//Discus different naming conventions in web programming (css classes and javascript variables)
 Naming conventions in css classes
//The CSS class naming convention defines rules for choosing the character sequences for naming a CSS class 
//to reduce the effort needed to read and understand the code
//There are various naming conventions, like using 
           //-hyphen-delimited strings, 
           //-BEM(Block-Element-Modifier), 
           //OOCSS(Object-oriented CSS), etc.
The BEM Convention
     //BEM is a convention that attempts to divide the overall user interface into small reusable components.
     //The abbreviation BEM stands for (Block‑Element‑Modifier).

      //Block: encapsulates a standalone entity that is meaningful on its own.
     // Element: parts of a block that have no standalone meaning.
     //Modifier: flags on blocks or elements.
Syntax
block__element--modifier
Block
//Blocks are independent entities. A block could represent site navigation, a header, a footer, etc.
Element
//Unlike a block, an element cannot be a standalone entity. In this example, our house needs four parts, i.e., a wall, roof, window, and door.

//Here is how we would incorporate our elements into an existing block:

//Using the BEM convention, we will add classes to each element as:

/* Adding two underscores, followed by the element name.*/
.block__element
/*<div class="house">
        <div class="house__roof "></div>
        <div class="house__window"></div>
        <div class="house__wall"></div>
        <div class="house__door"></div>
    </div>*/
Modifier
/*A modifier is a variation of an existing object. For example, we might need the same component in three different
 background colors. In such situations, modifiers are very handy.*/
 OOCSS
/* Object-oriented programming is a methodology that designs a program using classes and objects. The purpose of OOCSS(Object-oriented CSS), like any object-based coding method, is to encourage code reuse and, ultimately, faster and more efficient stylesheets that are easier to add to and maintain.
 
 Nicole Sullivan proposed object-oriented CSS in 2008 based on two principles:*/
 
 **The separation of structure from the skin.
 **The separation of the container from the content.
 Separation of Structure from the Skin
 //Skin: visible reusable visual patterns like colors, borders, etc.
 //Structure: Invisible reusable visual features.
 //We can abstract the different features into class-based modules, which act as reusable components for other elements.
 Summary
 /*The CSS class naming convention defines rules for choosing the character sequences for naming a CSS class.
 It is easier to read, organize, and search our code when we use the CSS class naming convention.
 There are various CSS class naming conventions, like using hyphen-delimited strings, BEM(Block-Element-Modifier), OOCSS(Object-oriented CSS), etc.
 BEM is a convention that attempts to divide the user interface into small reusable components.
 It gives us a clear picture of the relationship between the elements.
 Nicole Sullivan proposed object-oriented CSS in 2008 based on two principles - the separation of structure from skin and * the separation of the container from the content.
 We should always use the class name directly on the HTML element we wish to style.
 We should use the kebab casing or a hyphen-delimited string instead of the camel casing while naming a CSS class.*/

 Naming conventions in Javascript Variables
 /*   -Spaces are not allowed in variable names.
      -Only letters, digits, underscores, and dollar signs are permitted in variable names.
      -Case matters when it comes to variable names.
      -A letter (alphabet), an underscore (_), or a dollar sign ($) must be the first character in a variable name, any other special characters must not be taken.
      -certain terms such as reserved words in javascript shouldn’t be used to name variables