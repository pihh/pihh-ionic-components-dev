export const wait = function(ms:number = 0){
  return new Promise((resolve) =>{
    setTimeout(resolve,ms);
  })
}
