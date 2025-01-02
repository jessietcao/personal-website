document.addEventListener("DOMContentLoaded", () => {
  const stars = document.querySelectorAll(".star");
  const moonElement = document.querySelector('.moon');

  const rect = moonElement.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;

  const distanceA = 300; // Distance from the moon (ellipse major axis)
  const distanceB = 100; // Distance from the moon (ellipse minor axis)

  stars.forEach((star, index) => {
    const angle = (index / stars.length) * 360; // Evenly space stars
    const duration = 2 + Math.random(); // Random shooting duration

    // Set initial position at the center
    star.style.left = `${centerX}px`;
    star.style.top = `${centerY}px`;

    // Create shooting effect
    setTimeout(() => {
      const targetX = centerX + distanceA * Math.cos((angle * Math.PI) / 180);
      const targetY = centerY + distanceB * Math.sin((angle * Math.PI) / 180);

      star.style.transition = `transform ${duration}s ease-out, opacity 0.5s`;
      star.style.transform = `translate(${targetX - centerX}px, ${targetY - centerY}px)`;
      star.style.opacity = 1;

      // After shooting, start revolving
      setTimeout(() => {
        star.style.transition = `none`; // Stop transition for spinning
        spinStar(star, angle, distanceA, distanceB);
      }, duration * 1000);
    }, index * 200); // Delay between stars shooting
  });

  // Add cursor movement effect
  document.addEventListener('mousemove', (event) => {
    const mouseX = event.clientX;
    const mouseY = event.clientY;
    const shiftAmount = 90; // Maximum shift amount for the stars

    stars.forEach((star) => {
      if (star.classList.contains("rotating")) { // Only apply to rotating stars
        const shiftX = ((mouseX - window.innerWidth / 2) / window.innerWidth) * shiftAmount;
        const shiftY = ((mouseY - window.innerHeight / 2) / window.innerHeight) * shiftAmount;
        star.setAttribute("data-shift-x", shiftX); // Store horizontal shift
        star.setAttribute("data-shift-y", shiftY); // Store vertical shift
      }
    });
  });
});

// Function to make stars revolve around the moon
function spinStar(star, initialAngle, distanceA, distanceB) {
  let angle = initialAngle;

  // Mark star as rotating
  star.classList.add("rotating");

  function rotate() {
    angle += 0.5; // Adjust speed
    const centerX = window.innerWidth / 2; // Center of the screen X
    const centerY = window.innerHeight / 2; // Center of the screen Y

    // Add cursor shift effect
    const shiftX = parseFloat(star.getAttribute("data-shift-x")) || 0;
    const shiftY = parseFloat(star.getAttribute("data-shift-y")) || 0;

    const x = centerX + shiftX + distanceA * Math.cos((angle * Math.PI) / 180);
    const y = centerY + shiftY + distanceB * Math.sin((angle * Math.PI) / 180);
    star.style.transform = `translate(${x - centerX}px, ${y - centerY}px)`;
    requestAnimationFrame(rotate);
  }

  rotate();
}
