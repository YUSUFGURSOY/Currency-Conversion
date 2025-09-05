class Currency{
   constructor(){
    this.url="https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_8iRGtxlSydwxqQ2N3Wy3PqUT2Wzd7iHzKZXfhpCV&base_currency="
   }



   

   async exchange(amount,firstCurrency,secondCurrency){
           
          const response= await fetch(`${this.url}${firstCurrency}`);

          const resault =await response.json();
          const exchangeResault=resault.data[secondCurrency]*amount;
          return exchangeResault;
          
          

    }
}




