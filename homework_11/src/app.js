let rootNode = document.getElementById("root");

rootNode.setAttribute('class','root');
let container1 = document.createElement('div');
container1.setAttribute('class','nav');
rootNode.appendChild(container1);
let header = document.createElement('h1');
header.setAttribute('class','head');
let headerText = document.createTextNode('TODO Cat List');
container1.appendChild(header);
header.appendChild(headerText);
let input = document.createElement('input');
input.setAttribute('class','nav-input');
input.setAttribute('type','text');
input.setAttribute('placeholder','add new action');
container1.appendChild(input);

let btnAction = document.createElement('button');
btnAction.setAttribute('class', 'btn-nav');
let btnIcon = document.createElement('i');
btnIcon.setAttribute('class','material-icons');
let btnIconName = document.createTextNode('add_box');
btnIcon.appendChild(btnIconName);
btnAction.appendChild(btnIcon);
container1.appendChild(btnAction);
btnAction.disabled = true;
input.focus();
input.addEventListener('input', function(){
    if(input.value.length === 0){
        console.log('disabled');
        btnAction.disabled = true;
      }else{
        btnAction.disabled = false;
        console.log('enabled');
    
        }
      });

rootNode.appendChild(document.createElement('hr'));      

let count = 1;
let container3 = document.createElement('div');
rootNode.appendChild(container3);
function createActions(){
    let container2 = document.createElement('div');
    container2.setAttribute('id',new Date().getTime());
    container2.setAttribute('class','div-2');
    container3.appendChild(container2);
    
    if(count<=3){
    let checkbox = document.createElement('input');
    checkbox.setAttribute('class','chackboxes');
    checkbox.setAttribute('type','checkbox');
    checkbox.setAttribute('name', 'la');

    let checkboxIcon = document.createElement('i');
    checkboxIcon.setAttribute('class','material-icons');
    let checkboxIconName = document.createTextNode('delete');
    checkboxIcon.appendChild(checkboxIconName);
    checkbox.appendChild(checkboxIcon);

    let lbl = document.createElement('label');
    lbl.setAttribute('for', 'la');
    let lblTxt = document.createTextNode(input.value);
    lbl.appendChild(lblTxt);
    container2.appendChild(checkbox);
    container2.appendChild(lbl);

    count++;
    input.value = "";
    btnAction.disabled = true;

    let deleteButton = document.createElement('button');
    deleteButton.setAttribute('class','delete-btn');
    container2.appendChild(deleteButton);
    let deleteButtonIcon = document.createElement('i');
    deleteButtonIcon.setAttribute('class','material-icons');
    let deleteButtonIconName = document.createTextNode('delete');
    deleteButtonIcon.appendChild(deleteButtonIconName);
    deleteButton.appendChild(deleteButtonIcon);

    deleteButton.addEventListener('click',deleteAction);
    function deleteAction(){
        container2.remove();
        count--;
        input.disabled = false;
    }
    }else {
        input.value = "";
        console.error('забагато, Друже)');
        input.disabled = true;
        btnAction.disabled = true;
    }
}

rootNode.addEventListener('change', detectChanges);
function detectChanges(e){
    if(e.srcElement.checked){
        e.srcElement.disabled = true;
    }
}

btnAction.addEventListener('click',createActions);

let footer = document.createElement('footer');
rootNode.appendChild(footer);
let footerImg = document.createElement('img');
footerImg.setAttribute('src','./assets/img/cat.png');
footer.appendChild(footerImg);