    const horizontalButton = document.getElementById('horizontalButton');
    const verticalButton = document.getElementById('verticalButton');
    const resetButton = document.getElementById('resetButton');
    const horizontalMenu = document.getElementById('horizontalMenu');
    const verticalMenu = document.getElementById('verticalMenu');

    let isHorizontalClicked = false;
    let isVerticalClicked = false;

    
    horizontalButton.addEventListener('click', () => {
        horizontalMenu.style.display = 'block';
        verticalMenu.style.display = 'none';

        horizontalButton.classList.remove('active');
        horizontalButton.classList.add('inactive');
        verticalButton.classList.remove('inactive');
        verticalButton.classList.add('active');

        isHorizontalClicked = true;

        updateResetButtonState();
    });

    verticalButton.addEventListener('click', () => {
        verticalMenu.style.display = 'block';
        horizontalMenu.style.display = 'none';

        verticalButton.classList.remove('active');
        verticalButton.classList.add('inactive');
        horizontalButton.classList.remove('inactive');
        horizontalButton.classList.add('active');

        isVerticalClicked = true;

        updateResetButtonState();
    });

    resetButton.addEventListener('click', () => {
        location.reload();
    });


    function updateResetButtonState() {
        if (isHorizontalClicked && isVerticalClicked) {
            resetButton.classList.remove('inactive');
            resetButton.classList.add('active');
        }
    }