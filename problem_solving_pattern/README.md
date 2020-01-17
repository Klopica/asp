# Problem solving Patterns
## PREREQUISITS
It is strongly recomended to first complete section 1: 
1. Big O Notation before working through this section.
2. Problem solving approach

## Frequency Counter Pattern

This pattern uses objects or sets to collect values/frequencies of values.

This can oftern avoid the need for nested loops or O(N^2) operations with arrays / strings

### EXAMPLE
Write a function called "same", which accepts two arrays.
The function should return true if every value in the array has it's corresponding value squared in the second array.
The frequency of values must be the same.

```
same([1, 2, 3], [4, 1, 9]) // true
same([1, 2, 3], [1, 9]) // false
same([1, 2, 1], [4, 4, 1]) // false (must be same frequency)
```

### ANAGRAMS
Given two strings, write a function to determine if the second string is an anagram of the first.
An anagram is a word, phrase, or name formed by rearranging the letters od another, such as cinema, formed from iceman.
```
validAnagram('', '') // true
validAnagram('aaz', 'zza') // false
validAnagram('anagram', 'nagaram') // true
validAnagram('rat', 'car') // false
validAnagram('awesome', 'awesom') // false
validAnagram('qwerty', 'qeywrt') // true
validAnagram('texttwisttime', 'timetwisttext') // true
```

There are some solutions to anagrams in index.js. Make sure to check them out.

## Frequency Counter: Anagram Challenge


## Anagram Challenge Soluttion


## Multiple Pointers Pattern


## Multiple Pointers: Count Unique Values Challenge


## Sliding Window Pattern


## Divide and Conquer Pattern