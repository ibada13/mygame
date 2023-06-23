import Ggame from "./ggame";
let Game = (butt:number):void => {
    let bu = document.querySelectorAll('button');

    let mat :any=[]

    let j: number;
    let k: number;
    let b :boolean 
    
    
        let  o :number = 0
        while ( o !== butt) { 
            b= false
            k = Math.round(Math.random() * (butt-1) + 1)
        for (j = 0; j < mat.length; j++) { 
            if (mat[j] === k) { 
                b=!b
            }
            }
            if (!b) {
                mat.push(k)
                if (k === 1) { 
                    bu[o].onclick = Ggame
                }
                bu[o].innerHTML =`${k}`
                bu[o].value=`${k}`
                    o++
               

            }
        }
    


    

 }
export default Game