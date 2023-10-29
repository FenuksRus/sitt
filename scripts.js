const container = document.querySelector('.container');

// Функция для создания анимации фона
function animateBackground() {
    const colors = ['#0077b6', '#0096c7', '#00b4d8', '#48cae4', '#90e0ef', '#ade8f4'];
    let currentIndex = 0;

    function changeBackgroundColor() {
        container.style.backgroundColor = colors[currentIndex];
        currentIndex = (currentIndex + 1) % colors.length;
    }

    setInterval(changeBackgroundColor, 2000); // Изменяйте интервал, чтобы регулировать скорость анимации
}

animateBackground();
