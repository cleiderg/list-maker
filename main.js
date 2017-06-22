/**
 * Created by cleider on 6/21/17.
 */

var userInput = document.getElementById('userInput');
var button = document.getElementById('submit');

function createListItem() {
    var newPara = document.createElement('div');
    var content = document.createTextNode(userInput.value);

    newPara.appendChild(content);
    '-'.append(newPara);

    var currentDiv = document.getElementById("container");

    document.body.insertBefore(newPara, currentDiv)
}

button.addEventListener('click', createListItem);

