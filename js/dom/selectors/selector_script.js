// var tag = document.getElementById('highlight');
//
// var tags = document.getElementsByClassName("bolded");
// console.log(tags[0]);
//
// var tags_by_tag_name = document.getElementsByTagName("li");
// console.log(tags_by_tag_name[0]);

// var tag = document.querySelector("#highlight");
// var tag = document.querySelector(".bolded"); // gives only the first match

// var tags = document.querySelectorAll(".bolded");

// document.getElementById("first");
// document.getElementsByClassName("special")[0];
// document.querySelector("#first");
// document.querySelector(".special");
// document.querySelector("p");
// document.getElementsByTagName("p")[0];
// document.querySelectorAll("#first")[0];
//
// document.querySelector("h1 + p");

// Manipulating style
var h1 = document.getElementsByTagName("h1");

h1.style.color = "yellow";

// instead of directly manipulating styles:

// define some class in CSS:
// .some-class {
//   color: blue;
// }

var tag = document.getElementById("highlight");
tag.classList.add("some-class");
// classList.add; classList.remove; classList.toggle

// change text content
tag.textContent = "blah blah"

ul.textContent = "Orchids Succulents Tulips " // gets all text in child elements; treats as text

tag.innerHTML // preserves tags; treats as HTML

var link = document.querySelector("a");
link.getAttribute("href");
link.setAttribute("href", "https://www.cats.com");

var logo = document.querySelector("#hplogo")
var img = document.getElementsByClassName("no-frame")
img[0].setAttribute("src", "http://catipsum.com/imgs/global/logo_catface.svg")

for (i = 0; i < links.length; i++) {
	console.log(links[i].textContent);
	links[i].style.background = "pink";
  links[i].style.border = "1px dashed purple";
  links[i].setAttribute("href", "http://mastodon.social");
}
