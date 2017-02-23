//counter code
var button = document.getElementById('counter');
var counter = 0;

button.onclick = function(){
    //make a req to the counter end point
    var request = new XMLHttpRequest();
    
    //capture the res and store it in a variable
    request.onreadystatechange = function () {
      if (request.readyState == XMLHttpRequest.DONE) {
          if (request.status == 200) {
            var counter = request.responseText;
            var span = document.getElementById('count');
            span.innerHTML = counter.toString();              
          }
      }  
    };
    //make the request
    request.open('GET','http://amanmanit.imad.hasura-app.io/counter',true);
    request.send(null);
};

//submit name 
var nameInput = document.getElementById('name');
var name = nameInput.value;
var submit = document.getElementById('submit_btn');

submit.onclick = function () {
    //make a request to the server and send the name
    
    //capture a list of name and render it as a list 
    var name = ['name1','name2','name3'];
    var list = '';
    for (var i=0; i<name.length; i++) {
        list +='<li>' + name[i] + '</li>';
    }
    var ul = document.getElementById('namelist');
    ul.innerHTML = list;
};