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

$('.skillset .button-group button').on('click', function(e){

     e.preventDefault();

     let FilterSelector = $(e.target).attr('data-filter');

     $('.skillset .grid').isotope({
         filter : FilterSelector
     });

     return false

});


// Glider Js Labraries for Recommendation Area



