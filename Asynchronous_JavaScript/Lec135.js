// function returning promise

function ricePromise(){
    const bucket = ['coffee','chips','vegetables','salts','rice'];
    return new Promise((resolve, reject)=>{
      if(bucket.includes("vegetable")&& bucket.includes("salt") && bucket.includes("rice")){
          resolve({value:"friendrice"});
      } else {
        reject("could not do it");
      }
    })
  }


  ricePromise().then(
    // jab promise resolve hoga
    (myfriedRice)=>{
    console.log("let eat", myfriedRice);
    }
  ).catch(
    (error)=>{
       console.log(error)
    })