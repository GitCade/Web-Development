const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const centerX = canvas.width / 2;
const centerY = canvas.height / 2;
const radius = 100; // Radius of the circle on which words will rotate
const words = ['Word1', 'Word2', 'Word3'];
const angles = [0, 120, 240]; // Initial angles for three words

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();

    // Calculate positions of words and draw lines
    const positions = angles.map(angle => {
        const radian = angle * Math.PI / 180;
        return {
            x: centerX + radius * Math.cos(radian),
            y: centerY + radius * Math.sin(radian)
        };
    });

    // Draw lines between words
    ctx.moveTo(positions[0].x, positions[0].y);
    ctx.lineTo(positions[1].x, positions[1].y);
    ctx.lineTo(positions[2].x, positions[2].y);
    ctx.lineTo(positions[0].x, positions[0].y);
    ctx.strokeStyle = '#fff';
    ctx.stroke();

    // Draw words
    ctx.font = '20px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    words.forEach((word, i) => {
        ctx.fillText(word, positions[i].x, positions[i].y);
    });

    // Update angles for rotation
    angles.forEach((angle, i) => {
        angles[i] = (angle + 1) % 360; // Increment angle for rotation
    });

    requestAnimationFrame(draw);
}

draw();
