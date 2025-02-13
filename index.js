// Initialize interval ID
let counterInterval;

function updateCounter() {
  const startDate = new Date("2023-11-22T13:19:26");
  const now = new Date();

  let years = now.getFullYear() - startDate.getFullYear();
  let months = now.getMonth() - startDate.getMonth();
  let days = now.getDate() - startDate.getDate();
  let hours = now.getHours() - startDate.getHours();
  let minutes = now.getMinutes() - startDate.getMinutes();
  let seconds = now.getSeconds() - startDate.getSeconds();

  if (seconds < 0) {
    seconds += 60;
    minutes--;
  }
  if (minutes < 0) {
    minutes += 60;
    hours--;
  }
  if (hours < 0) {
    hours += 24;
    days--;
  }
  if (days < 0) {
    const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
    days += prevMonth.getDate();
    months--;
  }
  if (months < 0) {
    months += 12;
    years--;
  }

  const timeUnits = [
    { value: years, label: "Y" },
    { value: months, label: "M" },
    { value: days, label: "D" },
    { value: hours, label: "H" },
    { value: minutes, label: "M" },
    { value: seconds, label: "S" },
  ];

  const counterDiv = document.getElementById("counter");
  if (counterDiv) {
    counterDiv.innerHTML = timeUnits
      .map(
        (unit) => `
      <div class="time-box">
        <div class="number">${unit.value}</div>
        <div class="label">${unit.label}</div>
      </div>
    `
      )
      .join("");
  }
}

// Start updating the counter
updateCounter();
counterInterval = setInterval(updateCounter, 1000);

document.getElementById("continueBtn").addEventListener("click", () => {
  const content = document.getElementById("content");

  // Stop the counter update
  clearInterval(counterInterval);

  // Apply fade-out animation
  content.classList.add("fade-out");

  // After fade-out completes, replace content with the letter
  content.addEventListener(
    "animationend",
    () => {
      const mainContent = document.getElementById("main-content");
      mainContent.innerHTML = `
      <section class="cssletter">
  <div class="envelope">
    <button class="heart" id="openEnvelope" aria-label="Open Envelope">
      <span class="heart-text">Open</span>
    </button>
    <div class="envelope-flap"></div>
    <div class="envelope-folds">
      <div class="envelope-left"></div>
      <div class="envelope-right"></div>
      <div class="envelope-bottom"></div>
    </div>
  </div>
  <div class="letters">
<blockquote class="letter center" id="1" tabindex="0" style="left: 390px;">
  <button class="closeLetter" title="Close Kadi's letter">Close Kadi's letter</button>
  <p>From when you first walked into class on that day, you were the prettiest thing i had ever layed eyes on</p>
  <cite>Kadi</cite>
</blockquote>

<blockquote class="letter center" id="2" tabindex="0" style="left: 390px;">
  <button class="closeLetter" title="Close Mamdo7's letter">Close Mamdo7's letter</button>
  <p>Stop huggin me so much >:(</p>
  <cite>Mamdo7</cite>
</blockquote>

<blockquote class="letter center" id="3" tabindex="0" style="left: 390px;">
  <button class="closeLetter" title="Close Gojo's letter">Close Gojo Satoru's letter</button>
  <p>Hey, you. Yeah, you. Would you just date this guy already? he won’t stop being a bitch to me about it.</p>
  <cite>Gojo Satoru</cite>
</blockquote>

<blockquote class="letter center" id="4" tabindex="0" style="left: 390px;">
  <button class="closeLetter" title="Close Kadi's letter">Close Kadi's letter</button>
  <p>My life has become a joyful celebration of every delightful and silly moments with you that make me grin from ear to ear.</p>
  <cite>Kadi</cite>
</blockquote>

<blockquote class="letter center" id="7" tabindex="0" style="left: 390px;">
  <button class="closeLetter" title="Close Kadi's letter">Close Kadi's letter</button>
  <p>Talking to you has become the only part of my day that i long and wait for, i am always at my happiest when i know you're listening to me and talking to me.</p>
  <cite>Kadi</cite>
</blockquote>

<blockquote class="letter center" id="8" tabindex="0" style="left: 390px;">
  <button class="closeLetter" title="Close Kadi's letter">Close Kadi's letter</button>
  <p>I am forever grateful to you as you've always stayed with me no matter what bullshit i pulled or things i did, you have had such patience with me and i really appreciate it</p>
  <cite>Kadi</cite>
</blockquote>

<blockquote class="letter center" id="9" tabindex="0" style="left: 390px;">
  <button class="closeLetter" title="Close Kadi's letter">Close Kadi's letter</button>
  <p>The feeling i get in my heart from talking to you feels so surreal and out of this world, my heart sings and wavers with ever word you say and expression you make</p>
  <cite>Kadi</cite>
</blockquote>

<blockquote class="letter center" id="10" tabindex="0" style="left: 390px;">
  <button class="closeLetter" title="Close Kadi's letter">Close Kadi's letter</button>
  <p>With you, even the most ordinary moment transforms into an extraordinary memory for me, your laughter is the music that fills me with endless delight.</p>
  <cite>Kadi</cite>
</blockquote>

<blockquote class="letter center" id="11" tabindex="0" style="left: 390px;">
  <button class="closeLetter" title="Close Kadi's letter">Close Kadi's letter</button>
  <p>You are the spark that brightens my darkest days and the gentle whisper that soothes my restless nights.</p>
  <cite>Kadi</cite>
</blockquote>

<blockquote class="letter center" id="12" tabindex="0" style="left: 390px;">
  <button class="closeLetter" title="Close Kadi's letter">Close Kadi's letter</button>
  <p>In a world that often feels chaotic, you're the only thing that ever feels right, you always listen to me and talk to me and bear me</p>
  <cite>Kadi</cite>
</blockquote>

<blockquote class="letter center" id="13" tabindex="0" style="left: 390px;">
  <button class="closeLetter" title="Close Kadi's letter">Close Kadi's letter</button>
  <p>I always long for every retarded joke you make, every awkward or small gesture that you do every time you smile in my face everytime you greet me or say farewell</p>
  <cite>Kadi</cite>
</blockquote>

<blockquote class="letter center" id="14" tabindex="0" style="left: 390px;">
  <button class="closeLetter" title="Close Kadi's letter">Close Kadi's letter</button>
  <p>Every time i look at you in in the face, in your eyes i am always just lost in deep aw where the only thing i wanna say to you after what i was talking about is just how gorgeous and beautiful you are even tho they don't come anywhere close to how it actually feels</p>
  <cite>Kadi</cite>
</blockquote>

<blockquote class="letter center" id="20" tabindex="0" style="left: 390px;">
  <button class="closeLetter" title="Close Kadi's letter">Close Kadi's letter</button>
  <p>I’m madly in love with every quirky bit of you, if there was a competition for how mad a man can mad i'd be the maddest.</p>
  <cite>Kadi</cite>
</blockquote>

<blockquote class="letter center" id="22" tabindex="0" style="left: 390px;">
  <button class="closeLetter" title="Close Kadi's letter">Close Kadi's letter</button>
  <p>With every beat of my heart, I fall deeper in love with you—treasuring every silly smile and tender moment. You are my forever, and I will cherish you always.</p>
  <cite>Kadi</cite>
</blockquote>
  </div>
</section>
      `;
      content.classList.remove("fade-out");

      loadLetterJs();
    },
    { once: true }
  );
});

