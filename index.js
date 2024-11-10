const emailButton = document.getElementById('email');
const emailCopyText = document.getElementById('email-copied');
const email = "jacobigielski@gmail.com";

emailButton.addEventListener('click', () => {
    navigator.clipboard.writeText(email);
    emailCopyText.style.display = 'block';
    setTimeout(() => {
        emailCopyText.style.display = 'none';
    }, 2000);
});

const projectList = document.querySelector('.projects .projects-list');
const projectScrollButtons = document.querySelectorAll('.projects-scroll div');
let activeProject = 0;

const updateActiveProject = () => {
    projectList.style.transform = 'translateX(-' + activeProject * 100 + '%)';
}

projectScrollButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        activeProject = index;
        document.querySelectorAll('.projects-scroll .active').forEach((activeButton) => activeButton.classList.remove('active'));
        button.classList.add('active');
        updateActiveProject();
    });
});