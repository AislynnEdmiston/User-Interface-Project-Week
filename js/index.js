// JS goes here

function toggleNavOpen(){
    navOpen.classList.toggle('hidden');
    console.log('click');
}

const navOpen = document.querySelector('.navContainerOpen');
const closeBtn = document.querySelector('.closed');
const openBtn = document.querySelector('.open');

closeBtn.addEventListener('click', () => {
    toggleNavOpen();
});
openBtn.addEventListener('click', () => {
    toggleNavOpen();
});