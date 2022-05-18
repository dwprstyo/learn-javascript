function primeNumber(number) {
    //process
    if (number <= 1) {
        return false;
    }else if (number === 2){
        return true;
    }else{
        for (let i = 2; i < number; i++) {
            if (number % i === 0) {
                return false;
            }
        }return true;
    }
}

  console.log(primeNumber(3)) // true
  console.log(primeNumber(13)) // true
  console.log(primeNumber(17)) // true
  console.log(primeNumber(20)) // false
  console.log(primeNumber(35)) // false