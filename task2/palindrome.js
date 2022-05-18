function palindrome(string) {
    //process
    //---make reverse---
    let rev = string.split("").reverse().join("")

    //--is it palindrome?--
    if (string === rev) {
        return true
    }else{
        return false
    }

  }

  console.log(palindrome("civic"))       // true
  console.log(palindrome("katak"))       // true
  console.log(palindrome("kasur rusak")) // true
  console.log(palindrome("kupu-kupu"))   // false
  console.log(palindrome("lion"))        // false