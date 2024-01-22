
import { useState,useRef,forwardRef ,useImperativeHandle} from "react"
export interface Player2DiceRef {
    roll: (dice:any) => void;
    }
    const Player2Dice=forwardRef<Player2DiceRef>((props:any,ref:any)=> {
 
    const audioRef = useRef(null);
    const playAudio = () => {
        console.log(audioRef)
        if (audioRef.current) {
          audioRef.current.play();
        }
      };
    
      const roll = (dice:any) => {
        // update childDataApi and pass it to parent
        playAudio()

        rolldice(dice)
      }
    
      useImperativeHandle(ref, () => ({
        roll
      }));
    
    const rolldice = (diceToRoll:any)=>{
        var elDiceOne       = document.getElementById('player2dice1');
        var elDiceTwo       = document.getElementById('player2dice2');
        var elDiceThree       = document.getElementById('player2dice3');
        var elDiceFour       = document.getElementById('player2dice4');
        var elDiceFive       = document.getElementById('player2dice5');
        var diceOne   = diceToRoll[0]
        var diceTwo   = diceToRoll[1];
        var diceThree   = diceToRoll[2];
        var diceFour   = diceToRoll[3];
        var diceFive  = diceToRoll[4];
        console.log('show-'+diceToRoll[0])
        console.log(2===diceToRoll[0])
         console.log(Math.floor((Math.random() * 6) + 1))





        if(diceToRoll[0]> 0)
        for (var i = 1; i <= 6; i++) {
            elDiceOne.classList.remove('show-' + i);
            if (diceOne === i) {
                console.log(i)
              elDiceOne.classList.add('show-' + i);
            }
          }
        
          if(diceToRoll[1] > 0)

          for (var k = 1; k <= 6; k++) {
            elDiceTwo.classList.remove('show-' + k);
            if (diceTwo === k) {
              elDiceTwo.classList.add('show-' + k);
            }
          } 
          
          if(diceToRoll[2] >0)

          for (var k = 1; k <= 6; k++) {
            elDiceThree.classList.remove('show-' + k);
            if (diceThree === k) {
              elDiceThree.classList.add('show-' + k);
            }
          } 

          if(diceToRoll[3]>0)

           for (var k = 1; k <= 6; k++) {
            elDiceFour.classList.remove('show-' + k);
            if (diceFour === k) {
              elDiceFour.classList.add('show-' + k);
            }
          } 
          
          if(diceToRoll[4] > 0)

          for (var k = 1; k <= 6; k++) {
            elDiceFive.classList.remove('show-' + k);
            if (diceFive === k) {
              elDiceFive.classList.add('show-' + k);
            }
          } 

    }
    return (
    <div className=" flex space-x-4 ">
      <div id='player2dice1' class="dice dice-one" >
        <div id="dice-one-side-one" class='sideAlt one'>
          <div class="dotAlt one-1"></div>
        </div>
        <div id="dice-one-side-two" class='sideAlt two'>
          <div class="dotAlt two-1"></div>
          <div class="dotAlt two-2"></div>
        </div>
        <div id="dice-one-side-three" class='sideAlt three'>
          <div class="dotAlt three-1"></div>
          <div class="dotAlt three-2"></div>
          <div class="dotAlt three-3"></div>
        </div>
        <div id="dice-one-side-four" class='sideAlt four'>
          <div class="dotAlt four-1"></div>
          <div class="dotAlt four-2"></div>
          <div class="dotAlt four-3"></div>
          <div class="dotAlt four-4"></div>
        </div>
        <div id="dice-one-side-five" class='sideAlt five'>
          <div class="dotAlt five-1"></div>
          <div class="dotAlt five-2"></div>
          <div class="dotAlt five-3"></div>
          <div class="dotAlt five-4"></div>
          <div class="dotAlt five-5"></div>
        </div>
        <div id="dice-one-side-six" class='sideAlt six'>
          <div class="dotAlt six-1"></div>
          <div class="dotAlt six-2"></div>
          <div class="dotAlt six-3"></div>
          <div class="dotAlt six-4"></div>
          <div class="dotAlt six-5"></div>
          <div class="dotAlt six-6"></div>
        </div>
      </div>
      <div id='player2dice2' class="dice dice-two" >
        <div id="dice-two-side-one" class='sideAlt one'>
          <div class="dotAlt one-1"></div>
        </div>
        <div id="dice-two-side-two" class='sideAlt two'>
          <div class="dotAlt two-1"></div>
          <div class="dotAlt two-2"></div>
        </div>
        <div id="dice-two-side-three" class='sideAlt three'>
          <div class="dotAlt three-1"></div>
          <div class="dotAlt three-2"></div>
          <div class="dotAlt three-3"></div>
        </div>
        <div id="dice-two-side-four" class='sideAlt four'>
          <div class="dotAlt four-1"></div>
          <div class="dotAlt four-2"></div>
          <div class="dotAlt four-3"></div>
          <div class="dotAlt four-4"></div>
        </div>
        <div id="dice-two-side-five" class='sideAlt five'>
          <div class="dotAlt five-1"></div>
          <div class="dotAlt five-2"></div>
          <div class="dotAlt five-3"></div>
          <div class="dotAlt five-4"></div>
          <div class="dotAlt five-5"></div>
        </div>
        <div id="dice-two-side-six" class='sideAlt six'>
          <div class="dotAlt six-1"></div>
          <div class="dotAlt six-2"></div>
          <div class="dotAlt six-3"></div>
          <div class="dotAlt six-4"></div>
          <div class="dotAlt six-5"></div>
          <div class="dotAlt six-6"></div>
        </div>

        
     
      </div> 
      <div id='player2dice3' class="dice dice-three" >
        <div id="dice-three-side-one" class='sideAlt one'>
          <div class="dotAlt one-1"></div>
        </div>
        <div id="dice-three-side-two" class='sideAlt two'>
          <div class="dotAlt two-1"></div>
          <div class="dotAlt two-2"></div>
        </div>
        <div id="dice-three-side-three" class='sideAlt three'>
          <div class="dotAlt three-1"></div>
          <div class="dotAlt three-2"></div>
          <div class="dotAlt three-3"></div>
        </div>
        <div id="dice-three-side-four" class='sideAlt four'>
          <div class="dotAlt four-1"></div>
          <div class="dotAlt four-2"></div>
          <div class="dotAlt four-3"></div>
          <div class="dotAlt four-4"></div>
        </div>
        <div id="dice-three-side-five" class='sideAlt five'>
          <div class="dotAlt five-1"></div>
          <div class="dotAlt five-2"></div>
          <div class="dotAlt five-3"></div>
          <div class="dotAlt five-4"></div>
          <div class="dotAlt five-5"></div>
        </div>
        <div id="dice-three-side-six" class='sideAlt six'>
          <div class="dotAlt six-1"></div>
          <div class="dotAlt six-2"></div>
          <div class="dotAlt six-3"></div>
          <div class="dotAlt six-4"></div>
          <div class="dotAlt six-5"></div>
          <div class="dotAlt six-6"></div>
        </div>
      </div> 
      <div id='player2dice4' class="dice dice-four" >
        <div id="dice-four-side-one" class='sideAlt one'>
          <div class="dotAlt one-1"></div>
        </div>
        <div id="dice-four-side-two" class='sideAlt two'>
          <div class="dotAlt two-1"></div>
          <div class="dotAlt two-2"></div>
        </div>
        <div id="dice-four-side-three" class='sideAlt three'>
          <div class="dotAlt three-1"></div>
          <div class="dotAlt three-2"></div>
          <div class="dotAlt three-3"></div>
        </div>
        <div id="dice-four-side-four" class='sideAlt four'>
          <div class="dotAlt four-1"></div>
          <div class="dotAlt four-2"></div>
          <div class="dotAlt four-3"></div>
          <div class="dotAlt four-4"></div>
        </div>
        <div id="dice-four-side-five" class='sideAlt five'>
          <div class="dotAlt five-1"></div>
          <div class="dotAlt five-2"></div>
          <div class="dotAlt five-3"></div>
          <div class="dotAlt five-4"></div>
          <div class="dotAlt five-5"></div>
        </div>
        <div id="dice-four-side-six" class='sideAlt six'>
          <div class="dotAlt six-1"></div>
          <div class="dotAlt six-2"></div>
          <div class="dotAlt six-3"></div>
          <div class="dotAlt six-4"></div>
          <div class="dotAlt six-5"></div>
          <div class="dotAlt six-6"></div>
        </div>
      </div>
      <div id='player2dice5' class="dice dice-five" >
        <div id="dice-five-side-one" class='sideAlt one'>
          <div class="dotAlt one-1"></div>
        </div>
        <div id="dice-five-side-two" class='sideAlt two'>
          <div class="dotAlt two-1"></div>
          <div class="dotAlt two-2"></div>
        </div>
        <div id="dice-five-side-three" class='sideAlt three'>
          <div class="dotAlt three-1"></div>
          <div class="dotAlt three-2"></div>
          <div class="dotAlt three-3"></div>
        </div>
        <div id="dice-five-side-four" class='sideAlt four'>
          <div class="dotAlt four-1"></div>
          <div class="dotAlt four-2"></div>
          <div class="dotAlt four-3"></div>
          <div class="dotAlt four-4"></div>
        </div>
        <div id="dice-five-side-five" class='sideAlt five'>
          <div class="dotAlt five-1"></div>
          <div class="dotAlt five-2"></div>
          <div class="dotAlt five-3"></div>
          <div class="dotAlt five-4"></div>
          <div class="dotAlt five-5"></div>
        </div>
        <div id="dice-five-side-six" class='sideAlt six'>
          <div class="dotAlt six-1"></div>
          <div class="dotAlt six-2"></div>
          <div class="dotAlt six-3"></div>
          <div class="dotAlt six-4"></div>
          <div class="dotAlt six-5"></div>
          <div class="dotAlt six-6"></div>
        </div>  

      </div>
     
      <audio ref={audioRef} >
          <source src="/sound/dice2.ogg" type="audio/ogg" />
          Your browser does not support the audio element.
        </audio>
   </div>

   
   )
})
Player2Dice.displayName = 'Player2Dice';

export default Player2Dice;