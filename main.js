document.addEventListener('DOMContentLoaded', function() {
    const projects = [
        {
            title: 'Project One',
            description: 'Description for project one.',
            link: '#'
        },
        {
            title: 'Project Two',
            description: 'Description for project two.',
            link: '#'
        },
        {
            title: 'Project Three',
            description: 'Description for project three.',
            link: '#'
        }
    ];

    const projectsContainer = document.querySelector('.projects-container');

    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.classList.add('project-card');

        projectCard.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <a href="${project.link}" target="_blank">View Project</a>
        `;

        projectsContainer.appendChild(projectCard);
    });

    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const formData = new FormData(contactForm);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');

        console.log('Form submitted:', { name, email, message });

        // You can add more form handling logic here, like sending the data to a server
    });
});
