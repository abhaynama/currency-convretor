 let selecto = document.querySelectorAll(".selector");
 let flag1 = document.querySelector("#flag1") ;
 let flag2 = document.querySelector("#flag2");
 let curr1 ,curr2 ;
 let curro = document.querySelector("#currone");
 let currt = document.querySelector("#currtwo") ;
 let button = document.querySelector(".convert");
let a = document.body ;

    for(let y of selecto)
    {


        for(let codes in countryList)
                         {
         let x = document.createElement("option");
         y.append(x);
         x.innerText = codes ;
         x.value = codes;

                         } 
        
        



        y.addEventListener("change", (z) =>
          {
            let targetid = y.getAttribute("id");
            updateflag(z.target,targetid) ;
            updatecurr(targetid,y);
            getexhange1(curr1,curr2);
            getexhange2(curr1,curr2);
          
          
           });


    }



 
    const updateflag = (a,b) =>{
 
             sstr = `${a.value}` ;
             let s = sstr.slice(0,2);

        if(b=="selector1"){
           flag1.setAttribute("src",`https://flagsapi.com/${s}/flat/64.png`) ;
                           }
        else{
           flag2.setAttribute("src",`https://flagsapi.com/${s}/flat/64.png`) ;
            }

                            }


    const updatecurr = (p,q) =>{
               
               if(p=="selector1")
               {
                curr1=q.value;
                
               }
                 else
               {
                curr2=q.value ;
              
               }
                            }


   
   const getexhange1 = async(curr1,curr2) =>{

   let promise = await fetch(`https://v6.exchangerate-api.com/v6/9e83e428cb347ad89751ce4a/latest/${curr1}`);
   let data = await promise.json();
   let d = data.conversion_rates[curr2] ;
   currt.value = curro.value*d ;
   
   
                                
 }

 const getexhange2= async(curr1,curr2) =>{

  let promise = await fetch(`https://v6.exchangerate-api.com/v6/9e83e428cb347ad89751ce4a/latest/${curr2}`);
  let data = await promise.json();
  let d = data.conversion_rates[curr1] ;
  curro.value = currt.value*d ;
  
  
                               
}

curro.addEventListener("change" , () => {

    console.log("getting data.."); 
    getexhange1(curr1,curr2) ;
    
   
  
});

currt.addEventListener("change" , () => {

  console.log("getting data.."); 
  getexhange2(curr1,curr2) ;
  
 

});


 
 
 
 