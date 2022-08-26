/* Description: Randomly change background color every 5 seconds */
setInterval(
    function() {
        var randomColor = Math.floor(Math.random() * 16777215).toString(16);
        document.body.style.backgroundColor = "#" + randomColor;
    }, 5000);