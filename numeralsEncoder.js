function solution(number){
    var map = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1},
         output = '';
   
     for (var i in map ) {
       while ( number >= map[i] ) {
         output += i;
         number -= map[i];
       }
     }
     return output;
   }

const romanNumeralsEncoder = (number) => {
    const romanSymbols = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1}
    result = ""
    for(let{value, symbol} of romanSymbols ) {
        while(number >= value) {
            result += symbol
            number -= value
        }
    }
    return result;
}