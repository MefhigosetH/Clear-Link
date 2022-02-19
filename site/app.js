/*
* ClearLink app logic.
* Developed by Victor Villarreal @ Feb 2022
* https://github.com/MefhigosetH/Clear-Link
* Source code with No license
*/



/*
* Init the NavBar.
*
* @return None
*/
function initNavBar() {
    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {

        // Add a click event on each of them
        $navbarBurgers.forEach( el => {
            el.addEventListener('click', () => {

                // Get the target from the "data-target" attribute
                const target = el.dataset.target;
                const $target = document.getElementById(target);

                // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
                el.classList.toggle('is-active');
                $target.classList.toggle('is-active');
            });
        });
    };

    console.log('NavBar initialized');
}



/*
* Clear the user input.
*
* @return None
*/
function clearUserInput() {
    urlField.value = '';
    clearHelp();

    console.log('Form cleared');
}



/*
* Show a help text to the user.
*
* @param level string The level of message (is-danger || is-success)
* @param message string The message
* @return None
*/
function showHelp( level, message ) {
    urlField.className = 'input ' + level;
    helpText.className = 'help ' + level;
    helpText.innerText = message;
    helpText.style.display = 'block';

    console.log('('+level+') ', message);
}



/*
* Clear the help message.
*
* @return None
*/
function clearHelp() {
    urlField.className = 'input';
    helpText.className = 'help';
    helpText.innerText = '';
    helpText.style.display = 'none';
}



/*
* Fire a scan to the Link entered by user.
*
* @return None
*/
function scanLink() {
    clearHelp();
    link = urlField.value;

    // Trow error if the URL is empty
    if( link == '' ) {
        showHelp('is-danger', 'Error: El campo LINK esta vacio.');
        return false;
    }

    // Trow error if the protocol is empty
    if( link.startsWith('http') === false ) {
        showHelp('is-danger', 'Error: The link need to start with "http" or "https".');
        return false;
    }

    try {
        const url = new URL(link);
        console.log(url);
    }
    catch( error ) {
        showHelp('is-danger', error);
    }

}



/*
* Init the app when document is loaded.
*/
document.addEventListener('DOMContentLoaded', () => {

    // Initialize NavBar
    initNavBar();

    // Init user controls
    var urlField = document.getElementById("urlField");

    var helpText = document.getElementById("helpText");
    helpText.style.display = 'none';

    var scanButton = document.getElementById("scanBtn");
    scanButton.onclick = scanLink;

    var clearButton = document.getElementById("clearBtn");
    clearButton.onclick = clearUserInput;
});
