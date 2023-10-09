// Method 1: Accessing Elements by ID
let myElement = $("#myElement");
myElement.text("Element accessed by ID using jQuery!");

// Method 2: Accessing Elements by Class
let myClassElement = $(".myClass");
myClassElement.text("Element accessed by class using jQuery!");

// Method 3: Accessing Elements by Tag Name
let listItems = $("ul li");
listItems.text("List item modified using jQuery!");

// Method 4: Accessing Elements by Attribute
let link = $("a[href='https://example.com']");
link.text("Modified link using jQuery!");

// Method 5: Accessing Elements by Index
let secondElement = $("div:eq(1)");
secondElement.text("Second element modified using jQuery!");
