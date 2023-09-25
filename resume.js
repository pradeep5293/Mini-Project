// var scrollInterval=setInterval(function(){
//     window.scrollBy(0,50);
// },50);
// clearInterval(scrollInterval);   //to stop scrolling


// // case to target
// var targetPos=1000;
// var currPos=0; 
// var scrollInterval=setInterval(function(){
//     if(currPos>=targetPos){
//         clearInterval(scrollInterval);
//         return;
//     }
//     currPos+=50;
//     window.scrollBy(0,50);
// },50);

// SCROLL TO TARGET SECTION SMOOTHLY
var tags = document.querySelectorAll('a[href="#]');
tags.forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetSecion = document.getElementById(targetId);
        if (targetSecion) {
            window.scrollTo({
                top: targetSecion.offsetTop,
                behavior: "smooth"
            });
        }
    });
});


