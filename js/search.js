var search = document.getElementById('search');
var search_icon = document.getElementById('search_icon');
var close = document.getElementById('close');


search_icon.addEventListener('click', () => {
    search.style.display = 'inline';
    search_icon.style.display = 'none';
    search.style.animation = 'search 1s 1'; 
});
