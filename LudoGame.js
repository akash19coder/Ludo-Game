

function playLudo(e){
    let title = document.getElementById('title')
    
    // code for player one
    var ludo1 = document.getElementById('ludo1');
var dice = Math.ceil(Math.random()*6);
var value = `dice${dice}.jpg`
console.log(dice)

//code for player two
var ludo2 = document.getElementById('ludo2');
var dice1 = Math.ceil(Math.random()*6);
var value1 = `dice${dice1}.jpg`
console.log(dice)
    console.log('HEllo World')
ludo1.setAttribute('src',value);
ludo2.setAttribute('src',value1);

if(value>value1){
    title.innerHTML = "Player 1 wins"
}
else{
    title.innerHTML = "Player 2 wins"
}
if(value==value1){
    title.innerHTML = "Draw"
}
}
