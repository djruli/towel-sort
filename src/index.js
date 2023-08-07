//function = () =>{






//}
// You should implement your task here.

module.exports = function towelSort (matrix) {
    
let result = [];
    for (let i in matrix) {
        if (Array.isArray(matrix[i])) {
            let alt = (matrix[i]);
            for (let j in alt){
                result.push(alt[j]);
            }
        } else {                
        result.push(matrix[i]);
        }

    }
console.log(result);



  return result;
}
