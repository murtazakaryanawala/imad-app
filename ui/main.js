console.log('Loaded!');

var button = document.getElementById('btn');
var counter = 0;

button.onclick = function(){
    
    counter = counter + 1;
    var span = document.getElementById('count');
    span.innerHtml = counter.toString();
};

/*request.open('GET', 'http://murtaza.imad.hasura-app.io/counter', true);
                    request.send(null);*/