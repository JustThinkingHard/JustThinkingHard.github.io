/* static/js/lofi.js (Version Cute) */
particlesJS("particles-js", {
  "particles": {
    "number": { "value": 60 }, /* Assez de bulles pour être joyeux */
    "color": { "value": "#ffffff" },
    "shape": { "type": "circle" },
    "opacity": {
      "value": 0.6, /* Plus lumineux */
      "random": true, /* Scintillement */
      "anim": { "enable": true, "speed": 1, "opacity_min": 0.1, "sync": false }
    },
    "size": {
      "value": 8, /* Plus grosses ! (Style Bokeh/Bulles) */
      "random": true, /* Certaines petites, certaines grosses */
      "anim": { "enable": false }
    },
    "line_linked": {
      "enable": false /* <--- ON COUPE LES LIGNES (C'est ça le secret) */
    },
    "move": {
      "enable": true,
      "speed": 2, /* Un peu plus dynamique */
      "direction": "top", /* Ça monte vers le ciel */
      "random": true,
      "straight": false,
      "out_mode": "out",
      "bounce": false
    }
  },
  "interactivity": {
    "detect_on": "window",
    "events": {
      "onhover": { "enable": true, "mode": "repulse" }, /* Amusant : les bulles fuient la souris */
      "onclick": { "enable": true, "mode": "push" },
      "resize": true
    },
    "modes": {
      "repulse": { "distance": 100, "duration": 0.4 }
    }
  },
  "retina_detect": false
});