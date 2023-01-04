const formEL=document.querySelector("form")
const btnEl=document.querySelector("button")
const ul=document.querySelector("ul")
const small=document.querySelector("small")
const h6=document.querySelector("h6")
const getElment = JSON.parse(localStorage.getItem("newArray")) 
const allnames=JSON.parse(localStorage.getItem("newArray"))  ? JSON.parse(localStorage.getItem("newArray")) :[]

if(getElment){
    createElement(getElment)
}


btnEl.addEventListener("click", (e) => {
    e.preventDefault()
    const def=formEL.definition.value.trim()
    if(def.length == 0) {
        small.textContent="Iltimos bo'shliqni to'ldiring!!!"
    }
    else {
        small.textContent=" "
        newnames(def)
        allnames.unshift(def)
        localStorage.setItem("newArray" , JSON.stringify(allnames))
        
    }


    function newnames(name){
        const li=document.createElement("li")
        const liText=document.createTextNode(`${def}`)
        li.appendChild(liText)
        ul.appendChild(li)
        li.style.cursor="pointer"
        li.style.height="auto"
        li.innerHTML+=`
        <button class="delete">X</button>
        `;
        let deleteBtn=document.querySelectorAll(".delete")
        for(let i=0; i<deleteBtn.length ;i++){
            deleteBtn[i].onclick=function(){
                this.parentNode.remove();
                
            }
        }
        let item=document.querySelectorAll("li")
        
        for(let i=0; i<item.length ;i++){
            item[i].onclick=function(){
                this.classList.toggle('completed')
            
            }
        }
        const date=new Date()
            const year=date.getFullYear()
            const month=date.getMonth()
            const day=date.getDay()
            const dat=date.getDate()
            const hours=date.getHours()      
            const minuts=date.getMinutes()
            const second=date.getSeconds()
            const week=["Yakshanba","Dushanba","Seshanba","Chorshanba","Payshanba","Juma","Shanba"]
           const h6=document.createElement("h6")
           const h6Text=document.createTextNode(`${year}-${ (month+1)<10 ? '0'+(month+10):(month+1)}-${dat<10 ? '0' + dat : dat}`)
           const weekname=document.createElement("h6")
           const weektext=document.createTextNode(`${week[day]}`)
           const hoursname=document.createElement("h6")
           const hoursvalue=document.createTextNode(`${hours < 10 ? '0' + hours : hours}:${minuts < 10 ? '0' + minuts : minuts}:${second < 10 ?'0' + second : second} `)
           const div=document.createElement("div")
           li.appendChild(div)
           div.appendChild(h6)
           div.appendChild(weekname)
           div.appendChild(hoursname)
           h6.appendChild(h6Text)
           weekname.appendChild(weektext)
           hoursname.appendChild(hoursvalue)
           div.style =`
        display: flex;
        flex-direction: column;
        color: red;
        margin-left: 10px;
        gap: 10px;
        `
    }
    
    
    formEL.reset()
})

 function createElement(names){
    names.forEach((name) =>{
        const li=document.createElement("li")
        const liText=document.createTextNode(`${name}`)
        li.appendChild(liText)
        ul.appendChild(li)
        li.style.cursor="pointer"
        li.style.height="auto"
        li.innerHTML+=`
        <button class="delete">X</button>
        `;
        let deleteBtn=document.querySelectorAll(".delete")
        for(let i=0; i<deleteBtn.length ;i++){
            deleteBtn[i].onclick=function(){
                this.parentNode.remove();
            }
        }
        let item=document.querySelectorAll("li")
        
        for(let i=0; i<item.length ;i++){
            item[i].onclick=function(){
                this.classList.toggle('completed')
            
            }
        }
        const date=new Date()
            const year=date.getFullYear()
            const month=date.getMonth()
            const day=date.getDay()
            const dat=date.getDate()
            const hours=date.getHours()      
            const minuts=date.getMinutes()
            const second=date.getSeconds()
            const week=["Yakshanba","Dushanba","Seshanba","Chorshanba","Payshanba","Juma","Shanba"]
           const h6=document.createElement("h6")
           const h6Text=document.createTextNode(`${year}-${ (month+1)<10 ? '0'+(month+10):(month+1)}-${dat<10 ? '0' + dat : dat}`)
           const weekname=document.createElement("h6")
           const weektext=document.createTextNode(`${week[day]}`)
           const hoursname=document.createElement("h6")
           const hoursvalue=document.createTextNode(`${hours < 10 ? '0' + hours : hours}:${minuts < 10 ? '0' + minuts : minuts}:${second < 10 ?'0' + second : second} `)
           const div=document.createElement("div")
           li.appendChild(div)
           div.appendChild(h6)
           div.appendChild(weekname)
           div.appendChild(hoursname)
           h6.appendChild(h6Text)
           weekname.appendChild(weektext)
           hoursname.appendChild(hoursvalue)
           div.style =`
        display: flex;
        flex-direction: column;
        color: red;
        margin-left: 10px;
        gap: 10px;
        `
        formEL.reset()

    })

 }





