const btnDonate = document.querySelector('.header__btn');
console.log(btnDonate);

btnDonate.addEventListener('click', consoller);


function consoller() {
    btnDonate.textContent = 'CLICKED';
    btnDonate.addEventListener('click', againer);
}

function againer() {
    btnDonate.textContent = 'AGAINER';
}