const loadLetterJs = () => {
  const letters = document.querySelectorAll(".letter");
  const lettersContainer = document.querySelector(".letters");
  let remainingLetters = letters.length;
  let zIndexCounter = 10;

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  };

  const shuffledThings = Array.from(letters);
  shuffleArray(shuffledThings);

  shuffledThings.forEach((letter) => {
    lettersContainer.appendChild(letter);
    const center =
      document.querySelector(".cssletter").offsetWidth / 2 -
      letter.offsetWidth / 2;
    letter.style.left = `${center}px`;

    function isOverflown(element) {
      return (
        element.scrollHeight > element.clientHeight ||
        element.scrollWidth > element.clientWidth
      );
    }

    if (!isOverflown(letter)) {
      letter.classList.add("center");
    }
    let offsetX, offsetY;
    letter.addEventListener("mousedown", (e) => {
      if (e.target.tagName !== "BUTTON") {
        const rect = e.target.getBoundingClientRect();

        // Calculate the offset from the click position to the top-left corner
        offsetX = e.clientX - rect.left;
        offsetY = e.clientY - rect.top;

        letter.style.position = "fixed";
        letter.style.left = `${rect.left}px`;
        letter.style.top = `${rect.top}px`;
        letter.style.zIndex = zIndexCounter++;

        // Move the letter based on the calculated offset
        const moveAt = (posX, posY) => {
          letter.style.left = `${posX - offsetX}px`;
          letter.style.top = `${posY - offsetY}px`;
        };

        const onMouseMove = (moveEvent) => {
          moveAt(moveEvent.clientX, moveEvent.clientY);
        };

        const onMouseUp = () => {
          document.removeEventListener("mousemove", onMouseMove);
          document.removeEventListener("mouseup", onMouseUp);
        };

        document.addEventListener("mousemove", onMouseMove);
        document.addEventListener("mouseup", onMouseUp);
      }
    });
  });
  document.querySelector("#openEnvelope").addEventListener("click", () => {
    document.querySelector(".envelope").classList.add("active");
  });
  const closeButtons = document.querySelectorAll(".closeLetter");
  closeButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      e.preventDefault();
      const letter = e.target.closest(".letter");
      if (letter) {
        letter.style.display = "none";
        remainingLetters--;

        if (remainingLetters === 0) {
          loadEnd();
        }
      }
    });
  });
};

