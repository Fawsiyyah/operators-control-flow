//QUESTION 3
let dept = 'art';

if ( dept == 'science') {
    console.log ('Mathematics, English, Physics, Chemistry, Biology, Technical Drawing')
}
 else if ( dept == 'socSci') {
    console.log ('Mathematics, English, Accounting, Commerce, Marketing, Geography')
}
else if ( dept == 'art') {
    console.log ('Mathematics, English, Government, Economics, Literature, History')
} else {
    console.log ('Mathematics, English')
}

//Question 5
let arr = []
function getSquares(){
for (let i =2; i<2000; i *= 2){
    arr.push(i)
}
console.log(arr)
}
getSquares()