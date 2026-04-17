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

function initProjects() {
    const container = document.getElementById("project-container");

    // 🚨 Prevent crashes on pages without projects section
    if (!container || typeof projects === "undefined") return;

    projects.forEach(project => {

        const card = document.createElement("div");
        card.classList.add("project-card");

        const buttons = buildButtons(project);

        card.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <div class="project-links">
                ${buttons}
            </div>
        `;

        container.appendChild(card);
    });
}


// 🔥 Cleaner button builder (separation of concerns)
function buildButtons(project) {
    let buttons = "";

    if (project.github) {
        buttons += `<a href="${project.github}" target="_blank">
                        ${project.button1 || "GitHub"}
                    </a>`;
    }

    if (project.demo) {
        buttons += `<a href="${project.demo}" target="_blank">
                        ${project.button2 || "Demo"}
                    </a>`;
    }

    return buttons;
}


// 🚀 Run everything safely after page loads
document.addEventListener("DOMContentLoaded", () => {
    initProjects();
});

document.addEventListener("DOMContentLoaded", () => {

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

if (!lightbox || !lightboxImg) return;

const images = document.querySelectorAll(".zoomable");

console.log("Zoomable images found:", images.length);

images.forEach(img => {
    img.style.cursor = "zoom-in";

    img.addEventListener("click", () => {
        lightbox.classList.add("show");
        lightboxImg.src = img.src;
    });
});

lightbox.addEventListener("click", () => {
    lightbox.classList.remove("show");
    lightboxImg.src = "";
});

});

console.log(document.querySelectorAll(".zoomable"));