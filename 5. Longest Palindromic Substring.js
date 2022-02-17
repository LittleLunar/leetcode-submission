/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {

  const isPalindrome = (s) => {
    const strlen = s.length
    const halfstrlen = Math.floor(strlen / 2)
    for (let i = 0; i < halfstrlen; i++) {
      if (s[i] !== s[strlen - i - 1])
        return false
    }

    return true


    
  }
  let longest = ''

  for (let len = 1; len <= s.length; len++){
    for (let i = 0; i + len <= s.length; i++) {

      const returner = s.substring(i, i + len)
      
      if (longest.length < returner.length) {
        
        if (isPalindrome(returner)) 
          longest = returner
      }
    }
  }  
  return longest
};

console.log(longestPalindrome("babad"));