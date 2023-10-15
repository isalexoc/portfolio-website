// Add custom JavaScript here
function runTypingEffect() {
  const text = "I am Aneuska Morillo";
  const typingElemnet = document.getElementById("typing-text");
  const typingDelay = 100;

  typeText(text, typingElemnet, typingDelay);
}

function typeText(text, typingElemnet, delay) {
  for (let i = 0; i < text.length; i++) {
    setTimeout(() => {
      typingElemnet.textContent += text.charAt(i);
    }, delay * i);
  }
}

document.addEventListener("DOMContentLoaded", runTypingEffect);
