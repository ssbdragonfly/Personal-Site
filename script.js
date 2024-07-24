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
    setInterval(createSymbol, 100);
});