// DOM Elements
const themeToggle = document.getElementById("themeToggle")
const loveForm = document.getElementById("loveForm")
const chatbot = document.getElementById("chatbot")
const chatMessages = document.getElementById("chatMessages")
const userMessage = document.getElementById("userMessage")
const sendMessage = document.getElementById("sendMessage")
const cosmicMatch = document.getElementById("cosmicMatch")
const starryBackground = document.getElementById("starryBackground")
const compatibilityScore = document.getElementById("compatibilityScore")
const loveStory = document.getElementById("loveStory")
const storyContent = document.getElementById("storyContent")
const socialSharing = document.getElementById("socialSharing")
const shareCard = document.getElementById("shareCard")
const twitterShare = document.getElementById("twitterShare")

// Theme Toggle
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme")
})

// Love Form Submission
loveForm.addEventListener("submit", (e) => {
  e.preventDefault()
  const formData = new FormData(loveForm)
  const data = Object.fromEntries(formData)

  // Hide form and show other sections
  loveForm.parentElement.classList.add("hidden")
  chatbot.classList.remove("hidden")
  cosmicMatch.classList.remove("hidden")
  loveStory.classList.remove("hidden")
  socialSharing.classList.remove("hidden")

  // Start chatbot conversation
  startChatbotConversation(data)

  // Generate cosmic match
  generateCosmicMatch(data)

  // Generate love story
  generateLoveStory(data)

  // Create share card
  createShareCard(data)
})

// Chatbot functionality
function startChatbotConversation(data) {
  const messages = [
    `Hello ${data.name1}! I'm your Love Guru. Let's explore your love fate with ${data.name2}.`,
    `I see that you're ${data.relationshipType}. How exciting!`,
    `Your personality is ${data.personality1}, and ${data.name2}'s is ${data.personality2}. Interesting combination!`,
    `Let me consult the stars and see what they reveal about your love fate...`,
  ]

  let i = 0
  const interval = setInterval(() => {
    if (i < messages.length) {
      addChatMessage("Love Guru", messages[i])
      i++
    } else {
      clearInterval(interval)
    }
  }, 2000)
}

function addChatMessage(sender, message) {
  const messageElement = document.createElement("p")
  messageElement.innerHTML = `<strong>${sender}:</strong> ${message}`
  chatMessages.appendChild(messageElement)
  chatMessages.scrollTop = chatMessages.scrollHeight
}

sendMessage.addEventListener("click", () => {
  const message = userMessage.value.trim()
  if (message) {
    addChatMessage("You", message)
    userMessage.value = ""
    // Here you can add more complex chatbot logic to respond to user messages
    setTimeout(() => {
      addChatMessage("Love Guru", "That's interesting! Let me think about that...")
    }, 1000)
  }
})

// Cosmic Match Visualization
function generateCosmicMatch(data) {
  const ctx = starryBackground.getContext("2d")
  const width = starryBackground.width
  const height = starryBackground.height

  // Clear the canvas
  ctx.clearRect(0, 0, width, height)

  // Generate random stars
  for (let i = 0; i < 100; i++) {
    ctx.fillStyle = "white"
    ctx.beginPath()
    ctx.arc(Math.random() * width, Math.random() * height, Math.random() * 2, 0, Math.PI * 2)
    ctx.fill()
  }

  // Calculate compatibility (this is a simplified example)
  const compatibility = Math.floor(Math.random() * 51) + 50 // 50-100%

  // Draw heart constellation
  ctx.strokeStyle = compatibility > 75 ? "#ff9ff3" : "#ff3366"
  ctx.lineWidth = 2

  // Animate the heart drawing
  let t = 0
  function animateHeart() {
    t += 0.02
    if (t > 1) return

    ctx.beginPath()
    ctx.moveTo(width / 2, height / 3)
    ctx.bezierCurveTo(
      width / 2 - 50 * t,
      (height / 6) * t,
      width / 2 - 100 * t,
      (height / 2) * t,
      width / 2,
      ((height * 2) / 3) * t,
    )
    ctx.bezierCurveTo(
      width / 2 + 100 * t,
      (height / 2) * t,
      width / 2 + 50 * t,
      (height / 6) * t,
      width / 2,
      height / 3,
    )
    ctx.stroke()

    requestAnimationFrame(animateHeart)
  }
  animateHeart()

  compatibilityScore.textContent = `Your love is ${compatibility}% written in the stars!`
}

// Love Story Generator
function generateLoveStory(data) {
  const storyTemplates = [
    `Once upon a time, in a world full of endless possibilities, ${data.name1} and ${data.name2} crossed paths. ${data.name1}, known for being ${data.personality1}, was immediately drawn to ${data.name2}'s ${data.personality2} nature. As ${data.relationshipType}, their journey was filled with laughter, challenges, and unforgettable moments.`,
    `In a bustling city where dreams come to life, ${data.name1} and ${data.name2} found each other. ${data.name1}'s ${data.personality1} spirit perfectly complemented ${data.name2}'s ${data.personality2} demeanor. Their ${data.relationshipType} status became the talk of the town, inspiring those around them.`,
    `Under a canopy of stars, ${data.name1} and ${data.name2}'s paths intertwined. ${data.name1}'s ${data.personality1} approach to life was the perfect match for ${data.name2}'s ${data.personality2} outlook. As ${data.relationshipType}, they embarked on a journey filled with love, growth, and endless possibilities.`,
  ]

  const randomStory = storyTemplates[Math.floor(Math.random() * storyTemplates.length)]
  storyContent.textContent = randomStory
}

// Share Card Creation
function createShareCard(data) {
  const compatibility = Math.floor(Math.random() * 51) + 50 // 50-100%
  shareCard.innerHTML = `
        <h3>${data.name1} & ${data.name2}</h3>
        <p>Compatibility: ${compatibility}%</p>
        <p>"Love is written in the stars for these two ${data.relationshipType} souls!"</p>
    `
}

// Replace the existing createZodiacAnimation function with this
function createZodiacAnimation(score) {
    const container = document.getElementById('zodiacAnimation');
    const hue = ((score + 10) / 130) * 360;
    
    container.innerHTML = `
        <div class="compatibility-heart" style="background: hsl(${hue}, 70%, 50%)">
            <div class="heart-content">
                <h2 style="margin: 0; font-size: 2.5rem">${score}%</h2>
                <p style="margin: 0; color: var(--text-light)">Cosmic Harmony</p>
            </div>
        </div>
    `;
}

// Keep all other existing JavaScript code below
// (form submission handler, gender detection, etc.)

// Twitter Sharing
twitterShare.addEventListener("click", () => {
  const formData = new FormData(loveForm)
  const data = Object.fromEntries(formData)
  const compatibility = Math.floor(Math.random() * 51) + 50 // 50-100%
  const text = encodeURIComponent(
    `Check out my Love Fate with ${data.name2}! We're ${compatibility}% compatible! #LoveFateSimulator`,
  )
  const url = `https://twitter.com/intent/tweet?text=${text}`
  window.open(url, "_blank")
})

// Initialize starry background on page load
window.addEventListener("load", () => {
  starryBackground.width = starryBackground.offsetWidth
  starryBackground.height = starryBackground.offsetHeight
})

