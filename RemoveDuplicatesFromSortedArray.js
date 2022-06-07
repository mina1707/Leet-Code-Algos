// We need to return the number of unique values in the array.

// Modify the array, and put the unique values at the beginning, it does not matter what comes out after that.
//For ex: We have this array --> [1,1,1,2,2,2,3,3,4,4,4,4], we can modify it like this -> [1,2,3,4,4,4]
//to solve this we need two different pointers, one at the first element and one at the second element.
//We need to compare the first two elements, and we ask : are they the same elements? If they are, we move to the next element, and if
// they are not the same, we replace the element after pointer one with the element at pointer two, and we advance one positions (the two pointers advance).
// The goal ir not to sort the array, is to put the unique elements in the front of the array.
//Now we do the count of the unique elements,  we take pointer one index and we add one, because the pointer one is at the last unique element.

// /**
//  * @param {number[]} nums
//  * @return {number}
//  */

let nums = [1, 1, 1, 2, 2, 3, 4, 5, 5, 5, 6]

function removeDuplicates(nums) {
    if (nums.lenght === 0) { //-> we check id the array is empty
        return 0;
    }
    // We create our first pointer. 
    let pointer1 = 0;
    //Now we create the four loop that compares the two wlements and always             increments pointer2.

    for (let pointer2 = 1; pointer2 < nums.length; pointer2++) {
        if (nums[pointer1] !== nums[pointer2]) { // we compare if pointer one and pointer two are not the same, if they are not,
            // we want to replace it.
            pointer1++;
            nums[pointer1] = nums[pointer2];
        }
    }
    return pointer1 + 1; //--> we retun the amount of unique values.
};

console.log(removeDuplicates(nums));
