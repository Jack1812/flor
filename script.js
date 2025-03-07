document.getElementById('mensaje').addEventListener('click', function() {
    // Mostrar los pétalos
    const petals = document.querySelectorAll('.petals > div');
    petals.forEach(petal => {
        petal.style.opacity = '1'; // Hacer visibles los pétalos
    });

    // Agregar animaciones a los pétalos
    document.querySelector('.petals > div:nth-child(2)').style.animation = 'bloom2 3s ease-in-out forwards';
    document.querySelector('.petals > div:nth-child(3)').style.animation = 'bloom3 3s ease-in-out forwards, glowing 2.5s ease-in-out infinite';
    document.querySelector('.petals > div:nth-child(4)').style.animation = 'bloom4 3s ease-in-out forwards, glowing 2.5s ease-in-out infinite';
    document.querySelector('.petals > div:nth-child(5)').style.animation = 'bloom5 3s ease-in-out forwards, glowing 2.5s ease-in-out infinite';
    document.querySelector('.petals > div:nth-child(6)').style.animation = 'bloom6 3s ease-in-out forwards, glowing 2.5s ease-in-out infinite';
    document.querySelector('.petals > div:nth-child(7)').style.animation = 'bloom7 3s ease-in-out forwards, glowing 2.5s ease-in-out infinite';
});