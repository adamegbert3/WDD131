const projects = [
    {
        title: "Week 1 Ponder - META CSS",
        type: "Ponder",
        description: "I started learning how JS can interact with the website, and can make things more interactive.",
        image: "images/w1ponder.webp",
        link: "https://adamegbert3.github.io/WDD131/W1/ponder/meta-css.html"
    },
    {
        title: "Week 1 Prove",
        type: "Prove",
        description: "I learned how to make CSS change off of what the element is on.",
        image: "images/w1prove.webp",
        link: "https://adamegbert3.github.io/WDD131/W1/prove_mission/index.html"
    },
    {
        title: "Week 2 Ponder - DOM",
        type: "Ponder",
        description: 'I learned that the DOM is the Document Object Model, and that it is what "renders" the website and takes the HTML, CSS, and JS and make it so websites can read it.',
        image: "images/w2ponder.webp",
        link: "https://adamegbert3.github.io/WDD131/W2/ponder/dom.html"
    },
    {
        title: "Week 2 Assignment - DOM",
        type: "Prove",
        description: 'I learned that you can add "getElementById" and "addEventListener" and you are able to change your html and css dynamically.',
        image: "images/w2prove.webp",
        link: "https://adamegbert3.github.io/WDD131/W2/assignment/dom-theme.html"
    },
    {
        title: "Week 3 Ponder - Responsive Design",
        type: "Ponder",
        description: "We learned how media tags can move your items around your screen so when you have a small screen, you can make it so that they can still view the website.",
        image: "images/w3ponder.webp",
        link: "https://adamegbert3.github.io/WDD131/W3/ponder/ponder-responsive_design.html"
    },
    {
        title: "Week 3 Prove - Responsive Design",
        type: "Prove",
        description: "We learned how to make a dynamic header and how to make a dynamic nav bar.",
        image: "images/w3prove.webp",
        link: "https://adamegbert3.github.io/WDD131/W3/prove/prove-responsive_design.html"
    },
    {
        title: "Week 4 Ponder - Responsive Design",
        type: "Ponder",
        description: "Practicing between mobile view and desktop view, also more dynamic features added.",
        image: "images/w4ponder.webp",
        link: "https://adamegbert3.github.io/WDD131/W4/ponder/responsive-design.html"
    },
    {
        title: "Week 4 Modals",
        type: "Prove",
        description: "Learned how to make modals and how they can dynamically display pictures.",
        image: "images/w4modals.webp",
        link: "https://adamegbert3.github.io/WDD131/W4/modals/modals.html"
    },
    {
        title: "Week 4 Prove - Image Gallery with Modals",
        type: "Prove",
        description: "Added the modal functionality to the Old Faithful page.",
        image: "images/w4prove.webp",
        link: "https://adamegbert3.github.io/WDD131/W4/prove/index.html"
    },
    {
        title: "Week 5 Ponder - Accessibility",
        type: "Ponder",
        description: "We worked on aria labels, and how helpful that they can help screen readers. We also went over grid and how to use it in CSS.",
        image: "images/w5ponder.webp",
        link: "https://adamegbert3.github.io/WDD131/W5/ponder/ponder.html"
    },
    {
        title: "Week 5 Prove - Accessibility",
        type: "Prove",
        description: "Learned how to better use the console log while dynamically adding what the stars were.",
        image: "images/w5prove.webp",
        link: "https://adamegbert3.github.io/WDD131/W5/prove/prove.html"
    },
    {
        title: "Week 6 Ponder - Arrays and Array Methods",
        type: "Ponder",
        description: "Seeing how you can integrate user input to make other output, such as fruits and a gradebook.",
        image: "images/w6ponder.webp",
        link: "https://adamegbert3.github.io/WDD131/W6/ponder/array.html"
    },
    {
        title: "Blog Part 2",
        type: "Prove",
        description: "Here we worked on dynamically adding book posts.",
        image: "images/blogpart2.webp",
        link: "https://adamegbert3.github.io/WDD131/W6/blog/blog.html"
    },
    {
        title: "Week 7 Ponder - Forms",
        type: "Ponder",
        description: "We found out how to use checkout and forms.",
        image: "images/w7ponder.webp",
        link: "https://adamegbert3.github.io/WDD131/W7/ponder/form.html"
    },
    {
        title: "Week 7 Prove - Credit Card Form",
        type: "Prove",
        description: "Built an interactive form that looks like a credit card.",
        image: "images/w7prove.webp",
        link: "https://adamegbert3.github.io/WDD131/W7/prove/index.html"
    },
    {
        title: "Week 8 Ponder - Course Sections",
        type: "Ponder",
        description: "We worked on tables and how to dynamically add students.",
        image: "images/w8ponder.webp",
        link: "https://adamegbert3.github.io/WDD131/W8/ponder/index.html"
    },
    {
        title: "Week 8 Prove - Objects",
        type: "Prove",
        description: "Built a character card that you can keep track of levels and health.",
        image: "images/w8prove.webp",
        link: "https://adamegbert3.github.io/WDD131/W8/charactercard/index.html"
    },
    {
        title: "Week 9 Ponder - Flexbox",
        type: "Ponder",
        description: "We practiced flexbox on this activity, and placing thigns where we wanted them.",
        image: "images/w9ponder.webp",
        link: "https://adamegbert3.github.io/WDD131/W9/ponder/index.html"
    },
    {
        title: "Week 9 Prove - RecipeBook",
        type: "Prove",
        description: "Built a recipe book website that shows pictures and a description of the recipe.",
        image: "images/w9prove.webp",
        link: "https://adamegbert3.github.io/WDD131/W9/prove/index.html"
    },
    {
        title: "Week 10 Ponder - Hiking",
        type: "Ponder",
        description: "Here I built a search function that you can search different hikes that you can go on.",
        image: "images/w10ponder.webp",
        link: "https://adamegbert3.github.io/WDD131/W10/ponder/index.html"
    },
    {
        title: "Week 10 Prove - Recipe Book and Search",
        type: "Prove",
        description: "Added search functionality to the recipe book.",
        image: "images/w10prove.webp",
        link: "https://adamegbert3.github.io/WDD131/W10/prove/index.html"
    }
];

