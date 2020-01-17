// Write a function called "same", which accepts two arrays.
// The function should return true if every value in the array has it's corresponding value squared in the second array.
// The frequency of values must be the same.

function same_naive(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false
  } 
  for (let i = 0; i < arr1.length; i++) {
    let correctIndex = arr2.indexOf(arr1[i] ** 2)
    if(correctIndex === -1) {
      return false
    }

    arr2.splice(correctIndex, 1)
  }
  return true
} // Complexity of this approach is O(N^2)

function same_refactored (arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false
  }
  let frequencyCounter1 = {}
  let frequencyCounter2 = {}

  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
  }

  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
  }

  for (let key in frequencyCounter1) {
    if(!(key ** 2 in frequencyCounter2)) {
      return false
    }
    if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false
    }
  }
  return true
} // Complexity of this approach is O(N)

// EXERCISE !!!!
// Given two strings, write a function to determine if the second string is an anagram of the first.
// An anagram is a word, phrase, or name formed by rearranging the letters od another, such as cinema, formed from iceman.

// 5 questions
// 1. Make a function that checks if two given strings have same number of characters and same frequency of character occurrences
// 2. Inputs that go into the problems are only strings
// 3. Output will always be a boolean
// 4. I do have enough information to solve the problem
// 5. No data labeling, only boolean output 
function validAnagram_klop(str1, str2) {
  // verify that input strings have same number of characters
  if(str1.trim().length !== str2.trim().length) {
    return false
  }
  // define frequency counters for each given string
  let freqCounter1 = {}
  let freqCounter2 = {}
  for (let char of str1.split('')) {
    freqCounter1[char] = (freqCounter1[char] || 0) + 1
  }

  for (let char of str2.split('')) {
    freqCounter2[char] = (freqCounter2[char] || 0) + 1
  }

  console.log(freqCounter1)
  console.log(freqCounter2)
  // if one of the counters contains chars that the other conter does not contain, return false
  for (let key in freqCounter1) {
    if(!(key in freqCounter2)) {
      return false
    }
  }

  for (let key in freqCounter2) {
    if(!(key in freqCounter1)) {
      return false
    }
  }
  // If code runs to the end, return true
  return true
}

function validAnagram(first, second) {
  if(first.length !== second.length) {
    return false
  } 

  const lookup = {}

  for (let letter of first.split('')) {
    lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1
  }

  for (let letter of second.split('')) {
    if(!lookup[letter]) {
      return false
    } else {
      lookup[letter] -= 1
    }
  }
  return true
} 

console.log(validAnagram('', ''))
console.log(validAnagram('aaz', 'zza'))
console.log(validAnagram('anagram', 'nagaram'))
console.log(validAnagram('rat', 'car'))
console.log(validAnagram('awesome', 'awesom'))
console.log(validAnagram('qwerty', 'qeywrt'))
console.log(validAnagram('texttwisttime', 'timetwisttext'))