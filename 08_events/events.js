// document.getElementById('owl').addEventListener('click',(e)=>{
//     alert('OWL Clicked!');
// });


// attachEvent();
//jQuery - on
// type, timestamp, defaultPrevented;
// target, toElement, srcElement, currentTarget clientX, clientY, screenX, screenY
// altkey, ctrlkey, shiftkey, keycode;


// ***********Bubbeling up ****************
// document.getElementById('images').addEventListener('click',(e)=>{
//     console.log('clicked inside the UL');
// }, false); // capturing mode

// document.getElementById('owl').addEventListener('click',(e)=>{
//     console.log('OWL Clicked!');
//     e.stopPropagation();
// }, false); // capturing mode


// document.getElementById('google').addEventListener('click', (e)=>{
//     e.preventDefault();
//     e.stopPropagation();
//     console.log('google clicked!');

// })


const ul = document.getElementById('images');

ul.addEventListener('click',(e)=>{
     e.preventDefault();
 console.log(e.target.parentNode);
 if (e.target.tagName === 'IMG') {
    console.log(e.target.id);
   let removeIt = e.target.parentNode;
   removeIt.remove();  
 }

// removeIt.parentNode.removeChild(removeIt);

}, false)



