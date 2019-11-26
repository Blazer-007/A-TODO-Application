// var h = document.createElement('h1');
// var myValue = document.createTextNode('Hello World');
// h.appendChild(myValue);
// document.querySelector('h1').appendChild(h);

var ul = document.getElementById('list');
var li;

var addButton = document.getElementById('add');
addButton.addEventListener('click',addItem);

var delButton = document.getElementById('delete');
delButton.addEventListener('click',delItem);



function addItem(){
    var input = document.getElementById('input');
    var item = input.value;
    ul = document.getElementById('list');
    var textnode = document.createTextNode(item);
    if (item == '') {
        return false;
    }else{
        // Create li
        li = document.createElement('li');
        // Create Checkbox
        var checkbox = document.createElement('input');
        checkbox.type= 'checkbox';
        checkbox.setAttribute('id','check');
        // Create label
        var label = document.createElement('label');
        label.setAttribute('for','item');

        // Add these elements on web page
        ul.appendChild(label);
        li.appendChild(checkbox);
        label.appendChild(textnode);
        li.appendChild(label); 
        ul.insertBefore(li,ul.childNodes[0]);
        // li.className = 'visual';

        setTimeout( () => {
            li.className = 'visual';
        }, 2);

        input.value = '';

    }
    
}
function delItem(){
    li = ul.children;
    for (let index = 0; index < li.length; index++) {
        while (li[index] && li[index].children[0].checked) {
            ul.removeChild(li[index]);
        }
        
    }
}