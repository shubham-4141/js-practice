// genrate random color 

const randomColor = function(){
    const hex = "0123456789ABCDEF";
    let color = '#';
    for( let i = 0; i<6;i++){
      color += hex[Math.floor(Math.random() * 16)]
    }
    return color;
  
  }
  // console.log(randomColor());
  let intervalId;
  const startChaningColor = function(){
    if(!intervalId/*intervalId == null */){
      intervalId = setInterval(changeBgcolor,100)
    }
    
    function changeBgcolor(){
      document.body.style.backgroundColor = randomColor();
   
    }
     
  }
  const stopChaningColor = function(){
      clearInterval(intervalId);
      intervalId = null;
  };
  document.querySelector('#start').addEventListener('click',startChaningColor)
  
  document.querySelector('#stop').addEventListener('click',stopChaningColor)
  