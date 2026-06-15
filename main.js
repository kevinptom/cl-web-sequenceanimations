const aliceTumbling = [
  { transform: 'rotate(0) scale(1)' },
  { transform: 'rotate(360deg) scale(0)' }
];

const aliceTiming = {
  duration: 2000,
  iterations: 1,
  fill: 'forwards'
};

const alice1 = document.querySelector("#alice1");
const alice2 = document.querySelector("#alice2");
const internalAlice3 = document.querySelector("#alice3"); // Renamed to avoid conflicts if already declared

// Async/Await Solution
async function animateAlices() {
  try {
    // Wait for Alice 1 to finish
    await alice1.animate(aliceTumbling, aliceTiming).finished;
    
    // Then wait for Alice 2 to finish
    await alice2.animate(aliceTumbling, aliceTiming).finished;
    
    // Finally, animate Alice 3
    await internalAlice3.animate(aliceTumbling, aliceTiming).finished;
    
  } catch (error) {
    console.error(`Error animating Alices: ${error}`);
  }
}

// Start the sequence
animateAlices();