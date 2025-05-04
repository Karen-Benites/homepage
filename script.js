console.log('hi')

const toggleThemeButton = document.querySelector(".theme__icons")

function toggleTheme() {
    document.body.classList.toggle("dark-theme")
}

toggleThemeButton.addEventListener("click", toggleTheme)
