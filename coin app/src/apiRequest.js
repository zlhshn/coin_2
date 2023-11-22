import {renderCoins} from "./renderData";


export const apiRequest = async (input)=>{

  
    const options = {
      headers: {
        "x-access-token": import.meta.env.VITE_API_KEY,
      },
    };
  
    const url = `https://api.coinranking.com/v2/coins?search=${input}`;

    try{

        const res = await fetch(url,options)
        const json = await res.json()
        
         if(json.data.coins.length === 0){

            alert('coin can not be found')
         }else{
            renderCoins(json.data.coins[0])

         }

      }catch (error){
          console.log(error);
      }
}

