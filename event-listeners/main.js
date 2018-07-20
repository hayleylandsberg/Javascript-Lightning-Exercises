const hi = document.querySelector(".hi")
const bye = document.querySelector(".bye")
const why = document.querySelector(".why")

hi.addEventListener("click", function() {
    console.log(hi.textContent)
})

bye.addEventListener("click", function() {
    console.log(bye.textContent)
})

why.addEventListener("click", function() {
    console.log(why.textContent)
})