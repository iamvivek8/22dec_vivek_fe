let h2 = document.querySelector('h2')
        let submit = document.querySelector('#submit')

        submit.addEventListener('click', function(){
            h2.classList.toggle('change')
        })