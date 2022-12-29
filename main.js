//2Q
let z=((x,y)=>{
    result=x*y;
    return result;
   })
   let result1=z(10,5);
   console.log(result1)
   //3Q
   function print(){
    setTimeout(()=>{
        console.log("pavan1")
        setTimeout(()=>{
            console.log("nithin")
            setTimeout(()=>{
                console.log("prakash")
                setTimeout(()=>{
                    console.log("bhanu")
                },1000)
            },2000)
        },3000)
    },4000)
   }
   print();
//6Q
setTimeout(() => {
    console.log("pavan timeout")   
   }, 6000)

   