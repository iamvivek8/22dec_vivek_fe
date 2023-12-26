let alt = document.querySelector('#Alert')
let con = document.querySelector('#confirm')
let pro = document.querySelector('#prompt')

alt.addEventListener('click',function(){
    alert('alert box')
})
con.addEventListener('click',function(){
    confirm('confirm box')
})
pro.addEventListener('click',function(){
    prompt('prompt box')
})