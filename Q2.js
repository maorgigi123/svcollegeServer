const calcNumber = (num) => {
    let ans = {}
    for(let i=0; i<num.length; i++) {
        
        ans[num[i].toString().length] != null ? ans[num[i].toString().length]  += num[i] : ans[num[i].toString().length]  = num[i] 
    }

    console.log('ans', ans)
}


calcNumber([1,15,30,5,800])