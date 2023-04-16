function func1()
{
    return new Promise(function(resolve, reject){
    setTimeout( () =>{
        const error=true;
        if(!error)
        {
            console.log("Your promise has been resolved")
            resolve();
        }
        else
        {
            console.log("Your promise has been not resolved")
            reject();
        }
    },2000);
})

}

func1().then(function(){
    console.log("Harry:Thanks for resolving")
}).catch(function(){
    console.log("Harry: Very bad bro")
})

