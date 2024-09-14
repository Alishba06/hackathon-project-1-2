var toggleButton = document.getElementById('toggleButton');
var myDiv = document.getElementById('myDiv');
toggleButton.addEventListener('click', function () {
    if (myDiv.style.display === 'none') {
        myDiv.style.display = 'block';
        toggleButton.textContent = 'Hide Div';
    }
    else {
        myDiv.style.display = 'none';
        toggleButton.textContent = 'Show Div';
    }
});
