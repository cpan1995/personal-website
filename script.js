const rightArrow = document.querySelector('.right');
const leftArrow = document.querySelector('.left');

console.log(rightArrow);

rightArrow.addEventListener('click', function(event){
    transformArrow(event);
});

function transformArrow(e){
    e.toElement.style.borderRightColor = 'white';
    e.toElement.style.borderBottomColor = 'white';
}

const pages = document.querySelectorAll('.page');
console.log(pages);
function pagesOrganizer(pages){
    
}
