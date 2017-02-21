console.log('Loaded!');

//change the text of a main-text div
var element = document.getElementById('main-text');
element.innerHTML = 'New value';

//move the image 
var img = document.getElementById('img');
img.onclick = funtion () {
  img.style.marginLeft = '100px';  
};