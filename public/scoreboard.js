const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');
const scoreboards = document.querySelectorAll('.scoreboard');
const mainTitle = document.querySelector('.main-title');

let currentIndex = 0;
const titles = ['Design', 'Development', 'Multimedia'];

function showScoreboard(index) {
    scoreboards.forEach((scoreboard, i) => {
        scoreboard.classList.remove('active');
        scoreboard.classList.remove('exit-left');
        scoreboard.classList.remove('exit-right');
    });

    scoreboards[index].classList.add('active');
    mainTitle.textContent = titles[index];
}

leftArrow.addEventListener('click', () => {
    const newIndex = (currentIndex - 1 + scoreboards.length) % scoreboards.length;
    scoreboards[currentIndex].classList.add('exit-right');
    currentIndex = newIndex;
    showScoreboard(currentIndex);
});

rightArrow.addEventListener('click', () => {
    const newIndex = (currentIndex + 1) % scoreboards.length;
    scoreboards[currentIndex].classList.add('exit-left');
    currentIndex = newIndex;
    showScoreboard(currentIndex);
});

showScoreboard(currentIndex);
