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
