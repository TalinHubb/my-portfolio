const projects = [

{
title:"Evony Keep Tracker",
description:"Tracks building progress and upgrade goals for Evony.",
github:"#",
demo:"#"
},

{
title:"Portfolio Website",
description:"Responsive developer portfolio using HTML, CSS and JS.",
github:"#",
demo:"#"
},

{
title:"Automation Tool",
description:"Small tool that automates repetitive tasks.",
github:"#",
demo:"#"
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
<a href="${project.github}">GitHub</a>
<a href="${project.demo}">Demo</a>
</div>
`

container.appendChild(card)

})