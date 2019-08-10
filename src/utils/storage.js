export function getFromStorage(key) {
   if (!key){
      return null;
   }

   try{
      const valueStr = localStorage.getItem(key);
      if(valueStr){
         return JSON.parse(valueStr);
      }else {
         return null;
      }
   }catch (e) {
      return null
   }
}

export function setInStorage (key, obj) {
   if(!key){
      console.log("Error: key is meiising")
   }
   try{
      localStorage.setItem(key, JSON.stringify(obj));
   }catch (e) {
      console.log("Error: caought this error " + e);
   }
}