function func(){
  let counter = 0;
  return function(){
    if(counter < 1){
        console.log("Hi You Called me");
        counter++;
    }else{
      console.log("Mai already ek bar call hp chuka hoon!");
    }
  }
}

const myFunc = func();
myFunc();
myFunc();