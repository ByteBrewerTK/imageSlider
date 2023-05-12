const container = document.querySelector('.container'),
    carousel = document.querySelector('.carousel'),
    images = carousel.querySelectorAll('img'),
    button = document.querySelectorAll('.btn');

// carousel.forEach((data,index) =>{
   
// })

let imgIndex = 1,
    interValid;

const autoSlide = ()=>{
    interValid = setInterval(()=>slideImg(++imgIndex),2000);
}
const slideImg = ()=>{
    imgIndex = imgIndex === images.length? 0: imgIndex<0 ? images.length -1 : imgIndex;
    carousel.style.transform = `translateX(-${imgIndex*100}%)`
}
autoSlide();
container.addEventListener("mouseover",()=> clearInterval(interValid));

container.addEventListener("mouseleave", autoSlide);

const updateClick = (e)=>{

    imgIndex += e.target.id === "next" ? 1 : -1;
    slideImg(imgIndex);

}
button.forEach((button)=> button.addEventListener('click', updateClick));

