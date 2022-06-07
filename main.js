const result= document.querySelector('#output');

const allcol= document.querySelectorAll('.butn');
let screenvalue='';

allcol.forEach( (temp) =>{
    temp.addEventListener('click', (e) => {
        console.log(e.target);
        let storeRes= e.target.innerText;
        console.log(storeRes);


        if(storeRes=== 'C'){
          screenvalue= '';
          result.value = screenvalue;
        }else if(storeRes=== '='){
          result.value= eval(screenvalue);
          screenvalue= result.value;
        }
        else{
          screenvalue +=storeRes;
          result.value = screenvalue;    
        }
    })
})