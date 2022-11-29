
// Get Slider items | Array.from [ES6 Feature]
var sliderImages = Array.from(document.querySelectorAll(".slider-container img"));


//Get Number of slides
var slideCunt = sliderImages.length

// set current slide
var currentSlide = 1

// slide number string Element
var slideNumberElement = document.getElementById("slide-number");

// previous & next Button 

var  nextButton = document.getElementById("next");
var  prevButton = document.getElementById("prev");

//  handle Click a previous and next Buttons

nextButton.onclick = nextSlide;
prevButton.onclick = prevSlide;


// crate the main ul element

var paginationElement = document.createElement("ul");

// set id in created ui element 
paginationElement.setAttribute("id", "pagination-ul");

//  create list item based on slides count
for(var i = 1; i <= slideCunt; i++){

    // create li
  var paginationItem = document.createElement("li");
//   set custom attribute 
    paginationItem.setAttribute("data-index", i);

    //  set item content 
    paginationItem.appendChild(document.createTextNode(i));

    // append item to the parent 
    paginationElement.appendChild(paginationItem);
}

//  add the cerated ul element to the page
document.getElementById("indicators").appendChild(paginationElement);

//  get the new created the ul

var paginationCreated = document.getElementById("pagination-ul");

// Get  paginationBullets | Array.from [ES6 Feature]
var paginationBullets = Array.from(document.querySelectorAll("#pagination-ul li"));
    for(let i = 0; i< paginationBullets.length; i++){
        paginationBullets[i].onclick = function() {
            currentSlide = parseInt(this.getAttribute("data-index"))
            // console.log(currentSlide)
            theChecker();
        }

        
    }




// trigger the theChecker function 

theChecker();

//  function next slide 
function nextSlide(){
    if(nextButton.classList.contains("disabled")){
        return false
    }else{
        currentSlide++
        theChecker();
    }
    
}
//  function previous  slide 
function prevSlide(){
    if(prevButton.classList.contains("disabled")){
        return false
    }else{
        currentSlide--
        theChecker();
    }
}


//  create the checker function
function theChecker(){
    
    // set  the slide number 
    slideNumberElement.textContent = "slide #" + (currentSlide) +  " of "  + (slideCunt);

    //  remove all the active classes
    removeAllActiveClasses()

    
    // set  active class on the current slide
    sliderImages[currentSlide -1].classList.add("active");
    
    //  set active class on the current pagination item
    
    paginationCreated.children[currentSlide -1].classList.add("active");



    //  check the current slide of the first class active
    if(currentSlide == 1){
        //  add class disabled for  prev Button
        prevButton.classList.add('disabled')

    }else{
        //  remove class disabled for  prev Button
        prevButton.classList.remove('disabled')
    }



     if(currentSlide == slideCunt){
        //  add class disabled for  next Button
        nextButton.classList.add('disabled')

    }else{
        //  remove class disabled for  next Button
        nextButton.classList.remove('disabled')
    }

    
    
}
// removeAllActiveClasses()
// removeAllActiveClasses();



//   remove All the active classes form the image and all the pagination

function removeAllActiveClasses(){
    //  loop through images
    sliderImages.forEach((img) => {
        img.classList.remove("active")

    });

    // loop through pagination Bullets 
    paginationBullets.forEach((bullet) => {
        bullet.classList.remove("active")

    });
};





// /////////////////////

