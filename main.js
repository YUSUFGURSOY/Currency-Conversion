//elementleri seçme 
const inputA=document.querySelector("#amount");
const select1=document.querySelector("#firstCurrencyOption");
const select2=document.querySelector("#SecondCurrencyOption");
const inputB=document.querySelector("#result");
const rightFlag=document.querySelector(".right-flag");
const leftFlag=document.querySelector(".left-flag");




function runEventListener(){
     inputA.addEventListener("input",exchange);
     select1.addEventListener("change",exchange);
     select2.addEventListener("change",exchange);
}

const flag =new Flag();
const currency=new Currency();

function exchange(){
    const amount=Number(inputA.value.trim());
    const slct1=select1.value;
    const slct2=select2.value;

    
    
    currency.exchange(amount,slct1,slct2)
    .then((res)=>{
          inputB.value=res.toFixed(3);
    })
 
  
    flag.exchange(slct1)
    .then((res)=>{
        const photoUrl=res.results[0]?.urls?.small
        leftFlag.src = photoUrl;
    })

      flag.exchange(slct2)
    .then((res)=>{
        const photoUrl=res.results[0]?.urls?.small
        rightFlag.src = photoUrl;
    })

}

runEventListener();

