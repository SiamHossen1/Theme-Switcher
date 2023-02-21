const toggleBtn = document.querySelector('.toggle')
const body = document.querySelector('body')

toggleBtn.addEventListener('click',()=>{
    toggleBtn.classList.toggle('active')
    body.classList.toggle('dark_theme')
})