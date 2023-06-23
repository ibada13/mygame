import { useEffect } from "react";

import Game from "./game";
let Vag = () => {
  let butt = document.querySelectorAll('input') as NodeListOf<HTMLInputElement>
  let inp = document.querySelectorAll('button') as NodeListOf<HTMLButtonElement>
    
  let but = +butt[0].value;
  
  if (but < 90 && but >= 2) {
    inp[0].classList.remove('disabled');
  }
  else { 
    inp[0].classList.add('disabled');
  }
}
let Start = (props1: any) => { 
  let butt = document.querySelectorAll('input') as NodeListOf<HTMLInputElement>

  let bu = Math.round(Math.sqrt(+(butt[0].value))) ** 2
  const main:any = [];
  if (!props1.ta) { 
  const acc :any = []
  let sav = (we:number,he:number,op:number) => { 
    let i: number;
    var hey = [];
    let t = 0;
    for (i = 1; i <= bu; i++) {
      console.log(bu)
      hey.push(<button className="btn btn-outline-danger p-2 m-2 " style={{ width: `${we}px`, height: `${he}px` }} id={`h-${i}`} key={i}><span className="text-center7" style={{height:`${op}`}}>{i}</span></button>)
      t++
      if (t === Math.sqrt(bu)) {
        acc.push(<div className="row" key={i}>{hey}</div>)
        
        hey = []
        t= 0
      }
    }
    main.push(<div key='1' id="mc">{acc}</div>)
  }

  


  let di = document.getElementById('h0') as HTMLDivElement
  if (bu >= 64) {
    sav(30, 30, 26)
    di.style.height = "300%"
  }
  else if (bu >= 36) {
    sav(50, 50, 24)
    di.style.height = "200%";
  }
  else { 
    sav(64, 64, 32);
    
  }

}
useEffect(():void=> { 
  document.getElementById('mc')?.scrollIntoView();
  Game(bu)
}, [bu])
  return (
    <>{main}</>
)
      
   
  
}
export {Vag,Start}
