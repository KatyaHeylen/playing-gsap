gsap.from(".circle", {duration: 2, y: 520, scale: 2.5, repeat: 10, yoyo: true, onComplete: showTheText});

function showTheText() {
    alert("Congratulations!!!!");
}


