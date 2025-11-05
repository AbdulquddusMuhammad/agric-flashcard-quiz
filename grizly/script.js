// Add click handlers for subject cards
document.querySelectorAll(".subject-card").forEach((card) => {
  card.addEventListener("click", function () {
    const subject = this.getAttribute("data-subject");

    // For Crop Diseases, link to the flashcard page
    if (subject === "crop-diseases") {
      window.location.href = "agriculture-flashcards.html";
    } else {
      alert(`Loading ${this.querySelector(".subject-name").textContent}...\n\nFlashcards for this subject coming soon!`);
    }
  });

  // Add keyboard support
  card.addEventListener("keypress", function (e) {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      this.click();
    }
  });
});
