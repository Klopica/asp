# Analyzing Performance of Arrays and Objects
## PREREQUISITS
It is strongly recomended to first complete section 1: Big O Notation before working through this section.

## OBJECTIVES
* Understand how objects and arrays work
* Explain why adding elements to the beginning of an array is costly
* Compare and contrast the runtime for arrays and objects, as well as built in methods


## The Big O of objects
### When to use objects
* When you don't need order
* When you need fast access / insertion and removal

* Insertion - O(1)
* Removal - O(1)
* Searching - O(n)
* Access - O(1)

## When are arrays slow?
Arrays are ordered lists. We use them when we need order.

Insertion - It depends... on where are we are inserting (beginngin or end of array)
Removal - It depends...
Searching - O(n)
Access - 0(1)

## Big O of Array methods

* .push() - O(1)
* .pop() - O(1)
* .shift() - O(n)
* .unshift() - O(n)
* .concat() - O(n)
* .split() - O(n)
* .splice() - O(n)
* .sort() - O(n * log n)
* forEach/map/filter/reduce/etc.. O(n)