// Given an array, return true if there are at least two values that repeated. Return false, if any number repeats. 

// Pseudocode:
// 1- Create memory 
// 2- We have to go through every single values and see if what I see now, is something I 've seen before. 
// 3- If my item is neveser seen before, put it in memory, If the number does exist in memory return True. 
//  

// /**
//  * @param {number[]} nums
//  * @return {boolean}
//  */

let nums = [1,1,4,3,6,8,7,5];

 function containsDuplicate(nums) {
    let memory ={};
    for ( let i=0; i<= nums.length; i++){
        if( memory[nums[i] === undefined]){
            
            memory[nums[i]]= "haha";
        }else {
            return true; 
        }

        return false;    
    }
        
 }
 console.log(containsDuplicate(nums));



// This is time complexity O(n) because we iterate through each value of the array once. 
// Space complexity because we have a hashmap.

//Now, if we do not want to sacrifice memory creating a hash table. We can sort the array, that way we compare each element to the next to check if there is a duplicate. 
// The big of for sorting algorithms are usually ( O NlogN) 

// let nums = [1,1,4,3,6,8,7,5];

// function containsDuplicate(nums) {
//     nums.sort((a,b) => {return b-a})
// }
// console.log(containsDuplicate(nums));
