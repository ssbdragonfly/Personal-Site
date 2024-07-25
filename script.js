document.addEventListener("DOMContentLoaded", function() {
    const nameElement = document.getElementById("name");
    const name = "Shaurya Bisht";
    let index = 0;

    function typeName() {
        if (index < name.length) {
            nameElement.textContent += name.charAt(index);
            index++;
            setTimeout(typeName, 200);
        } else {
            nameElement.textContent = name;
        }
    }

    typeName();

    const symbols = ['+', '-', '=', '*', '/', '>', '<', '{', '}', '0', '1', '∫', '∑', 'λ', 'π', 'σ', 'θ'];
    const background = document.querySelector('.background');

    function createSymbol() {
        const symbol = document.createElement('div');
        symbol.classList.add('symbol');
        symbol.textContent = symbols[Math.floor(Math.random() * symbols.length)];
        symbol.style.left = `${Math.random() * 100}vw`;
        symbol.style.top = `${Math.random() * 100}vh`;
        symbol.style.animationDuration = `${Math.random() * 10 + 5}s`;
        background.appendChild(symbol);

        setTimeout(() => {
            symbol.remove();
        }, 15000);
    }
    setInterval(createSymbol, 50);

    const themeToggleButton = document.getElementById('theme-toggle');

    if (localStorage.getItem('theme') === 'light') {
        document.body.classList.add('light-mode');
        document.querySelector('.container').classList.add('light-mode');
        document.querySelector('.nav-menu').classList.add('light-mode');
        themeToggleButton.textContent = 'Dark Mode';
    }

    themeToggleButton.addEventListener('click', () => {
        document.body.classList.toggle('light-mode');
        document.querySelector('.container').classList.toggle('light-mode');
        document.querySelector('.nav-menu').classList.toggle('light-mode');

        if (document.body.classList.contains('light-mode')) {
            themeToggleButton.textContent = 'Dark Mode';
            localStorage.setItem('theme', 'light');
        } else {
            themeToggleButton.textContent = 'Light Mode';
            localStorage.setItem('theme', 'dark');
        }
    });
});
