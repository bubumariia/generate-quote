const quote = document.querySelector(".quote")
const author = document.querySelector(".author")
const nextBtn = document.querySelector(".next-btn")

async function fetchApi(){
    const req = await fetch(` https://api.quotable.io/random`)
    const res = await req.json()
    quote.innerText = res.content
    author.innerText = res.author
}


nextBtn.addEventListener('click', function(){
    fetchApi()
})