
function monthlySaving(ar,n){
    if(!Array.isArray(ar) && typeof n!=="number"){
        console.log("invalid input");
    }
let m=0;
    for(let i of ar){
        if(i>=3000){
            m+=i-((i*20)/100);
        }
        else m+=i;
    }
    m-=n;
    if(m>=0) console.log(m);
    else console.log("earn more");
}

let arr=[500,900,1000,1500];
monthlySaving(arr,6000);