const container = document.querySelector('.image-container');

container.addEventListener('mouseenter', () => {
  for (let i = 0; i < 20; i++) {
    createFlower();
  }
});

container.addEventListener('mouseleave', () => {
  // Remove all flower elements when the mouse leaves the container
  const flowers = document.querySelectorAll('.flower');
  flowers.forEach(flower => flower.remove());
});

function createFlower() {
  const flower = document.createElement('img');

  const randint = Math.random();

  if (randint < 0.2) {
    flower.src = 'images/leaf.png';
  } else if (randint < 0.6) {
    flower.src = 'images/flower.png';
  } else {
    flower.src = 'images/flower2.png';
  }

  flower.classList.add('flower');

  // Randomize initial position
  flower.style.left = Math.random() * window.innerWidth + 'px';
  flower.style.top = Math.random() * -500 + 'px'; // Start above the viewport

  // Randomize size
  const size = Math.random() * 70 + 20; 
  flower.style.width = size + 'px';
  flower.style.height = size + 'px';

  // Add the flower to the container
  document.body.appendChild(flower);

  // Remove the flower after animation ends
  flower.addEventListener('animationend', () => {
    flower.remove();
  });
}
