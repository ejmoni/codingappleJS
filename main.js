let addContents = document.getElementById('add-content').style.display = 'block';
let delButton = document.getElementById('del-button').style.display = 'none';

addContents.addEventListener("click", oneLine)
taskInput.addEventListener("focus",function(){
    taskInput.value="";
});