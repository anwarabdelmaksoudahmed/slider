let imgs=Array.from(document.querySelectorAll('.item img'));//nodelist to array 
let lightBoxContainer=document.querySelector('.lightBoxContainer');
let lightBoxItem=document.querySelector('.lightBoxItem');
let nextBtn=document.getElementById('nextBtn');
let prevBtn=document.getElementById('prevBtn');
let closeBtn=document.getElementById('closeBtn');
let currentIndex=0;


// console.log(lightBoxItem);
console.log(lightBoxContainer);
// console.log(imgs);
for(let i=0;i<imgs.length;i++){
    imgs[i].addEventListener('click',function(e){
        
        currentIndex=imgs.indexOf(e.target);
        // console.log(currentIndex);
        // console.log(e.target);
        let imgSource=e.target.getAttribute('src');
        lightBoxItem.style.backgroundImage=`url(${imgSource})`;
        lightBoxContainer.style.display='flex';
        // console.log(lightBoxContainer);
       
    })
}
function nextSlid(){

    currentIndex++;
    if(currentIndex==imgs.length)currentIndex=0; 
    let sourceImage= imgs[currentIndex].getAttribute('src');
    lightBoxItem.style.backgroundImage=`url(${sourceImage})`;

}
function prevtSlid(){
    currentIndex--;
    if(currentIndex<0)currentIndex=imgs.length-1; 
    
    let sourceImage= imgs[currentIndex].getAttribute('src');
    lightBoxItem.style.backgroundImage=`url(${sourceImage})`;

}
function closeSlide(){
    lightBoxContainer.style.display='none';

}
lightBoxContainer.addEventListener('click',function(e){ //if click outer the lightboxcontainter ,close div \
    let clickInfo= e.target.getAttribute('id');
    console.log(clickInfo);
    if(clickInfo !='boxContainerItem' && clickInfo !='prevBtn' && clickInfo !='nextBtn' )lightBoxContainer.style.display='none';
    else lightBoxContainer.style.display='flex';
    
})
document.addEventListener('keydown',function(e){
    if(e.code=='ArrowRight')nextSlid();
    else if(e.code=='ArrowLeft')prevtSlid();
    else if(e.code=='Escape')closeSlide();
    
    
})
closeBtn.addEventListener('click',closeSlide);
nextBtn.addEventListener('click',nextSlid);
prevBtn.addEventListener('click',prevtSlid);


