let scrollRevealOption = {
    distance: "15px",
    duration: 500,
};
ScrollReveal().reveal(".conta", {
    ...scrollRevealOption,
    origin: "top",
});
ScrollReveal().reveal(".conta", {
     ...scrollRevealOption,
     delay: 500,
});

let text = document.querySelector(".text")
let btns = document.querySelectorAll(".btn");
let obj = [
{stepText : "Web development is super exciting! Step 1 is to learn the basics of HTML which is the code that builds websites. Don't worry, it's easier than you think. Just start by making simple web pages and explore how tags work. You're on your way to becoming a web developer. Let’s begin the journey with passion and patience, and a mindset ready to grow and explore!"},
{stepText : "Great job learning HTML! Step 2 is all about understanding CSS, which helps make your pages visually appealing and clean. CSS lets you style layouts, colors, and fonts. Start by adding simple designs to your HTML pages and see how things change. Embrace creativity and keep building with confidence!"},
{stepText : "You’ve got HTML and CSS—awesome progress! Step 3 is diving into the language that adds life to your webpages. With JavaScript, you can make buttons react, build animations, show messages, and control what users see. Start with small functions and build up your knowledge. With time, your sites won’t just look great—they’ll feel alive and dynamic! 🚀🧠✨"}
];
btns.forEach((key,index)=>{
key.addEventListener("click",()=>{
text.innerHTML = obj[index].stepText;
});
});