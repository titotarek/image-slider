
// Get Slider items | Array.from [ES6 Feature]
var sliderImages = Array.from(document.querySelectorAll(".slider-container img"))


//Get Number of slides
var slideCunt = sliderImages.length

// set current slide
var currentSlide = 1

// slide number string Element
var slideNumberElement = document.getElementById("slide-number")

// previous & next Button 

var  nextButton = document.getElementById("next")
var  prevButton = document.getElementById("prev")

//  handle Click a previous and next Buttons

nextButton.onclick = nextSlide;
prevButton.onclick = prevSlide;


// crate the main ul element

var paginationElement = document.createElement("ul")

// set id in created ui element 
paginationElement.setAttribute("id", "pagination-ul")

//  create list item based on slides count
for(var i = 1; i <= slideCunt; i++){

    // create li
  var paginationItem = document.createElement("li")
//   set custom attribute 
    paginationItem.setAttribute("data-index", i);

    //  set item content 
    paginationItem.appendChild(document.createTextNode(i))

    // append item to the parent 
    paginationElement.appendChild(paginationItem)
}

//  add the cerated ul element to the page
document.getElementById("indicators").appendChild(paginationElement)


//  function next slide 
function nextSlide(){
    console.log("next")
}
//  function previous  slide 
function prevSlide(){
    console.log("previous")
}


