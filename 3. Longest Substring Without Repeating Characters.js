/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let lsub = ''
  let longestSub = ''
  s.split('').forEach(a => {
    if (!lsub.includes(a)) {
      lsub += a
    } else {
      lsub = lsub.substring(lsub.indexOf(a) + 1, lsub.length) + a
    }
    if (longestSub.length < lsub.length) {
      longestSub = lsub
    }
  })

  return longestSub
};