let check = document.querySelector('#check')
let item = document.querySelector('#pass')
check.addEventListener('click',function(){
    if(check.checked == false){
        item.type = "password"
    }else{
        item.type = "text"
    }
})