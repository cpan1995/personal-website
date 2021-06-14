const rightArrow = document.querySelector('.right');
const leftArrow = document.querySelector('.left');
const pages = document.querySelectorAll('.page');
let pageNodeCounter = 0;
console.log(rightArrow);

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
    console.log(pages);
}

//Cycling through pages with the arrow key
function pageCycle(e, pages){
    e.toElement.style.borderRightColor = 'white';
    e.toElement.style.borderBottomColor = 'white';
    //updateArrowUpdater();
    pages[pageNodeCounter].style.display = 'none';
    console.log(pages);
    console.log(pageNodeCounter);
    pages[pageNodeCounter + 1].style.display = 'inline';
    pageNodeCounter++;
}

//Updates the arrow as well as the current page counter
function updateArrowUpdater(){

    switch(pageNodeCounter) {
        case (pageNodeCounter > pages.length - 1):
            pageNodeCounter = 0;
            break;
        case (pageNodeCounter == 0):
            leftArrow.style.display = 'none';
            rightArrow.style.display = 'inline'
            break;
        case (pageNodeCounter != 0):
            leftArrow.style.display = 'inline';
            break;
        case (pageNodeCounter = pages.length - 1):
            rightArrow.style.display = 'none';
            leftArrow.style.display = 'inline';
            break;
    }
}
rightArrow.addEventListener('click', function(event){
    pageCycle(event, pages);
});

pageInit(pages);
