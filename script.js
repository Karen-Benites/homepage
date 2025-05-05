const toggleThemeButton = document.querySelector(".theme__icons")
const currentTheme = localStorage.getItem("theme")

function toggleTheme() {
    document.body.classList.toggle("dark-theme")
    const theme = document.body.classList.contains("dark-theme")
      ? "dark"
      : "light"
    localStorage.setItem("theme", theme)
}

function init() {
    if (currentTheme === "dark") {
      document.body.classList.add("dark-theme")
      toggleThemeButton.classList.add("dark__icon")
    }
  }

init()

toggleThemeButton.addEventListener("click", toggleTheme)

