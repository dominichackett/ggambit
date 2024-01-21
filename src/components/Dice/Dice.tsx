
import { useState,useRef } from "react"
export default function Dice(){
    const audioRef = useRef(null);
    const playAudio = () => {
        if (audioRef.current) {
          audioRef.current.play();
        }
      };
    
    const rolldie = (die:number)=>{
       var dice = [false,false,false,false,false];
       dice[die] = true;
       rolldice(dice); 
    } 
    const rolldice = (diceToRoll:any)=>{
        var elDiceOne       = document.getElementById('dice1');
        var elDiceTwo       = document.getElementById('dice2');
        var elDiceThree       = document.getElementById('dice3');
        var elDiceFour       = document.getElementById('dice4');
        var elDiceFive       = document.getElementById('dice5');
        var diceOne   = Math.floor((Math.random() * 6) + 1);
        var diceTwo   = Math.floor((Math.random() * 6) + 1);
        var diceThree   = Math.floor((Math.random() * 6) + 1);
        var diceFour   = Math.floor((Math.random() * 6) + 1);
        var diceFive  = Math.floor((Math.random() * 6) + 1);
       playAudio()
        if(diceToRoll[0])
        for (var i = 1; i <= 6; i++) {
            elDiceOne.classList.remove('show-' + i);
            if (diceOne === i) {
              elDiceOne.classList.add('show-' + i);
            }
          }
        
          if(diceToRoll[1])

          for (var k = 1; k <= 6; k++) {
            elDiceTwo.classList.remove('show-' + k);
            if (diceTwo === k) {
              elDiceTwo.classList.add('show-' + k);
            }
          } 
          
          if(diceToRoll[2])

          for (var k = 1; k <= 6; k++) {
            elDiceThree.classList.remove('show-' + k);
            if (diceThree === k) {
              elDiceThree.classList.add('show-' + k);
            }
          } 

          if(diceToRoll[3])

           for (var k = 1; k <= 6; k++) {
            elDiceFour.classList.remove('show-' + k);
            if (diceFour === k) {
              elDiceFour.classList.add('show-' + k);
            }
          } 
          
          if(diceToRoll[4])

          for (var k = 1; k <= 6; k++) {
            elDiceFive.classList.remove('show-' + k);
            if (diceFive === k) {
              elDiceFive.classList.add('show-' + k);
            }
          } 

    }
    return (
    <div className="game flex space-x-4">
      <div id='dice1' class="dice dice-one" onClick={()=>rolldie(0)}>
        <div id="dice-one-side-one" class='side one'>
          <div class="dot one-1"></div>
        </div>
        <div id="dice-one-side-two" class='side two'>
          <div class="dot two-1"></div>
          <div class="dot two-2"></div>
        </div>
        <div id="dice-one-side-three" class='side three'>
          <div class="dot three-1"></div>
          <div class="dot three-2"></div>
          <div class="dot three-3"></div>
        </div>
        <div id="dice-one-side-four" class='side four'>
          <div class="dot four-1"></div>
          <div class="dot four-2"></div>
          <div class="dot four-3"></div>
          <div class="dot four-4"></div>
        </div>
        <div id="dice-one-side-five" class='side five'>
          <div class="dot five-1"></div>
          <div class="dot five-2"></div>
          <div class="dot five-3"></div>
          <div class="dot five-4"></div>
          <div class="dot five-5"></div>
        </div>
        <div id="dice-one-side-six" class='side six'>
          <div class="dot six-1"></div>
          <div class="dot six-2"></div>
          <div class="dot six-3"></div>
          <div class="dot six-4"></div>
          <div class="dot six-5"></div>
          <div class="dot six-6"></div>
        </div>
      </div>
      <div id='dice2' class="dice dice-two" onClick={()=>rolldie(1)}>
        <div id="dice-two-side-one" class='side one'>
          <div class="dot one-1"></div>
        </div>
        <div id="dice-two-side-two" class='side two'>
          <div class="dot two-1"></div>
          <div class="dot two-2"></div>
        </div>
        <div id="dice-two-side-three" class='side three'>
          <div class="dot three-1"></div>
          <div class="dot three-2"></div>
          <div class="dot three-3"></div>
        </div>
        <div id="dice-two-side-four" class='side four'>
          <div class="dot four-1"></div>
          <div class="dot four-2"></div>
          <div class="dot four-3"></div>
          <div class="dot four-4"></div>
        </div>
        <div id="dice-two-side-five" class='side five'>
          <div class="dot five-1"></div>
          <div class="dot five-2"></div>
          <div class="dot five-3"></div>
          <div class="dot five-4"></div>
          <div class="dot five-5"></div>
        </div>
        <div id="dice-two-side-six" class='side six'>
          <div class="dot six-1"></div>
          <div class="dot six-2"></div>
          <div class="dot six-3"></div>
          <div class="dot six-4"></div>
          <div class="dot six-5"></div>
          <div class="dot six-6"></div>
        </div>

        
     
      </div> 
      <div id='dice3' class="dice dice-three" onClick={()=>rolldie(2)}>
        <div id="dice-three-side-one" class='side one'>
          <div class="dot one-1"></div>
        </div>
        <div id="dice-three-side-two" class='side two'>
          <div class="dot two-1"></div>
          <div class="dot two-2"></div>
        </div>
        <div id="dice-three-side-three" class='side three'>
          <div class="dot three-1"></div>
          <div class="dot three-2"></div>
          <div class="dot three-3"></div>
        </div>
        <div id="dice-three-side-four" class='side four'>
          <div class="dot four-1"></div>
          <div class="dot four-2"></div>
          <div class="dot four-3"></div>
          <div class="dot four-4"></div>
        </div>
        <div id="dice-three-side-five" class='side five'>
          <div class="dot five-1"></div>
          <div class="dot five-2"></div>
          <div class="dot five-3"></div>
          <div class="dot five-4"></div>
          <div class="dot five-5"></div>
        </div>
        <div id="dice-three-side-six" class='side six'>
          <div class="dot six-1"></div>
          <div class="dot six-2"></div>
          <div class="dot six-3"></div>
          <div class="dot six-4"></div>
          <div class="dot six-5"></div>
          <div class="dot six-6"></div>
        </div>
      </div> 
      <div id='dice4' class="dice dice-four" onClick={()=>rolldie(3)}>
        <div id="dice-four-side-one" class='side one'>
          <div class="dot one-1"></div>
        </div>
        <div id="dice-four-side-two" class='side two'>
          <div class="dot two-1"></div>
          <div class="dot two-2"></div>
        </div>
        <div id="dice-four-side-three" class='side three'>
          <div class="dot three-1"></div>
          <div class="dot three-2"></div>
          <div class="dot three-3"></div>
        </div>
        <div id="dice-four-side-four" class='side four'>
          <div class="dot four-1"></div>
          <div class="dot four-2"></div>
          <div class="dot four-3"></div>
          <div class="dot four-4"></div>
        </div>
        <div id="dice-four-side-five" class='side five'>
          <div class="dot five-1"></div>
          <div class="dot five-2"></div>
          <div class="dot five-3"></div>
          <div class="dot five-4"></div>
          <div class="dot five-5"></div>
        </div>
        <div id="dice-four-side-six" class='side six'>
          <div class="dot six-1"></div>
          <div class="dot six-2"></div>
          <div class="dot six-3"></div>
          <div class="dot six-4"></div>
          <div class="dot six-5"></div>
          <div class="dot six-6"></div>
        </div>
      </div>
      <div id='dice5' class="dice dice-five" onClick={()=>rolldie(4)}>
        <div id="dice-five-side-one" class='side one'>
          <div class="dot one-1"></div>
        </div>
        <div id="dice-five-side-two" class='side two'>
          <div class="dot two-1"></div>
          <div class="dot two-2"></div>
        </div>
        <div id="dice-five-side-three" class='side three'>
          <div class="dot three-1"></div>
          <div class="dot three-2"></div>
          <div class="dot three-3"></div>
        </div>
        <div id="dice-five-side-four" class='side four'>
          <div class="dot four-1"></div>
          <div class="dot four-2"></div>
          <div class="dot four-3"></div>
          <div class="dot four-4"></div>
        </div>
        <div id="dice-five-side-five" class='side five'>
          <div class="dot five-1"></div>
          <div class="dot five-2"></div>
          <div class="dot five-3"></div>
          <div class="dot five-4"></div>
          <div class="dot five-5"></div>
        </div>
        <div id="dice-five-side-six" class='side six'>
          <div class="dot six-1"></div>
          <div class="dot six-2"></div>
          <div class="dot six-3"></div>
          <div class="dot six-4"></div>
          <div class="dot six-5"></div>
          <div class="dot six-6"></div>
        </div>  

      </div>
      <div id='roll' class='roll-button'><button id="rollButton" onClick={()=>rolldice([true,true,true,true,true])}>Roll dice!</button></div>
      <div id='roll' class='roll-button'><button id="raiseButton" onClick={()=>rolldice([true,false,false,false,false])}>Raise</button></div>
      <div id='roll' class='roll-button'><button id="foldButton" onClick={()=>rolldice([true,false,false,false,false])}>Fold</button></div>

      <audio ref={audioRef} >
          <source src="/sound/dice.ogg" type="audio/ogg" />
          Your browser does not support the audio element.
        </audio>
   </div>

   
   )
}