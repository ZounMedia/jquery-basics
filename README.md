# jQuery Basics

A repo created to teach the basics of jQuery

## jQuery Overview

jQuery is a fast, small, and feature-rich JavaScript library. It makes things like HTML document traversal and manipulation, event handling, and animation much simpler with an easy-to-use API that works across a multitude of browsers.

**Key jQuery features**

- Simplified DOM Manipulation: Query simplifies DOM manipulation by providing a concise and easy-to-understand syntax.
- Event Handling: jQuery allows easy attachment of event handlers to elements.
- AJAX Support: jQuery simplifies AJAX requests, allowing you to load data from the server without a page refresh
- Animation and Effects: Query provides methods for animations and effects, making it easy to create smooth animations and transitions on web pages.
- Chaining: jQuery allows you to chain multiple methods together, enhancing readability and conciseness of your code.

### Accessing DOM Elements

jQuery enables us to access DOM elements with easy-to-use and simple syntax.

**Accessing Elements by Tag Name:**

```js
// Access all <p> elements and hide them
$("p").hide();
```

This code selects all <p> elements and hides them using the hide() method.

**Accessing Elements by ID:**

```js
// Access an element with id="myElement" and change its text
$("#myElement").text("Changed text using jQuery!");
```

This code accesses an element by its ID ("myElement") and changes its text content using the text() method.

**Accessing Elements by Class Name:**

```js
// Access all elements with class "myClass" and add a CSS class
$(".myClass").addClass("newClass");
```

This code selects all elements with class "myClass" and adds another class "newClass" using the addClass() method.

**Accessing Elements by Attribute:**

```js
// Access all <a> elements with href attribute containing "example.com"
$("a[href*='example.com']").css("color", "red");
```

This code selects all <a> elements with an href attribute containing "example.com" and changes their text color to red using the css() method.

**Accessing Elements by Parent-Child Relationship:**

```js
// Access all <li> elements that are children of <ul> elements
$("ul > li").css("font-weight", "bold");
```

This code selects all <li> elements that are direct children of <ul> elements and changes their font weight using the css() method.

**Accessing Elements by Index:**

```js
// Access the second <div> element and change its background color
$("div:eq(1)").css("background-color", "yellow");
```

This code accesses the second <div> element (index 1, as indexing starts from 0) and changes its background color using the css() method.

**Accessing Elements Using :first and :last Selectors:**

```js
// Access the first <p> element and change its text
$("p:first").text("First paragraph modified using jQuery!");

// Access the last <p> element and change its text
$("p:last").text("Last paragraph modified using jQuery!");
```

These codes select the first and last <p> elements and change their text content using the text() method.

### Manipulating DOM Elements

**Changing Content:**

```js
// Change the text content of an element with ID "myElement"
$("#myElement").text("New text using jQuery!");
```

This code changes the text content of an element with ID "myElement" using the text() method.

**Changing HTML:**

```js
// Change the HTML content of an element with ID "myElement"
$("#myElement").html("<strong>New HTML using jQuery!</strong>");
```

This code changes the HTML content of an element with ID "myElement" using the html() method.

**Changing Attributes:**

```js
// Change the src attribute of an <img> element with ID "myImage"
$("#myImage").attr("src", "new-image.jpg");
```

This code changes the src attribute of an <img> element with ID "myImage" using the attr() method.

**Changing CSS Properties:**

```js
// Change the background color of elements with class "myClass"
$(".myClass").css("background-color", "yellow");
```

This code changes the background color of elements with class "myClass" using the css() method.

**Appending and Prepending Elements:**

```js
// Append a new <li> element to an <ul> element with ID "myList"
$("#myList").append("<li>New Item</li>");

// Prepend a new <li> element to an <ul> element with ID "myList"
$("#myList").prepend("<li>New First Item</li>");
```

These codes append and prepend new <li> elements to the <ul> element with ID "myList" using the append() and prepend() methods, respectively.

**Removing Elements:**

```js
// Remove all <div> elements with class "toBeRemoved"
$(".toBeRemoved").remove();
```

This code removes all <div> elements with class "toBeRemoved" using the remove() method.

**Handling Events:**

```js
// Add a click event handler to elements with class "clickable"
$(".clickable").click(function () {
  alert("Element clicked!");
});
```

This code adds a click event handler to elements with class "clickable" using the click() method. When any element with this class is clicked, it shows an alert.
