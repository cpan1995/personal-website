const rightArrow = document.querySelector('.rightArrow');
const leftArrow = document.querySelector('.leftArrow');
const pages = document.querySelectorAll('.page');
const dotDiv =  document.querySelector('div.dotDiv');
const imageContainer = document.querySelector('.imageBox');
let pageNodeCounter = 0;
let scrollCurrentArray = {};

//Initialize the first page. Hides all the rest
function pageInit(pages){
    for(i = 0; i < pages.length; i++){
        if(i != 0){
            pages[i].style.display = 'none';
        }
    }
    if(pageNodeCounter == 0){
        leftArrow.style.display = 'none';
    }

    for(i = 0; i < pages.length; i++){
        dotDiv.appendChild(document.createElement("SPAN"));
        dotDiv.children[i].classList = 'dot';
        dotDiv.children[i].id = i;
    }
    dotDiv.children[0].style.backgroundColor = 'white';
    dotDiv.children[0].style.width = '60px';

    const dotItems = document.querySelectorAll('.dot');
    
    dotItems.forEach(link => {
        link.addEventListener('click', (e) => {
            sliderPageClickListener(e.target);
        })
    })
    scrollCurrentArray[0] = 0;
    for(i = 1; i <= pages.length; i++){
        scrollCurrentArray[i] = (imageContainer.scrollWidth/pages.length) * i 
    }
}

//Cycling through pages with the arrow key
function pageCycleRight(e){
    pages[pageNodeCounter].style.display = 'none';
    pageNodeCounter++;
    pages[pageNodeCounter].style.display = 'inline';
    updateArrowUpdater();
}

function pageCycleLeft(e){
    pages[pageNodeCounter].style.display = 'none';
    pageNodeCounter--;
    pages[pageNodeCounter].style.display = 'inline';
    updateArrowUpdater();
}

//changes the page when clicking the slider
function sliderPageCycle(){
    for (i = 0; i < pages.length; i++){
        if (i == pageNodeCounter){
            pages[i].style.display = 'inline';
        }
        else{
            pages[i].style.display = 'none';
        }
    }
}

//mouseleave and mouseout event for arrows left and right
function rightArrowMouseOver(e){
    rightArrow.style.fill = '#90ee90';
}

function rightArrowMouseOut(e){
    rightArrow.style.fill = 'none';
}

function leftArrowMouseOver(e){
    leftArrow.style.fill = '#90ee90';
}

function leftArrowMouseOut(e){
    leftArrow.style.fill = 'none';
}



//Updates the arrow as well as the current page counter
function updateArrowUpdater(){

    if(pageNodeCounter >= pages.length - 1){
            rightArrow.style.display = 'none';
            leftArrow.style.display = 'inline';
    }
    else if(pageNodeCounter == 0){
        leftArrow.style.display = 'none';
        rightArrow.style.display = 'inline'
    }
    else if(pageNodeCounter != 0){
        leftArrow.style.display = 'inline';
        rightArrow.style.display  = 'inline';
    }
    changeSliderColor();
}

//bottom page slider 
function changeSliderColor(){
    for(i = 0; i < dotDiv.children.length; i++){
        if(i ==  pageNodeCounter){
            dotDiv.children[i].style.backgroundColor = 'white';
            dotDiv.children[i].style.width = '60px';
            imageContainer.scrollTo({
                left: scrollCurrentArray[pageNodeCounter],
                right: scrollCurrentArray[pageNodeCounter],
                behavior: 'smooth'
            });
        }
        else{
            dotDiv.children[i].style.backgroundColor = '#bbb';
            dotDiv.children[i].style.width = '10px';
        }
    }
}

//Event function for the slider click
function sliderPageClickListener(event){
    pageNodeCounter = event.id;
    updateArrowUpdater();
    sliderPageCycle();
    changeSliderColor();
}

//Event Listeners when you click/mouseover/mouseleave on the arrow keys
rightArrow.addEventListener('click', function(event){
    pageCycleRight(event);
});

leftArrow.addEventListener('click', function(event){
    pageCycleLeft(event);
})

rightArrow.addEventListener('mouseover', function(event){
    rightArrowMouseOver(event);
})
rightArrow.addEventListener('mouseleave', function(event){
    rightArrowMouseOut(event);
})

leftArrow.addEventListener('mouseover', function(event){
    leftArrowMouseOver(event);
})
leftArrow.addEventListener('mouseleave', function(event){
    leftArrowMouseOut(event);
})

window.addEventListener('load', function () {
    pageInit(pages);
})