// Method 1: Changing Content
let contentChange = $("#contentChange");
// console.log({ contentChange });
contentChange.text("Content changed using jQuery!");

// Method 2: Changing HTML
let htmlChange = $("#htmlChange");
console.log({ htmlChange });
// htmlChange.html("HTML content <strong>changed</strong> using jQuery!");

// Method 3: Changing Attributes
let attributeChange = $("#attributeChange");
console.log({ attributeChange });
// attributeChange.attr("src", "assets/img/dog.jpeg");
// attributeChange.attr("alt", "Dog");
// console.log({ attributeChange });

// Method 4: Changing CSS Properties
let cssChange = $(".cssChange");
console.log({ cssChange });
// cssChange.css({
//   "background-color": "yellow",
//   padding: "10px",
//   "font-size": "5rem",
// });

// Method 5: Appending and Prepending Elements
let list = $("#list");
console.log({ list });
// list.append("<li>Item 2</li>");
// list.prepend("<li>Item 0</li>");

// Method 6: Removing Elements
let toBeRemoved = $(".toBeRemoved");
console.log({ toBeRemoved });
// toBeRemoved.remove();
