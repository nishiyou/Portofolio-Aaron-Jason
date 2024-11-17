const projects = [
    {
        name: "Saint John Quiz App",
        description: "This is an Android Quiz App for Saint John Elementary School that can help student there to study using an app",
        image: "images/AppSplash.png",
        link: "https://github.com/nishiyou/Saint-John-Math-Quiz",
        linkText: "View on GitHub"
    },
    {
        name: "Super Encryption Implementation",
        description: "Its an encription for cryptograph study that i make using HTML",
        image: "images/Project 2.png",
        link: "https://github.com/nishiyou/Project_Implementasi_Super_Enkripsi",
        linkText: "View on GitHub"
    },
    {
        name: "Train my coding skill using leetcode",
        description: "if im not doing any project, then i honed my skill using leet code and solve many problem",
        image: "images/leetpng.png",
        link: "https://leetcode.com/u/egoly/",
        linkText: "View on LeetCode"
    }
];

const projectContainer = document.getElementById("project-container");

projects.forEach(project => {
    const projectCard = document.createElement("div");
    projectCard.classList.add("project-card");

    if (project.image) {
        const projectImage = document.createElement("img");
        projectImage.src = project.image;
        projectImage.alt = project.name;
        projectCard.appendChild(projectImage);
    }

    const projectName = document.createElement("h3");
    projectName.textContent = project.name;
    projectCard.appendChild(projectName);

    const projectDescription = document.createElement("p");
    projectDescription.textContent = project.description;
    projectCard.appendChild(projectDescription);

    const projectLink = document.createElement("a");
    projectLink.href = project.link;
    projectLink.target = "_blank";
    projectLink.textContent = project.linkText;
    projectCard.appendChild(projectLink);

    projectContainer.appendChild(projectCard);
});
