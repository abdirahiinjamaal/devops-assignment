const navToggle = document.getElementById('nav-toggle')
const siteNav = document.getElementById('site-nav')
const yearEl = document.getElementById('year')

if (yearEl) {
  yearEl.textContent = new Date().getFullYear()
}

if (navToggle && siteNav) {
  navToggle.addEventListener('click', () => {
    const open = siteNav.classList.toggle('is-open')
    navToggle.setAttribute('aria-expanded', open)
  })

  siteNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      siteNav.classList.remove('is-open')
      navToggle.setAttribute('aria-expanded', 'false')
    })
  })
}