const container = document.querySelector('#project-list');

// to appear normally
// projects.forEach((project) => {
//     const card = `
//         <div class="project-card">
//             <h3>${project.title}</h3>
//             <p>${project.description}</p>
//             <img src="${project.image}" alt="${project.title}">
//             <a href="${project.link}">View Project</a>
//         </div>
//     `;

//     container.innerHTML += card;
// });

function renderProjects(projects) {
    container.innerHTML = "";
    projects.forEach((project) => {
        container.innerHTML += `<div class="project-card">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <img src="${project.image}" alt="${project.title}">
            <a href="${project.link}">View Project</a>
        </div>`;
    });
}
renderProjects(projects);

const ponderFilterButton = document.querySelector('#show-ponder');
ponderFilterButton.addEventListener('click', function() {
    const filteredPonder = projects.filter((project) => {
        if (project.type === "Ponder") {
            return true;
        }
        else {
            return false;
        }
    })
    renderProjects(filteredPonder)
})

const proveFilterButton = document.querySelector('#show-prove');
proveFilterButton.addEventListener('click', function() {
    const filteredProve = projects.filter((project) => {
        if (project.type === "Prove") {
            return true;
        }
        else {
            return false;
        }
    })
    renderProjects(filteredProve)
})

document.querySelector('#show-all').addEventListener('click', function(){
    renderProjects(projects)
})

const menuButton = document.querySelector('#menu-button');
const navLinks = document.querySelector('#nav-links');

menuButton.addEventListener('click', function() {
    navLinks.classList.toggle('open');
})