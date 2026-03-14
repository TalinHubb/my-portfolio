const projects = [

{
title:"Evony Keep Tracker",
description:"Tracks building progress and upgrade goals for Evony.",
github:"#",
demo:"#",
button1:"GitHub",
button2:"Live Demo"
},

{
title:"This Portfolio Website",
description:"Responsive developer portfolio using HTML, CSS and JS.",
github:"https://github.com/TalinHubb/my-portfolio",
demo:"https://talinhubb.github.io/my-portfolio/",
button1:"GitHub",
button2:"This Site"
},

{
title:"LINE Translator Bot",
description:"Completely free to use LINE bot that translates messages with one click, using Google's translation API, and deployed on Render.",
github:"https://lin.ee/QFj2gHg",
demo:"https://line-translator-1-i242.onrender.com",
button1:"Add the Bot",
button2:"Live Demo"
}

]

const container = document.getElementById("project-container")

projects.forEach(project => {

const card = document.createElement("div")
card.classList.add("project-card")

card.innerHTML = `
<h3>${project.title}</h3>
<p>${project.description}</p>

<div class="project-links">
<a href="${project.github}">${button1}</a>
<a href="${project.demo}">${button2}</a>
</div>
`

container.appendChild(card)

})