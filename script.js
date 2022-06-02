'use strict';

const panelImage = document.querySelectorAll('.panel');

panelImage.forEach((panel) => {
    panel.addEventListener('click', function(e){
        removeActive();
        e.target.classList.add('active');
    });
})

function removeActive(){
    panelImage.forEach((panel) => {
        panel.classList.remove('active');
    })
}