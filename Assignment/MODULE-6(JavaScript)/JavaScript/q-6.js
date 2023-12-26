let add = document.querySelector("#add")
let submit = document.querySelector("#submit")
let main = document.querySelector(".main")

    submit.addEventListener('click',function(){
        let data = document.createElement('p')
        data.innerHTML = "this is add elemnet"

        main.appendChild(data)
    })