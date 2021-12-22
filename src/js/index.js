const anchors = document.querySelectorAll('a[href*="#"]')
const worksSlider = document.querySelectorAll('.works__slider')

for (const anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    const blockID = anchor.getAttribute('href').substr(1)
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}

window.addEventListener('scroll', function(e) {
  if (this.scrollY > 2000) {
      load(this.scrollY)
  }
})

function load(scrollY) {
  worksSlider[0].style.transform = `translateX(-${scrollY / 5}px)`
  console.log(scrollY)
}
