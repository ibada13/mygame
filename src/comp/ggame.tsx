import { useState } from "react";


let Ggame = () => {
    
    let i = 1
    let bu = document.querySelectorAll('button') as NodeListOf<HTMLButtonElement>
    
    document.getElementById('h1')?.classList.replace('border-danger','border-warning');
    
    bu.forEach(e => {
        
        if (e.value === '1') {
            
            e.classList.add('disabled');
            e.classList.replace('btn-outline-danger', 'btn-outline-success')
            bu.forEach(s => {
                if (s.value !== '1') {
                    s.innerHTML = ''
                }
            })
        }
        else {
            e.classList.replace('btn-outline-danger', 'btn-outline-warning')
            e.addEventListener('click', ev => {
                i++
                Cont(((ev.target) as HTMLButtonElement), i)
                
            })

        }
    })

      
   
}
   

let Cont = (any: HTMLButtonElement, any2: number) :null=>
{

    
any.classList.add('disabled')

    if (any.value === `${any2}`) {
        Suc(any)
    }
    else { 
        Los(any)
    }

    
    if ((document.querySelectorAll('button') as NodeListOf<HTMLButtonElement>).length=== any2) { 
        document.getElementById('h1')?.classList.replace('border-warning','border-success');


    }

return null

}
let Suc = (props:HTMLButtonElement):void => { 
    props.classList.replace('btn-outline-warning', 'btn-outline-success')
    props.innerHTML = props.value;
}
let Los = (props:HTMLButtonElement):void => { 
props.classList.replace('btn-outline-warning','btn-outline-danger')
    let bu = document.querySelectorAll('button') as NodeListOf<HTMLButtonElement>
    bu.forEach(e => { 
        e.innerHTML = e.value;
        e.classList.add('disabled')
    })
    document.getElementById('h1')?.classList.replace('border-warning','border-danger')

 }
export default Ggame