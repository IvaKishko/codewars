/*Return the number (count) of vowels in the given string.
We will consider a, e, i, o, u as vowels for this Kata (but not y).
The input string will only consist of lower case letters and/or spaces. */

/*
should return 5 for 'abracadabra'
should return 4 for 'pear tree'
should return 13 for 'o a kak ushakov lil vo kashu kakao'
should return 0 for 'my pyx'
 */

function getCount(str) {
    let strToArr = str.toLowerCase().split('');
    let arrOfVowels = ['a','e','i','o','u'];
    let sum = 0
    
    for(let x = 0; x < strToArr.length; x++){
      if(arrOfVowels.includes(strToArr[x])){
                sum +=1;
         }
  }
    return sum
}