document.addEventListener("DOMContentLoaded", () => {
    const texts = ["Full Stack Developer"];
    let speed = 100;
    const textElement = document.querySelector(".typewriter-text");

    let textIndex = 0;
    let characterIndex = 0;

    function typeWriter() {
        if (characterIndex < texts[textIndex].length) {
            textElement.innerHTML += texts[textIndex].charAt(characterIndex);
            characterIndex++;
            setTimeout(typeWriter, speed);
        } else {
            setTimeout(eraseText, 1000);
        }
    }

    function eraseText() {
        if (textElement.innerHTML.length > 0) {
            textElement.innerHTML = textElement.innerHTML.slice(0, -1);
            setTimeout(eraseText, 50);
        } else {
            textIndex = (textIndex + 1) % texts.length;
            characterIndex = 0;
            setTimeout(typeWriter, 500);
        }
    }

    typeWriter();
});


// JavaScript to add animation for the Education timeline items
document.addEventListener("DOMContentLoaded", () => {
    const timelineItems = document.querySelectorAll(".timeline-item");

    function isElementInView(element) {
        const rect = element.getBoundingClientRect();
        return rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) + 100;
    }

    function checkTimelineItems() {
        timelineItems.forEach((item) => {
            if (isElementInView(item)) {
                item.classList.add("active");
            }
        });
    }

    checkTimelineItems();
    window.addEventListener("scroll", checkTimelineItems);
});

// JavaScript to handle animations on scroll
document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll('.animate-on-scroll');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Optional: Unobserve for one-time animation
            }
        });
    }, { threshold: 0.2 }); // 20% visibility to trigger animation

    elements.forEach(element => {
        observer.observe(element);
    });
});

document.addEventListener('DOMContentLoaded', function () {
    AOS.init();
    animateSkills();
});

function animateSkills() {
    const technicalSkills = document.querySelectorAll('.progress');
    const circles = document.querySelectorAll('.circle');
    // Add animation logic here
}


document.addEventListener('DOMContentLoaded', function () {
    AOS.init();
});

function animateSkills() {
    const technicalSkills = document.querySelectorAll('.progress');
    const circles = document.querySelectorAll('.circle');

    technicalSkills.forEach(skill => {
        const percentage = skill.getAttribute('data-skill');
        const progressBar = skill.querySelector('.progress-bar');
        progressBar.style.width = percentage + '%';
        progressBar.setAttribute('aria-valuenow', percentage);
        let currentPercentage = 0;

        const interval = setInterval(() => {
            if (currentPercentage < percentage) {
                currentPercentage++;
                progressBar.innerText = currentPercentage + '%';
            } else {
                clearInterval(interval);
            }
        }, 10);
    });

    circles.forEach(circle => {
        const skillPercentage = circle.getAttribute('data-skill');
        const percentageElement = circle.querySelector('.percentage');
        let currentPercentage = 0;

        const circleInterval = setInterval(() => {
            if (currentPercentage < skillPercentage) {
                currentPercentage++;
                percentageElement.innerText = currentPercentage + '%';
            } else {
                clearInterval(circleInterval);
            }
        }, 10);

        setTimeout(() => {
            circle.style.opacity = '1';
            circle.style.transform = 'scale(1)';
        }, 300);
    });
}

window.onload = function () {
    animateSkills();
};


(function () {
    emailjs.init("gokulfalke17@gmail.com"); // Replace with your actual EmailJS user ID
})();

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contactForm');
    form.addEventListener('submit', function (e) {
        e.preventDefault();

        emailjs.sendForm('gokulfalke17@gmail.com', 'gokulfalke17@gmail.com', this) // Replace with your Service ID and Template ID
            .then(function () {
                alert('Your message has been sent!');
                form.reset(); // Reset form fields after submission
            }, function (error) {
                alert('Failed to send message. Please try again later.');
            });
    });

    AOS.init(); // Initialize AOS animations
});

// Function to add 'footer-visible' class when the footer is in view
document.addEventListener("DOMContentLoaded", function () {
    const footer = document.querySelector("footer");

    function checkFooterInView() {
        const rect = footer.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;

        if (rect.top <= windowHeight && rect.bottom >= 0) {
            footer.classList.add("footer-visible");
        }
    }

    // Initial check and event listener for scroll
    checkFooterInView();
    window.addEventListener("scroll", checkFooterInView);
});

