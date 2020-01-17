# Big O Notation
There's some math in this section: Don't worry, we'll survive!

## Timing Our Code
There are always more than one possible solution to any problem. 
JS File for this section is dealing with adding numbers from 1 to (and including) n.
Which of the code solutions is better?
What does better mean?
  * Faster?
  * Less memory-intensive?
  * More readable?

Speed and memory consumption are often considered as more important than code readability so these are the ones we will focus on in this section.
How to measure code speed? We could use built in timing methods: 

```
let t1 = performance.now()
addUpTo(1000000000)
let t2 = performance.now()
console.log(`Time Elapsed: ${(t2 - t1) / 1000 } seconds`)
```

performance.now() is a built-in method and can be used in browser, but if you are running code in console with nodejs, this method will not work if nodejs version is below 13.
If this is your case, create "performance" variable from "perf_hooks" module and use it that way.

This is one way of measuring code speed, but how to add a label to a snip of code? How to determine which snippet is more efficient?

### The Problem with Time
* Different Machines will record different times
* The Same Machine will record different times
* For fast algorithms, speed measurements may not be precise enough

## Counting Operations
Because measuring time has many variable problems, we can instead count the number of simple operations the computer has to perform. 
Number of these operations is constant, no matter on what computer we are testing the code.

If we take a look at function addUpTo2(n) in index.js file, we can see that it does multiple simple operations.
It runs total of 3 simple operations: multiplication, addition, division. No matter what number is n, it is always 3 operations.

Function addUpTo(n) uses a for loop, so if n = 1000000, then computer runs 1000000+ addition operations. Actualy it runs even more operations because of += operator.

Depending on what we count, the number of operations can be as low as 2n or as high as 5n + 2.

Regardless of the exact number, the number of operations grows roughly proportionaly with n.


## Visualizing Time Complexities

https://rithmschool.github.io/function-timer-demo/

## Official Intro to Big O
Big O Notation is a way to formalize fuzzy counting. It allows us to talk formally about how the runtime of an algorithm grows as the inputs grow.
It's a way of describing a relationship between the input to a function as it grows, and how that changes the runtime of that function.

When we're talking about the Big O, we're basically talking about a worst case scenario. This is about the upper bound for runtime.

We say that the algorithm is O(f(n)) if the number of simple operations the computer has to do is eventually less than a constant times f(n), as n increases.

* f(n) could be linear: f(n) = n
* f(n) could be quadratic: f(n) = n * n
* f(n) could be constant: f(n) = 1
* f(n) could be something entirely different!

### Big O Shorthands

1. Arithmetic operations are constant
2. Variable assignment is constant
3. Accessing elements in an array (by index) or object (by key) is constant
4. In a loop, the complexity is the length of the loop times the complexity of whatever happens inside of the loop.

## Simplifying Big O Expressions


## Space Complexity
So far, we've been focusing on time complexity: 
How can we analyze the runtime of an algorithm as the size of the inputs increases.

We can also use big O notation to analyze space complexity: 
How much additional memory do we need to allocate in order to run the code in our algorithm.

### Space Complexity in JS
* Most primitives (booleans, numbers, undefined, null) are a constant space
* Strings require O(n) space (where n is the string length)
* Reference types are generally O(n), where n is the length(for arrays) or the number of keys(for objects)

## Logs and Section Recap
### Logarithms
We've encountered some of the most common complexities: 0(1), O(n), O(n * n) 

Sometimes big O expressions involve more complex mathematical expressions.

One that appears more often than you might like is the algorithm.

### What is log?
As multiplication and division are a pair, also logarithms and exponenciations are a pair

The logarithm of a number roughly measures the number of times you can divide that number by 2 before you get a value that's less than or equal to one.

### Logarithm examples

log(8) = ?
8 / 2 = 4 / 2 = 2 / 2 = 1

In this example we divided numbers 3 times. So: 
log(8) = 3

log(25) = ?
25 / 2 = 12.5 / 2 = 6.25 / 2 = 3.125 / 2 = 1.5625 / 2 = 0.78125

log(25) = 4.64

### Who cares?

* Certain searching algorithms have logarithmic time complexity.
* Efficient sorting algorithms involve logarithms.
* Recursion sometimes involves logarithmic space complexity.

### Recap

* To analyze the performance of an algorithm, we use big O Notation.
* Big O Notation can give us a high level understanding of the time or space complexity of an algorithm
* Big O Notation doesn't care about precision, only about general trends (linear?, quadratic?, constant?)
* The time or space complexity (as measured by the Big O) depends only on the algorithm, not the hardware used to run this algorithm
* Big O Notation is everywhere, so we need to get a lot of practice