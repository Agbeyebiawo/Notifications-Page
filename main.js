let demo = document.getElementById('demo')
let btn = document.getElementById('btn')
let box = document.getElementsByClassName('message')
let n = document.getElementsByClassName('notification')

demo.innerHTML =`<h2>Notifications  <span class="count">${document.getElementsByClassName('active').length}</span></h2>` 

btn.addEventListener('click', function(){
    let i
    for(i=0; i<box.length; i++){
        box[i].className = box[i].className.replace('active', '')
        n[i].className = n[i].className.replace('new', '')
    }
    demo.innerHTML = `<h2>Notifications <span class="count">0</span></h2>`
})








