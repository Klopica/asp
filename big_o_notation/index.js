const { performance } = require('perf_hooks')

// Write a function that calculates the sum of all numbers from 1 up to (and including) some number n.

// Solution 1.
function addUpTo(n) {
  let total = 0
  for (let i = 0; i <= n; i++) {
    total += i
  }
  return total
}

let t1 = performance.now()
addUpTo(1000000000)
let t2 = performance.now()
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds`)

// Solution 2
function addUpTo2(n) {
  return n * (n + 1) / 2
}

let t3 = performance.now()
addUpTo2(1000000000)
let t4 = performance.now()
console.log(`Time Elapsed: ${(t4 - t3) / 1000} seconds`)
