const quotes = {
  happy: [
    "Happiness is a journey, not a destination.",
    "Smile, it's free therapy!",
    "Do more of what makes you happy."
  ],
  sad: [
    "Tough times don’t last. Tough people do.",
    "It's okay to not be okay.",
    "Every storm runs out of rain."
  ],
  motivated: [
    "Believe you can and you're halfway there.",
    "Push yourself, because no one else is going to do it for you.",
    "Your only limit is your mind."
  ]
};

function showQuote() {
  const mood = document.getElementById("moodSelect").value;
  const quoteDisplay = document.getElementById("quoteDisplay");

  if (!mood) {
    quoteDisplay.innerText = "Please select a mood.";
    return;
  }

  const moodQuotes = quotes[mood];
  const randomIndex = Math.floor(Math.random() * moodQuotes.length);
  quoteDisplay.innerText = moodQuotes[randomIndex];
}
