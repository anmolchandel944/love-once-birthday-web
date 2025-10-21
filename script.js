const nameInputCard = document.getElementById("nameInputCard");
const birthdayPage = document.getElementById("birthdayPage");
const surpriseCard = document.getElementById("surpriseCard");
const finalCard = document.getElementById("finalCard");
const heartsContainer = document.getElementById("heartsContainer");

const submitName = document.getElementById("submitName");
const nameInput = document.getElementById("nameInput");

const typingText = document.getElementById("typingText");
const messageBox = document.getElementById("messageBox");
const nextMessage = document.getElementById("nextMessage");
const celebrateText = document.getElementById("celebrateText");
const finalText = document.getElementById("finalText");

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const okBtn = document.getElementById("okBtn");

let userName = "";

// Typing effect function
function typeText(element, text, speed = 50) {
  return new Promise((resolve) => {
    let i = 0;
    element.textContent = "";
    const typing = setInterval(() => {
      element.textContent += text.charAt(i);
      i++;
      if (i === text.length) {
        clearInterval(typing);
        resolve();
      }
    }, speed);
  });
}

// Floating hearts creation
function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.textContent = "💖";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = 3 + Math.random() * 4 + "s";
  heart.style.fontSize = 16 + Math.random() * 20 + "px";
  heartsContainer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 7000);
}
setInterval(createHeart, 400);

// When user enters name
submitName.addEventListener("click", () => {
  userName = nameInput.value.trim();
  if (userName === "") {
    alert("Please enter a name!");
    return;
  }

  nameInputCard.classList.add("hidden");
  birthdayPage.classList.remove("hidden");

  startTypingSequence();
});

async function startTypingSequence() {
  await typeText(typingText, `🎂 HAPPY BIRTHDAY, ${userName}! 🎉`);
  await new Promise(r => setTimeout(r, 1000));
  await typeText(messageBox, "❤️ Happy birthday, gorgeous! Today is all about celebrating you!");
  await new Promise(r => setTimeout(r, 1500));
  await typeText(nextMessage, "✨ Tap here for your birthday surprise ✨");

  nextMessage.addEventListener("click", showSurprise);
}

function showSurprise() {
  birthdayPage.classList.add("hidden");
  surpriseCard.classList.remove("hidden");
  celebrateText.textContent = `${userName}, how about we celebrate your birthday in style? 🎈`;
}

// Button Events
yesBtn.addEventListener("click", () => {
  surpriseCard.classList.add("hidden");
  finalCard.classList.remove("hidden");
  finalText.textContent = `🎉 Happy Birthday ${userName}! 🎉`;
});

noBtn.addEventListener("click", () => {
  surpriseCard.classList.add("hidden");
  nameInputCard.classList.remove("hidden");
  nameInput.value = "";
});

okBtn.addEventListener("click", () => {
  alert("Let's make this birthday unforgettable! 💕");
});
