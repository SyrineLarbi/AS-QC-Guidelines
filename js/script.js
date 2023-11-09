var loader = document.querySelector("#preloader")
var title = document.querySelectorAll(".title")
var section = document.querySelectorAll('.category_container')
var cardBtnContainer= document.querySelectorAll('.card-item')

window.addEventListener("load", vanish);
function vanish() {
    loader.classList.add("disppear");
  }



//---------Navbar scroll-------//
const navbar=document.querySelector(".navBar-container");
const container=document.querySelector(".home_container");

console.log(navbar.offsetHeight);
console.log(container.offsetTop);

window.addEventListener("scroll",()=>{
    if(
        (window.scrollY > container.offsetTop - navbar.offsetHeight)
    ){
        navbar.classList.add("active");
    } else {
        navbar.classList.remove("active");
    }
})

//show/hide video
 const btnsVideo= document.querySelectorAll(".videoBtn")
 const videoContainer = document.querySelectorAll('.videoContainer')
 const closes = document.querySelectorAll(".close")
 const video=document.querySelectorAll("video")
 
 btnsVideo.forEach((btnVideo,index)=>{
    btnVideo.addEventListener('click', ()=>{
        btnVideo.classList.add('active');
        videoContainer[index].classList.add("active")
        video[index].play()
    })
 })
 
 closes.forEach((close,i)=>{
    close.addEventListener('click', ()=>{
        btnsVideo[i].classList.remove('active');
        videoContainer[i].classList.remove("active")
        video[i].pause()
        video[i].currentTime = 0
    })
 })


//tab display// 
const tabsBtns = document.querySelectorAll('.tab_btn');
const tabsContents = document.querySelectorAll('.content');
const firstContent= document.querySelector('.content.show')

   
tabsBtns.forEach((tabBtn,index)=>{
    tabBtn.addEventListener('click',(e)=>{
        tabsBtns.forEach(tabBtn=>{
            tabBtn.classList.remove('active')

        });
        tabBtn.classList.add('active');
        tabsContents.forEach(content=>{content.classList.remove('active')
        content.classList.add("hide")
    });
        tabsContents[index].classList.add('active');
        tabsContents[index].classList.remove('hide');
        
    })
    
})

cardBtnContainer.forEach((cardbtn,i)=>{
    cardbtn.addEventListener('click',(e)=>{
        tabsContents.forEach(content=>{
        content.classList.remove("hide")
    });
    })
   
})


//toggle reset btn
const btnNoAudio = document.querySelector('#noaudio')
const btnRandomlyRestart=  document.querySelector('#randomlyRestart')
const btnLines = document.querySelector('#flickScreen')
const btnperformance = document.querySelector('#performanceTest')
var btnupdate = document.querySelector('#updatebtn')
var btnreset= document.querySelector("#resetbutton")

    btnNoAudio.addEventListener("click",(e)=>{
        btnreset.dataset.bsTarget = '#noaudio'
    })
    btnRandomlyRestart.addEventListener("click",(e)=>{
        btnreset.dataset.bsTarget = '#randomlyRestart'
    })
    btnLines.addEventListener("click",(e)=>{
        btnreset.dataset.bsTarget = '#flickScreen'
    })

    //toggle update btn

    btnLines.addEventListener('click',(e)=>{
        btnupdate.dataset.bsTarget='#flickScreen'
    })
    btnRandomlyRestart.addEventListener('click',(e)=>{
        btnupdate.dataset.bsTarget='#randomlyRestart'
    })
    
//scroll animation
ScrollReveal({ 
    reset: true,
    distance: '50px',
    duration : 2500,
    delay: 400
 });
 ScrollReveal().reveal(title, { delay: 500, origin:'left' });
 ScrollReveal().reveal(section, { delay: 600, origin:'bottom' });
 ScrollReveal().reveal(cardBtnContainer,{ delay: 600, origin:'bottom'});















