// ==============================================================================
// Write a function which takes two numbers and returns their sum
// ==============================================================================

// 1. Can I restate the problem in my own words ?
"implement addition of numbers"
// 2. What are the inputs that go into the problem ?
  // - integers?
  // - floats?
  // - what about string for large numbrs?
// 3. What are the outputs that should come from the solution to the problem ?
  // - int? float? string?
// 4. Can the outputs be determined from the inputs ? In other words, do I have enough information to solve the problem ? (You may not be able to answer this question until you set about solving the problem.That's ok, it's still worth considering the question at this early stage)

// 5. How should I label the important pieces of data that are a part of the problem ?




// ============================================================================================
// Write a function which takes in a string and returns counts of each character in the string
// ============================================================================================

// 1. Write out function calls to visualize examples
chraCount('aaaa') // { a: 4 }
chraCount('hello') // { h: 1, e: 1, l: 2, o: 1 }
chraCount('Klopica') // { K: 1, l: 1, o: 1, p: 1, i: 1, c: 1, a: 1 }
chraCount('aaaaabb') // { a: 5, b: 2 }

function chraCount(str) {
  // do something

  // return an object with keys that are lowercase alphanumeric characters in the string; 
}

function chraCount(str) {
  // make object to return at end
  // loop over string, for each character...
    // if the char is number/letter AND is a key in object, add one to count
    // if the char is number/letter AND is not in object, add it to object and set value to 1
  // return object at end
}

function chraCount(str) {
  // make object to return at end
  let result = {}
  // loop over string, for each character...
  for (let i = 0; i < str.length; i++) {
    
    let char = str[i].toLowerCase()
    if(result[char] > 0) {
      // if the char is number/letter AND is a key in object, add one to count
      result[char] ++
    } else {
      // if the char is number/letter AND is not in object, add it to object and set value to 1
      result[char] = 1
    }
  }
  // If character is something else (space, period, etc.) don't do anything

  // return object at end
  return result
}

// Simplified version of charCount
function charCount(str) {
  let obj = {}
  for(let i = 0; i < str.length; i++) {
    let char = str[i].toLowerCase()
    if (/[a-z0-9]/.test(char)) {
      if(obj[char] > 0) {
        obj[char]++
      } else {
        obj[char] = 1
      }
    }
  }
  return obj
}

// Refactored version of charCount
function charCount(str) {
  let obj = {}
  for (let char of str) {
    if(isAlphaNumberic(char)) {
      char = char.toLowerCase()
      obj[char] = ++obj[char] || 1
    }
  }
  return obj
}

function isAlphaNumberic(char) {
  let code = char.charCodeAt(0)
  if (!(code > 47 && code < 58) && !(code > 64 && code < 91) && !(code > 96 && code < 123)) {
    return false
  }
  return true
}