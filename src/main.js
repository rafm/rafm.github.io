document.documentElement.classList.toggle(
  "dark",
  localStorage.theme === "dark" || !("theme" in localStorage),
)

document.addEventListener("DOMContentLoaded", () => {
  function toggleTheme(event) {
    const isDark = document.documentElement.classList.toggle("dark")

    if (isDark) {
      delete localStorage.theme
    } else {
      localStorage.theme = "light"
    }

    event.target.setAttribute("aria-checked", isDark)
  }

  const isDark = document.documentElement.classList.contains("dark")

  document.querySelectorAll(".toggle-theme-button").forEach((button) => {
    button.addEventListener("click", toggleTheme)
    button.setAttribute("aria-checked", isDark)
  })
})
