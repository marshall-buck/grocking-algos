"use strict";

function sum(nums) {
  if (nums.length === 1) {
    return nums[0];
  }

  return nums.pop() + sum(nums);
}

function numInList(list, count = 0) {

  if (list.length === 0) return count;
  else {
    count++;
    list.pop();
    return numInList(list, count);
  }

}

function findMax(list, max = -Infinity) {
  if (list.length === 0) return max;
  else {
    const num = list.pop();
    return findMax(list, num > max ? num : max);
  }
}


function binarySearch(list, val) {

  const mid = Math.floor(list.length / 2);

  if (val === list[mid]) return true;
  if (list.length === 1) return false;

  if (val < list[mid]) {
    return binarySearch(list.slice(0, mid), val);
  }
  return binarySearch(list.slice(mid), val);

}

function quickSort(list) {
  if (list.length <= 1) {
    return list;
  }
  else {
    const pivot = list[0];
    const less = [];
    const greater = [];
    for (let num of list.slice(1)) {
      if (num <= pivot) less.push(num);
      else greater.push(num);
    }
    return [...quickSort(less), pivot, ...quickSort(greater)];
  }


}

module.exports = { sum, numInList, findMax, binarySearch, quickSort };