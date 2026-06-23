document.addEventListener('DOMContentLoaded', function() {

    function swapbox(){
        let hold;
        for(let j = 0; j < 4; j++){
            hold = arrOfSelectors[j].innerHTML;

            arrOfSelectors[j].innerHTML = arrOfSelectors[j+1].innerHTML;
            arrOfSelectors[j+1].innerHTML = hold;
    
        }
    }

    let arrOfBoxes = ['.engineer', '.programmer', '.translator', '.badminton'];
    let arrOfSelectors = [];
        for (let i = 0; i < 4; i++){
            arrOfSelectors[i] = document.querySelector(arrOfBoxes[i]);
        }
    const button = document.querySelector('#swapbox');
    button.addEventListener('pointerdown', swapbox);
});