
// Search functionality
const searchInput = document.getElementById("search");
const cheatSections = document.querySelectorAll(".cheat-section");

searchInput.addEventListener("input", () => {
  const query = searchInput.value.toLowerCase();
  cheatSections.forEach(section => {
    const text = section.innerText.toLowerCase();
    section.style.display = text.includes(query) ? "block" : "none";
  });
});
