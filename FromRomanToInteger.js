
let string= "XIX";

  function romanToInt(string) {
    let romanToInt ={
        I:1,
        V:5,
        X:10,
        L:50,
        C:100,
        D:500,
        M:1000  
    };
    let total = 0;
    
    for ( let i = 0; i< string.length; i++){
        let currentInt = romanToInt[string.charAt(i)];
        let nextInt = romanToInt[string.charAt(i+1)];
        
        if (nextInt){
            if(currentInt >=  nextInt){
                total+= currentInt;
            }else{
                total += (nextInt- currentInt);
                i++;
            }
        }else {
            total += currentInt;
        }  
    } return total;
};

console.log(romanToInt(string));

