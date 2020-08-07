const submit = document.querySelector('button')
const ul = document.querySelector('.listFile')
const text = document.querySelector('input')
const del=document.querySelectorAll('.del')




submit.addEventListener('click', () => {
    const li = document.createElement('li')
    const checkbox = document.createElement('input')
    const delButton = document.createElement('button')
    const test = li.appendChild(checkbox).classList.add('checkbox')
    const test2 = li.appendChild(delButton).classList.add('del')
    
    if (text.value === "") {
        alert('값입력안했음')
        text.focus()


    } else {

        ul.appendChild(li).innerText = text.value
        li.appendChild(checkbox).setAttribute("type", "checkbox")
        li.appendChild(delButton).innerText="del"
        li.classList.add('list')
        text.value = null;




    }

})

function check(e) {
    const del=document.querySelectorAll('.del')

    del.forEach((dels)=>{
        if(e.target===dels){
            e.target.parentNode.remove()
        }

    })

    if (e.target.checked === true) {
        e.target.parentNode.style.textDecoration="line-through"
    }else{
        e.target.parentNode.style.textDecoration="none"
    }

}
ul.addEventListener('click', check)

