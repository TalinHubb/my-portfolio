const projects = [

{
title:"LINE Translator Bot",
description:"Completely free to use LINE bot that translates messages with one click, using Google's translation API, and deployed on Render.",
github:"https://line.me/R/ti/g/-hB4JpQALq",
demo:"translator.html",
button1:"Test Group",
button2:"More Info"
},

{
title:"Evony Keep Tracker",
description:"Tracks building progress and upgrade goals for Evony.",
github:"https://talinhubb.github.io/building_buddy/",
demo:"building_buddy.html",
button1:"Live Product",
button2:"More Info"
},

{
title:"This Portfolio Website",
description:"Responsive developer portfolio using HTML, CSS and JS.",
github:"https://github.com/TalinHubb/my-portfolio",
demo:"portfolio.html",
button1:"GitHub",
button2:"More Info"
}

]

const container = document.getElementById("project-container")

projects.forEach(project => {

const card = document.createElement("div")
card.classList.add("project-card")

let buttons = ""

if(project.github){
buttons += `<a href="${project.github}">${project.button1 || "GitHub"}</a>`
}

if(project.demo){
buttons += `<a href="${project.demo}">${project.button2 || "Demo"}</a>`
}

card.innerHTML = `
<h3>${project.title}</h3>
<p>${project.description}</p>
<div class="project-links">${buttons}</div>
`

container.appendChild(card)

})