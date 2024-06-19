let div=document.getElementById('results');

//this section is to simply the process of creating 100(s) even 1000(s) of spans without repeatition. The looping magic.
let count='';
for(let i=1; i<=200; i++){
       count+=`<span data-divisor=${i}>${i}</span>`
     }
div.innerHTML=count;


//this marks the beginning of the logic behind functionality 
let input=document.querySelector('input');
let spans=document.querySelectorAll('span');

//logic 
input.addEventListener('input',(event)=>{
  const dividend=parseInt(event.target.value);
  
  //this is to check if user input is integer or not 
  if(isNaN(dividend)){
    //if not, we have to terminate this input 
    spans.forEach((span)=>{
      span.classList.remove('true');
    })
    //stop 
    return 
  }
  //loop through all spans to check if divisible 
  spans.forEach((span)=>{
    //lets get the divisor value form "data-divisor" in the span tags
    const divisor=span.dataset.divisor;
    
    if(dividend % divisor === 0){
      span.classList.add('true');
    }else{
      span.classList.remove('true')
    }
  })
})
//all credit for the logical par and css of this document goes to code `@codetheworld.io`
