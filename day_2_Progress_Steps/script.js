const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const steps = document.querySelectorAll('.number');
const color = document.querySelector('.color');

let activeStep = 1;

nextBtn.addEventListener('click', () => {
  if (activeStep < steps.length) {
    activeStep++;
    update();
  }
});

prevBtn.addEventListener('click', () => {
  if (activeStep > 1) {
    activeStep--;
    update();
  }
});

function update() {
  // Disable buttons based on active step
  prevBtn.disabled = activeStep === 1;
  nextBtn.disabled = activeStep === steps.length;

  // Toggle active class for step circles and color animation
  steps.forEach((step, index) => {
    step.classList.toggle('active', index < activeStep);

    // Animate color change for each step circle (optional)
    if (index < activeStep) {
      step.classList.add('active')
    }
  });

  // Update progress bar width
  const progress = (activeStep - 1) / (steps.length - 1);
  color.style.width = `${progress * 100}%`;
}