const loadEnd = () => {
  const content = document.getElementById("content");

  // Apply fade-out animation
  content.classList.add("fade-out");

  // After fade-out completes, replace content with the buttons
  content.addEventListener("animationend", () => {
    const mainContent = document.getElementById("main-content");
    mainContent.innerHTML = `
      <div class="end-message">Thank you for taking the time to read all those. I ask, Will You Be My Valentine?</div>
      <img src="src/bug-worried.gif" alt="worried" class="end-gif"/>

      <div class="button-container">
        <button class="yes-btn" id="yesBtn">Yes 💜</button>
        <button class="no-btn" id="noButton">No...😢</button>
      </div>
    `;
    content.classList.remove("fade-out");

    const noButton = document.getElementById("noButton");

    document.getElementById("yesBtn").addEventListener("click", () => {
      loadThanks();
    });

    const OFFSET = 175;

    noButton.addEventListener("click", () => {
      alert("Nice Try Diddy, kill your self");
      window.close();
    });

    document.addEventListener("mousemove", (e) => {
      const buttonRect = noButton.getBoundingClientRect();
      const buttonCenterX = buttonRect.left + buttonRect.width / 2;
      const buttonCenterY = buttonRect.top + buttonRect.height / 2;

      const mouseX = e.clientX;
      const mouseY = e.clientY;

      // Calculate distance from mouse to button center
      const deltaX = mouseX - buttonCenterX;
      const deltaY = mouseY - buttonCenterY;
      const distance = Math.hypot(deltaX, deltaY);

      if (distance < OFFSET) {
        // Move button away from mouse direction
        const angle = Math.atan2(deltaY, deltaX);
        const escapeDistance = 200; // Adjust movement speed
        let newX = buttonRect.left - Math.cos(angle) * escapeDistance;
        let newY = buttonRect.top - Math.sin(angle) * escapeDistance;

        // Boundary checks and teleport logic
        const maxX = window.innerWidth - buttonRect.width;
        const maxY = window.innerHeight - buttonRect.height;

        if (newX < 0) {
          newX = maxX; // Teleport to the right side
        } else if (newX > maxX) {
          newX = 0; // Teleport to the left side
        }

        if (newY < 0) {
          newY = maxY; // Teleport to the bottom
        } else if (newY > maxY) {
          newY = 0; // Teleport to the top
        }

        noButton.style.left = `${newX}px`;
        noButton.style.top = `${newY}px`;
      }
    });
  });
};

const loadThanks = () => {
  const content = document.getElementById("content");

  // Apply fade-out animation
  content.classList.add("fade-out");

  // After fade-out completes, replace content with the buttons
  content.addEventListener("animationend", () => {
    const mainContent = document.getElementById("main-content");
    mainContent.innerHTML = `
      <div class="end-message">THANKSSSS <333333333333333333333</div>
      <img src="src/bug-cat-creepy.gif" alt="worried" class="end-gif"/>
      <img src="src/bug-cat-heart.gif" alt="worried" class="end-gif"/>
      <img src="src/bug-cat-drool.gif" alt="worried" class="end-gif"/>
    `;
    content.classList.remove("fade-out");
  });
};
// Array of audio files
const playlist = ["src/song1.mp3"];

let currentTrack = 0;

const audio = document.getElementById("background-audio");
const volumeBtn = document.getElementById("volumeButton");

// Function to load and play the current track
function loadTrack(index) {
  if (index >= playlist.length) {
    currentTrack = 0;
  }
  audio.src = playlist[currentTrack];
  audio.play().catch(() => {
    console.log("Autoplay was prevented. User interaction might be required.");
  });
}

// Play the first track on page load
loadTrack(currentTrack);

// Event listener for when the track ends
audio.addEventListener("ended", () => {
  currentTrack++;
  loadTrack(currentTrack);
});

// Volume button toggle
volumeBtn.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
    audio.muted = false;
    volumeBtn.textContent = "🔊"; // Unmuted icon
  } else {
    audio.pause();
    audio.muted = true;
    volumeBtn.textContent = "🔇"; // Muted icon
  }
});
