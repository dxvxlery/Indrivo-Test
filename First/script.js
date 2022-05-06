const nav = document.querySelectorAll('.navigation__item');
const activeContent = document.querySelectorAll('.content');

nav.forEach((item, index) => {
    item.addEventListener('click', (event) => {
        event.preventDefault();
        document.querySelector('.active__nav').classList.remove('active__nav');
        document.querySelector('.content--active').classList.remove('content--active');
        item.classList.add('active__nav');
        activeContent[index].classList.add('content--active');
    });
});
