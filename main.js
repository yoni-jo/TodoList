const submit = document.querySelector('button')
const ul = document.querySelector('.listFile')
const text = document.querySelector('input')
const del=document.querySelectorAll('.del')

function enter(){
    if(window.event.keyCode ==13){
        write()
    }
}


function write(){

    const li = document.createElement('li')//li태그생성
    const checkbox = document.createElement('input')//input태그생성
    const delButton = document.createElement('button')//삭제버튼생성
    const test = li.appendChild(checkbox).classList.add('checkbox')//생성된 li태그에 checkbox클래스추가
    const test2 = li.appendChild(delButton).classList.add('del')//생성된 button태그에 del클래스추가
    
    //입력값이 없을경우
    if (text.value === "") {
        alert('값입력안했음')
        text.focus() //입력창으로 커서가 맞춰짐

    //입력값이 있을경우
    } else {

        ul.appendChild(li).innerText = text.value //ul안에 li가 생성되면서 태그안에 입력된값을 받아온다.
        li.appendChild(checkbox).setAttribute("type", "checkbox")//생성된 li안에 체크박스 속성을 가진 input태그 생성
        li.appendChild(delButton).innerText="del"//생성된 삭제 버튼에 del 이름을생성
        li.classList.add('list')//생성된 li태그에 list 클래스를 만들어준다.
        text.value = null; //등록버튼을 누르고 입력칸이 리셋되게한다.




    }

}
//입력버튼눌렀을시 실행되는 이벤트
submit.addEventListener('click',write)

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

