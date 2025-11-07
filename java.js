
const themeToggle = document.getElementById("theme-toggle");
const body = document.body;
const backgroundContainer = document.getElementById("floating-background");
const NUM_DOTS = 500; 


const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
    body.classList.add("dark-mode");
}

themeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    if (body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
});




function generateDots() {
    for (let i = 0; i < NUM_DOTS; i++) {
        const dot = document.createElement('div');
        dot.classList.add('dot');

       
        const x = Math.random() * 100;
        const y = Math.random() * 100;

       
        const size = Math.random() * 3 + 3; 
        dot.style.width = `${size}px`;
        dot.style.height = `${size}px`;
        
        
        dot.style.left = `${x}vw`; 
        dot.style.top = `${y}vh`; 
        
       
        const animationDelay = Math.random() * 10; 
        const animationDuration = Math.random() * 10 + 10; 

        dot.style.animationDelay = `${animationDelay}s`;
        dot.style.animationDuration = `${animationDuration}s`;

        backgroundContainer.appendChild(dot);
    }
}


function adjustBackgroundHeight() {
    const bodyHeight = document.body.scrollHeight;
    backgroundContainer.style.height = `${bodyHeight}px`;
}

adjustBackgroundHeight();
window.addEventListener('resize', adjustBackgroundHeight);

generateDots();