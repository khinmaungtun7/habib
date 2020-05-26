// Clock and Working mode 

document.addEventListener("DOMContentLoaded", function(){

    var clock= document.querySelector(".timing .time-status");
    

    setInterval(updateTime);
    
    function updateTime(){

        var date= new Date();
        var hours= date.getHours();
        var minutes= date.getMinutes();
        var seconds = date.getSeconds();
        AmPm = 'AM';

        if (hours > 12) {

            hours -= 12;
            AmPm = 'PM';
           
            
        } 

        var flash = ":";
        if (seconds % 2 === 1) {
            
            flash = " ";
        }

        clock.innerHTML = hours +  flash + minutes + " "+ AmPm;

        var ChangeJob = document.querySelector('.working-time .work-status');
       
        
        if (hours >= 6 && hours <= 18) {

            ChangeJob.innerHTML= 'Working '
            
            
        } else {
            
            ChangeJob.innerHTML = 'Breaking Bad'

        }

    }

    

});















// Auto Image Slider only for Project Area
var i = 0;
var img = [];
var time = 3000;
var transition = document.getElementById("slider");

transition.setAttribute("style","transition: all 2.5ms ease-out;");

img[0]= 'SVGs/slider/01.svg';
img[1]= 'SVGs/slider/02.svg';
img[2]= 'SVGs/slider/03.svg';

function changeImage(){

    document.slide.src = img[i];

    if (i < img.length - 1){

       i++;

    }else{
        i = 0;
    }

    setTimeout ("changeImage()" , time );

}

window.onload = changeImage;

// Isotope Sorting Libararies for Skills Area

$('.skillset .SwitchBtn-group button').on('click', function(e){

     e.preventDefault();

     let FilterSelector = $(e.target).attr('data-filter');

     $('.skillset .grid').isotope({
         filter : FilterSelector
     });

     return false

});


// Owl Carousel Js Labraries for Recommendation Area

$('.owl-carousel').owlCarousel({
    loop:true,
    autoplay:true,
    autoplayTimeout:2500,
    nav:false,
    dots:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,

        },
        600:{
            items:3,

        },
        1000:{
            items:5,
            loop:false
        }
    }
   
    //navText:[$('.owl-navigation .owl-nav-left'),$('.owl-navigation .owl-nav-right')]


});

