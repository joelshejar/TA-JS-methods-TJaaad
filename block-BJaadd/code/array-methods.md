Watch this video to understand what to do in this exercise block [link](https://www.youtube.com/watch?v=zGpplZj4zY0&feature=youtu.be)

## Getting To Know Array Methods

Go to this [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) and look for the name of method to learn about it.

**Write in your own way of understanding (don't copy paste)**

Only if you are done with step 1 you should go ahead.

1. Practice it by yourself in console (2-3 times to understand)
2. Data types of parameters
3. Return value type
4. Write three examples
5. In your words what this method does.
6. Does it mutate the original value or not (check https://doesitmutate.xyz)

Example:

1. `concat`

   - Parameter: n (any) number of values (number, string, boolean, array, null, undefined, object and function etc)
   - Return: a single Array consisting of by all the values passed as parameters in the same order.
   - Example:
     ```js
     let numbers = [1, 2, 3];
     numbers.concat(4); //[1,2,3,4]
     let sentanceArray = 'A quick brown fox jumped over a lazy'.split(' ');
     sentanceArray.concat('dog').join(' '); //"A quick brown fox jumped over a lazy dog"
     let colors = ['red', 'green', 'blue'];
     colors.concat('black', 'red', 21, true); // ['red','green','blue','black', 'red', 21, true]
     ```
   - `concat` accepts n number of values and returns one array with all the values in same order. It does not change the original array.
   - No it does not mutate the original array

2. `join`
3. `flat`
    - Parameter: it accepts an optional value of how deep a nested array should be flattened and the default value is 
   - Return: a single Array consisting of all the values present inside the subarray but without any subarrays
   - Example:
     ```js
     let numbers = [1, 2, [3, 4]];
     numbers.flat(4); //[1,2,3,4]
     let numbers = [1, 2, [3, 4,[5, 6]]];
     numbers.flat(); //[1, 2, 3, 4,[5, 6]]
     let numbers = [1, 2, [3, 4,[5, 6]]];
     numbers.flat(4); //[1, 2, 3, 4, 5, 6]
     ```
   - `flat` accept numbers and converts arrays which consists of sub arrays into normal arrays
   - No it does not mutate the original array
4. `push`
    - Parameter: here we add the elements to be added to the end of the array
   - Return:  Array consisting of all the values which we wanted to append to the original array
   - Example:
     ```js
     let numbers = [1, 2, 3, 4];
     numbers.push(4); //5
     let colors = ['red', 'green', 'blue'];
     colors.push(`white`); //4
     let colors = ['red', 'green', 'blue', 'red'];
     colors.push(`white`); //5
     ```
   - `push` accept numbers and converts arrays which consists of sub arrays into normal arrays
   - It mutates the original array
5. `indexOf`
    - Parameter: We input the element that we want to search for in the array
   - Return:  It returns the index at which the element is present in the array and if the element is not present it returns -1
   - Example:
     ```js
     let numbers = [1, 2, 3, 4];
     numbers.indexOf(2); //1
     let colors = ['red', 'green', 'blue'];
     colors.indexOf('gold'); //-1
     let colors = ['white', 'red', 'green', 'blue'];
     colors.indexOf("green"); //5
     ```
    `indexOf` searches if the element given in the parameter is present in the array, if it's present then it returns the index of the first element , if the element is present more than once
    - It does not mutate the original array
6. `lastIndexOf`
    - Parameter: We input the element that we want to search for in the array
   - Return:  It returns the index at which the element is present in the array(If the element is present more than once then it returns the last element) and if the element is not present it returns -1
   - Example:
     ```js
     let numbers = [1, 2, 3, 4, 2];
     numbers.lastIndexOf(2); //4
     let colors = ['red', 'green', 'blue'];
     colors.lastIndexOf('gold'); //-1
     var numbers = [2, 5, 9, 2];
     numbers.lastIndexOf(2, -2); // 0
     ```
    `lastIndexOf` searches if the element given in the parameter is present in the array, if it's present then it returns the index of the last element if that element is present more than once 
    - It does not mutate the original array
7. `includes`
    - Parameter: We input the element that we want to search for in the array
   - Return:  If the element is present in the array then it returns true and if it's not present in the array then it returns false
   - Example:
     ```js
     let numbers = [1, 2, 3, 4, 2];
     numbers.includes(2); //true
     let colors = ['red', 'green', 'blue'];
     colors.includes('gold'); //false
     var numbers = [2, 5, 9, 2];
     numbers.includes(2); // 0
     ```
    `includes` searches if the element given in the parameter is present in the array, if it's present then it returns the index of the last element if that element is present more than once 
    - It does not mutate the original array
8. `reverse`
    - Parameter: no inputs
   - Return:  It returns the reversed array 
   - Example:
     ```js
     let numbers = [1, 2, 3, 4, 2];
     numbers.reverse(); //[2, 4, 3, 2, 1]
     let colors = ['red', 'green', 'blue'];
     colors.reverse(); //['blue', 'green', 'red']
     var numbers = [2, 5, 9, 2];
     numbers.reverse(); // [2, 9, 5, 2]
     ```
    `reverse` reverses the whole aray in the sense that the first array becomes the last array and the last array becomes the first
    - It mutates the original array
9. `every`
10. `shift`
    - Parameter: Its empty
   - Return:  It returns the element that has been popped out of the array it pops from the beginning of the array
   - Example:
     ```js
     let numbers = [1, 2, 3, 4];
     numbers.shift(); //1
     let colors = ['red', 'green', 'blue'];
     colors.shift(); //red
     let colors = ['white', 'red', 'green', 'blue'];
     colors.shift(); //white
     ```
   - `shift` just removes the first element from the array and returns it
   - It mutates the original array
11. `splice`
    - Parameter: There is one parameter which is compulsory and two other parameters which are optional the compulsory parameter indicates the index from which the splicing should take place, then there is an optional parameter which indicates the number of elements to be deleted from the index, the other optional parameter can be used to add elements into the array with the specified index
   - Return:  It returns the elements that have been deleted from the array in an array
   - Example:
     ```js
     let numbers = [1, 2, 3, 4];
     numbers.splice(1); //[1]
     let colors = ['red', 'green', 'blue'];
     colors.splice(1, 1); //['red', 'blue']
     let colors = ['white', 'red', 'green', 'blue'];
     colors.splice(1, 1, "black"); //['white', 'black', 'green', 'blue']
     ```
   - `splice` just removees the specified number of elements to be removed from the specified index and can also be used to add elements at the specified index
   - It mutates the original array
12. `find`
13. `unshift`
    - Parameter: It consists of the elements that we want to add to the array
   - Return:  It returns the length of the array that has been formed after adding the elements by using the unshift method
   - Example:
     ```js
     let numbers = [1, 2, 3, 4];
     numbers.unshift(6,7); //1
     let colors = ['red', 'green', 'blue'];
     colors.unshift('gold'); //4
     let colors = ['white', 'red', 'green', 'blue'];
     colors.unshift(4); //5
     ```
    `unshift` accepts elements to be added to the array as parameters, It adds the elements to the beginning of the array and thus it mutates the array
    - It mutates the original array
14. `findIndex`
15. `filter`
16. `flat`
17. `forEach`
    - Parameter: It can  have a callback function and the current element being processed in the array
   - Return:  It returns undefined
   - Example:
     ```js
     const array1 = ['a', 'b', 'c'];
     array1.forEach(element => console.log(element));//"a""b""c"
     let colors = ['red', 'green', 'blue'];
     colors.forEach(element => console.log(element));//'red''green''blue'
     let colors = [];
     colors.pop(); //undefined
     ```
   - `forEach` can be used to iterate through the array and it accepts a callback function
   - No it does not mutate the array
18. `map`
    - Parameter: There is a call back function and then it executes the current element being processed in the array
   - Return:  It returns the new array that has all the elements which have been executed through the call back function
   - Example:
     ```js
     let numbers = [1, 2, 3, 4];
     numbers.pop(); //4
     let colors = ['red', 'green', 'blue'];
     colors.pop(); //blue
     let colors = [];
     colors.pop(); //undefined
     ```
   - `pop` just removes the last element from the array and returns it
   - It mutates the original array
19. `pop`
    - Parameter: Its empty
   - Return:  It returns the element that has been popped out of the array, it returns undefined if the array is empty
   - Example:
     ```js
     let numbers = [1, 2, 3, 4];
     numbers.pop(); //4
     let colors = ['red', 'green', 'blue'];
     colors.pop(); //blue
     let colors = [];
     colors.pop(); //undefined
     ```
   - `pop` just removes the last element from the array and returns it
   - It mutates the original array
20. `reduce`
21. `slice`
    - Parameter: There are two optional parameters one is the start and the other one is the end index which states upto which index the elements of the array must be extracted. 
   - Return:  It returns the elements that have been extracted from the original array in a new array
   - Example:
     ```js
     let numbers = [1, 2, 3, 4];
     numbers.slice(1); //[2, 3, 4]
     let colors = ['red', 'green', 'blue'];
     colors.slice(1, 1); //[]
     let colors = ['white', 'red', 'green', 'blue'];
     colors.slice(1, 3); //['red', 'green']
     ```
   - `slice` just removees the specified number of elements to be removed from the specified index and can also be used to add elements at the specified index
   - It mutates the original array
22. `some`
