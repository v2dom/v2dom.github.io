const script = document.createElement("script");
script.src = "https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js";

// Load particles.js and initialize the animation
script.onload = () => {
    // Initialize particles.js with specific settings
    particlesJS("particles-js", {
        "particles": {
            "number": {
                "value": 202,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": { "value": "#27293d" },
            "shape": {
                "type": "polygon",
                "stroke": { "width": 0, "color": "#000000" },
                "polygon": { "nb_sides": 7 },
                "image": { "src": "img/github.svg", "width": 100, "height": 100 }
            },
            "opacity": {
                "value": 0.5,
                "anim": { "enable": false }
            },
            "size": {
                "value": 3,
                "random": true,
                "anim": { "enable": true, "speed": 17.05, "size_min": 0.1, "sync": true }
            },
            "line_linked": { "enable": false },
            "move": {
                "enable": true,
                "speed": 3.2,
                "direction": "none",
                "out_mode": "out"
            }
        },
        "interactivity": {
            "detect_on": "window",
            "events": {
                "onhover": { "enable": true, "mode": "grab" },
                "onclick": { "enable": true, "mode": "repulse" },
                "resize": true
            },
            "modes": {
                "grab": { "distance": 245, "line_linked": { "opacity": 0.05 } },
                "bubble": { "distance": 1500, "size": 2, "duration": 0.72, "opacity": 0.9, "speed": 3 },
                "repulse": { "distance": 250, "duration": 0.4 }
            }
        },
        "retina_detect": true
    });
};

// Append the script to the document head
script.onerror = () => {
    console.error("Error loading particles.js. Please check the network or try again later.");
};

document.head.appendChild(script);
