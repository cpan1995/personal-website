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
function pageCycleRight(e, pages){
    pages[pageNodeCounter].style.display = 'none';
    pages[pageNodeCounter + 1].style.display = 'inline';
    pageNodeCounter++;
    updateArrowUpdater();
}

function pageCycleLeft(e, pages){
    pages[pageNodeCounter].style.display = 'none';
    pages[pageNodeCounter - 1].style.display = 'inline';
    pageNodeCounter--;
    updateArrowUpdater();
}

function arrowMouseOver(e){
    e.toElement.style.borderRightColor = 'white';
    e.toElement.style.borderBottomColor = 'white';
}
function arrowMouseOut(e){
    e.toElement.style.borderRightColor = 'black';
    e.toElement.style.borderBottomColor = 'black';
}
//Updates the arrow as well as the current page counter
function updateArrowUpdater(){

    if(pageNodeCounter >= pages.length - 1){
        console.log(pageNodeCounter);
            rightArrow.style.display = 'none';
            leftArrow.style.display = 'inline';
    }
    else if(pageNodeCounter == 0){
        leftArrow.style.display = 'none';
        rightArrow.style.display = 'inline'
    }
    else if(pageNodeCounter != 0){
        leftArrow.style.display = 'inline';
    }
    else{
        leftArrow.style.display = 'inline';
        rightArrow.style.display  = 'inline';
    }
}
rightArrow.addEventListener('click', function(event){
    pageCycleRight(event, pages);
});

leftArrow.addEventListener('click', function(event){
    pageCycleLeft(event, pages);
})

pageInit(pages);
