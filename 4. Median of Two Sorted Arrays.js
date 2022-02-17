/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  const sortedArray = [...nums1, ...nums2].sort((a, b) => a - b)
  console.log(sortedArray)
  return sortedArray.length % 2 === 1 ? (sortedArray[Math.floor(sortedArray.length / 2)]) : ((sortedArray[sortedArray.length / 2] + sortedArray[sortedArray.length / 2 - 1]) / 2)
};

console.log(findMedianSortedArrays([3],[-2,-1]))