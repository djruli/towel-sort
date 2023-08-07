//function = () =>{






//}
// You should implement your task here.

module.exports = function towelSort (matrix) {
    console.log('start arr ' + matrix);
    let counter = 1;
    let result = [];
    let alt = [];

    for (let i in matrix) {
        if (Array.isArray(matrix[i]) && counter % 2 !== 0) {
            alt = (matrix[i]);
            counter++;
        } else if (Array.isArray(matrix[i]) && counter % 2 === 0) {
            alt = (matrix[i]).reverse();
            counter++;
        }
            console.log('alt ' + alt);
            
            for (let j in alt){
                result.push(alt[j]);
            }
        /*if (Array.isArray(matrix[i]) !== true) {
            result.push(matrix[i]);
        } */            

        

    }
console.log(result);



  return result;
}
