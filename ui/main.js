/*console.log('Loaded!');

var button = document.getElementById('btn');
var counter = 0;

button.onclick = function(){
    
    counter = counter + 1;
    var span = document.getElementById('count');
    span.innerHtml = counter.toString();
};*/



var counter=0;
$('.btn').click(function(){
    counter = counter + 1;
    $('.count').html('counter');
});