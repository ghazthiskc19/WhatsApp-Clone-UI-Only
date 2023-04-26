const listLi = Array.from(document.querySelectorAll("li.list-li"));
let listUL = document.querySelector(".list-ul");
const nameTittle = [
    "Informasi & Lain2",
    "Keluarga Papah Aep",
    "PKL Desa Penari",
    "REMIND 41",
    "PKL 6",
    "Keluarga Besar Cianjur",
    "Rafli",
    "Bahy F",
    "Fadilah",
    "gema 2",
    "Teteh",
    "Dede",
    "IM3",
    "Clan Tahu Bulat",
    "Diki 2",
    "Iqbal C",
    "Difone Camera",
    "Fawzet",
    "Gojek",
]

// Here The Real Project

/*
Di Project ini saya akan membuat suatu hal yang menari dari wa web, yaitu pesan yang mendapatkan notifikasi akan naik ke bagian yang paling atas dan sisa dari chat yang tidak mendapatkan notofikasi akan turun ke bawah.

Maka disini saya akan membuat teknis seperti hal tersebut.
*/

let ulToTop = listUL.getBoundingClientRect().y;
let click = 0;
listLi.forEach((e, i) =>{
    e.addEventListener("click", function(){
        e.style.order = click--;
        listLi.forEach(e => {
            e.classList.remove("active");
        });
        e.classList.add("active");

        
        // Start The Project
        // let listPos = listLi[i].getBoundingClientRect().y;
        // for(let j = 0; j < i; j++){
        //     listLi[j].style.transform = `translateY(${listLi[j].clientHeight}px)`
        // }
        // e.style.transform = `translateY(-${listPos - ulToTop}px)`;


    })
    e.children[1].children[0].children[0].innerHTML = `${nameTittle[i]}`;
})

let dropdownList = Array.from(document.querySelectorAll(".dropdown-list"));
let dropdownContainer = document.querySelector(".dropdown-container");
let circleHover = Array.from(document.querySelectorAll(".circle-hover"));
let micropushOverlay = document.querySelector(".micropush-overlay");

document.addEventListener("click", event =>{
console.log(event.target.classList.contains("microphone"))

    circleHover.forEach(e => e.classList.remove("circle-active"));
    if(event.target.classList.contains("circle-hover")) event.target.classList.add("circle-active");
    if(event.target.classList.contains("dropdown-list")) {
        // Calculate for position of dropdown
        let formulaAxisX = document.body.clientHeight - (event.target.getBoundingClientRect().bottom + dropdownContainer.clientHeight);
        let formulaAxisY = document.body.clientWidth - (event.target.getBoundingClientRect().left + dropdownContainer.clientWidth);

        if(formulaAxisX > 0){
            dropdownContainer.style.top = `calc(${event.target.getBoundingClientRect().bottom}px)`;
            dropdownContainer.style.left = `calc(${event.target.getBoundingClientRect().left}px)`;
            dropdownContainer.style.transformOrigin = `left top`;
        }
        else{
            dropdownContainer.style.transformOrigin = `left bottom`;
            dropdownContainer.style.top = `calc(${event.target.getBoundingClientRect().bottom}px -  (${dropdownContainer.clientHeight}px + ${event.target.clientHeight}px))`;
            dropdownContainer.style.left = `calc(${event.target.getBoundingClientRect().left}px)`;
        }

        if(formulaAxisY < 0){
            dropdownContainer.style.top = `calc(${event.target.getBoundingClientRect().bottom}px + 5px)`;
            dropdownContainer.style.left = `calc(${event.target.getBoundingClientRect().left}px - (${dropdownContainer.clientWidth}px - ${event.target.clientWidth}px))`;
            dropdownContainer.style.transformOrigin = `right top`;
        }
        dropdownContainer.classList.remove("occurs");
        setTimeout(()=>{
            dropdownContainer.classList.add("occurs");
        }, 300)
    }
    if(!(event.target.classList.contains("dropdown-list"))){
        dropdownContainer.classList.remove("occurs");
    }

    if(event.target.classList.contains("microphone")){
        micropushOverlay.classList.add("micropush-fade-bg");
        micropushOverlay.children[0].classList.add("micropush-scale")
    }
    if(event.target.classList.contains("micropush-close")){
        micropushOverlay.classList.remove("micropush-fade-bg");
        micropushOverlay.children[0].classList.remove("micropush-scale")    
    }
})



// dropdownList.forEach(e=>{
//     e.addEventListener("click", event=>{
//     })
// })