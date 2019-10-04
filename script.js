// let character = "!@#$%^&*()_+~`|}{[]:;?><,./-=abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

// let lengthPick = prompt("Choose the length of your password");
// lengthPick++;
// let password = "";

// for (var i = 1; i < lengthPick; i++) randomSpecial(i);

// function randomSpecial() {
//     let random = Math.floor(Math.random() * character.length);
//     password = password + character.charAt(random);
//     console.log(password);
//     document.querySelector("body > div > h1").innerHTML = password;
// }

// Copy to clipboard on a click event
document.querySelector("#copy-button").addEventListener('click', function () {
    var reference_element = document.querySelector('#to-select-text');

    var range = document.createRange();
    range.selectNodeContents(reference_element);

    window.getSelection().addRange(range);

    var success = document.execCommand('copy');

    window.getSelection().removeRange(range);
    alert('Your password has been copied to clipboard');
});