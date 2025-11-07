
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



const form = document.getElementById('contact-form');
const successMessage = document.getElementById('success-message');


const phoneNumber = '5531997711339'; 

form.addEventListener('submit', function(e) {
    e.preventDefault(); 
   
    const name = form.querySelector('input[name="name"]').value;
    const email = form.querySelector('input[name="email"]').value;
    const subject = form.querySelector('input[name="subject"]').value;
    const message = form.querySelector('textarea[name="message"]').value;

    
    const whatsappMessage = 
        `[Mensagem do Portfólio]\n\n` +
        `Nome: ${name}\n` +
        `Email: ${email}\n` +
        `Assunto: ${subject}\n\n` +
        `Mensagem:\n${message}`;

    
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;

    
    window.open(whatsappUrl, '_blank');

  
    successMessage.style.display = 'block';

  
    setTimeout(() => {
        form.reset();
    }, 1000);

    
    setTimeout(() => {
        successMessage.style.display = 'none';
    }, 5000);
});


generateDots();
