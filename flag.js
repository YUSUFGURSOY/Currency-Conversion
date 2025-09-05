class Flag{
 constructor(){
    this.accesKey="CC69RRoPgg0JTIJpHpeIfG9YKW_0XisLdjweS5JycJw"

 }

  async exchange(CurrencyCode){
    const response =await fetch(`https://api.unsplash.com/search/photos?query=${CurrencyCode}" flag"&per_page=1&client_id=${this.accesKey}`)

    const resault =await response.json();
    return resault
   
  }

}



 








