// query selector
const body = document.querySelector('body');
const add = document.querySelector('.add');
const bookContainer = document.querySelector('.books');
const infoDialog = document.querySelector('.info');
const title = document.querySelector('#title');
const author = document.querySelector('#author');
const pages = document.querySelector('#pages');
const read = document.querySelector('#read');
const buttons = document.querySelector('.buttons');





// addEventListeners
add.addEventListener('click', () =>{
    infoDialog.showModal(); // shows the dialog
    body.classList.toggle('blured'); // toggle with the blur of the body
})

buttons.addEventListener('click', e =>{
    e.preventDefault();
    if(e.target.textContent === 'Add'){
        information()
    }
    else{
        infoDialog.close('close dialog');
    }

    body.classList.toggle('blured');
})


// infoDialog.showModal();

// functions
function information(){
    console.log('works')



    infoDialog.close('close dialog');
}