# javaScript basics
Previous
Overview: Getting started with the web
Next
* JavaScript is a programming language that adds interactivity to your website. This happens in games, in the behavior of responses when buttons are pressed or with data entry on forms; with dynamic styling; with animation, etc. This article helps you get started with JavaScript and furthers your understanding of what is possible.

* What is JavaScript?
JavaScript is a powerful programming language that can add interactivity to a website. It was invented by Brendan Eich.

* JavaScript is versatile and beginner-friendly. With more experience, you'll be able to create games, animated 2D and 3D graphics, comprehensive database-driven apps, and much more!

* JavaScript itself is relatively compact, yet very flexible. Developers have written a variety of tools on top of the core JavaScript language, unlocking a vast amount of functionality with minimum effort. These include:

* Browser Application Programming Interfaces (APIs) built into web browsers, providing functionality such as dynamically creating HTML and setting CSS styles; collecting and manipulating a video stream from a user's webcam, or generating 3D graphics and audio samples.
Third-party APIs that allow developers to incorporate functionality in sites from other content providers, such as Twitter or Facebook.
Third-party frameworks and libraries that you can apply to HTML to accelerate the work of building sites and applications.
It's outside the scope of this article—as a light introduction to JavaScript—to present the details of how the core JavaScript language is different from the tools listed above. You can learn more in MDN's JavaScript learning area, as well as in other parts of MDN.

# The section below introduces some aspects of the core language and offers an opportunity to play with a few browser API features too. Have fun!

# A "Hello world!" example
 * JavaScript is one of the most popular modern web technologies! As your JavaScript skills grow, your websites will enter a new dimension of power and creativity.

* However, getting comfortable with JavaScript is more challenging than getting comfortable with HTML and CSS. You may have to start small, and progress gradually. To begin, let's examine how to add JavaScript to your page for creating a Hello world! example. (Hello world! is the standard for introductory programming examples.)

* Warning: If you haven't been following along with the rest of our course, download this example code and use it as a starting point.

* Go to your test site and create a new folder named scripts. Within the scripts folder, create a new text document called main.js, and save it.
In your index.html file, enter this code on a new line, just before the closing </body> tag:
HTML 
# eg

<script src="scripts/main.js"></script>
This is doing the same job as the <link> element for CSS. It applies the JavaScript to the page, so it can have an effect on the HTML (along with the CSS, and anything else on the page).
Add this code to the main.js file:
JS
Copy to Clipboard

/* const myHeading = document.querySelector("h1");
myHeading.textContent = "Hello world!";
Make sure the HTML and JavaScript files are saved. Then load index.html in your browser. You should see something like this:01~JavaScript basics
Previous
Overview: Getting started with the web
Next. //
