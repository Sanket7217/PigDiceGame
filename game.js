

var scores, roundScore, dice, activePlayer, gameIsOn;

init();

document.querySelector('.btn-roll').addEventListener('click', function(){
    if(gameIsOn){
           dice = Math.floor((Math.random()) * 6) + 1;
        var diceDOM = document.querySelector('.dice');
        diceDOM.style.display = 'block';
        diceDOM.src = 'dice-' + dice + '.png';

        if (dice !== 1) {
            roundScore += dice;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        } else {

            nextPlayer();
        }
    }

});

document.querySelector('.btn-hold').addEventListener('click', function(){
   if(gameIsOn){
        scores[activePlayer]+= roundScore;
        document.getElementById('score-'+activePlayer).textContent = scores[activePlayer];

        if(scores[activePlayer] >= 20){
            document.getElementById('name-'+activePlayer).textContent='WINNER!!';
            document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
            document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
            document.querySelector('.dice').style.display = 'none';
            gameIsOn = false;
        }else {
            nextPlayer();

        }
   }

});

document.querySelector('.btn-new').addEventListener('click', init);

function init(){

    scores = [0,0];
    roundScore = 0;
    activePlayer = 0;
    gameIsOn = true;

    document.querySelector('.dice').style.display = 'none';
    document.querySelector('#current-0').textContent = '0';
    document.querySelector('#current-1').textContent = '0';
    document.querySelector('#score-0').textContent = '0';
    document.querySelector('#score-1').textContent = '0';

    document.getElementById('name-0').textContent='Player 1';
    document.getElementById('name-1').textContent='Player 2';
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');

    document.querySelector('.player-0-panel').classList.add('active');


}

function nextPlayer(){
        document.querySelector('#current-0').textContent = '0';
        document.querySelector('#current-1').textContent = '0';
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        roundScore = 0;
}
