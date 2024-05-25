const observed = document.querySelectorAll(".observed")

const observer = new IntersectionObserver(enteries => {
    enteries.forEach(entry => {
        entry.target.classList.toggle("show", entry.isIntersecting)
        if (entry.isIntersecting) observer.unobserve(entry.target)
    })
},
{
    threshold:.28,
})

observed.forEach(item => {
observer.observe(item)
})

const observedToggle = document.querySelectorAll(".observed-toggle")

const observerToggle = new IntersectionObserver(enteries => {
    enteries.forEach(entry => {
        entry.target.classList.toggle("show", entry.isIntersecting)
    })
},
{
    threshold:.5,
})

observedToggle.forEach(item => {
observerToggle.observe(item)
})