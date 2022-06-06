// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].


// Example 2:
// Input: nums = [3,2,4], target = 6
// Output: [1,2]


// For this, the solution will be to grapb the first index value and iterate through the rest indexes(right) and find a value that 
// when adds to the initial value, it will be equal to the target and return the indexes of thsoe values. 

// We do not needd to check the values before the index we are evaluating because we already checked that combination. 

// In this worst case time complexity will be O(n^2) because we will be using two four loops and it is not the most efficient way to solve this.

//For the solution we are going to be using a hashmap, it is the most efficient solution because the time complecity will be O(n).



/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

//Hashmap 
// nums= [1, 5, 9]
// target = 10 

// map= {1:0, 5:1,   }

//Iterating
// value = 1
// i = 0
// complement pair=  10 - 1 = 9 --> we check if this value is in our hashmap 

// 1 is already in our map, we return the indexes. 
//return [0,2]
let nums=  [4, 3, 7, 2];
let target = 6;

 function TwoSum(nums, target) {
    var map = {}
    for ( var i=0; i<nums.length; i++){
        var value = nums[i];
        var complement_pair = target - value;
        if(map[complement_pair] !== undefined){
            return[map[complement_pair], i] // win
        }else {
            map[value] = i
        }
    }
    
};

console.log(TwoSum(nums, target));
