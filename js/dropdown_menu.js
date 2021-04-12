var menu = document.getElementById('menu');
var dropdown_content = document.getElementById('dropdown_content');

menu.addEventListener('click', () => {
    if(dropdown_content.style.display === 'none'){
        dropdown_content.style.display = 'block';
    }
    else{
        dropdown_content.style.display = 'none';
    }
});