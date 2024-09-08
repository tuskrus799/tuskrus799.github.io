const projects = [
    {
        title: "Calorie Counter",
        description: "Simple daily calorie counter web app made with HTML, CSS, and Javascript",
        link: "https://tuskrus799.github.io//freeCodeCamp/calorieCounter"
    },
    {
        title: "Rock Paper Scissors Game",
        description: "Simple webpage to play Rock Paper Scissors against a random decision computer. Made with HTML, CSS, and Javascript",
        link: "https://tuskrus799.github.io//freeCodeCamp/rockPaperScissors"
    }
];

function createProjectCard(project) {
    const card = document.createElement('div');
    card.className = 'project-card';
    
    card.innerHTML = `
        <h2>${project.title}</h2>
        <p>${project.description}</p>
        <a href="${project.link}" target="_blank">View Project</a>
    `;
    
    return card;
}

function displayProjects() {
    const container = document.getElementById('projects-container');
    projects.forEach(project => {
        const card = createProjectCard(project);
        container.appendChild(card);
    });
}

document.addEventListener('DOMContentLoaded', displayProjects);