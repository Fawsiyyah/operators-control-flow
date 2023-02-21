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
// let arr = []
// let bingo = ``
// function getSquares(number){
// for (let i =2; i<20000; i *= 2){
//     arr.push(i)
// }
// let forwards = arr.filter(j => (j - number) < number)
// for (let k = 0; k < forwards.length; k++){
//     if (Math.abs(forwards[k] - number) <= Math.abs(forwards[k + 1] - number)) {
//         bingo = forwards[k]
//     }else if ((Maths.abs(forwards[k] - number) >= Math.abs(forwards[k+ 1] - number)) && forwards[k + 1] > number ){
//     bingo = forwards[k + 1]
//     }
// }console.log(`The number ${bingo} is the power of 2 nearest to ${number}`)
// }
// getSquares(30)

let num = 50;
for(let index =2; index < 20000; index = index**2) {
    pwr = index
} console.log("The number " + pwr + " is the power of 2 nearest to " + num);