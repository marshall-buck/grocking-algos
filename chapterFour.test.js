"use strict";

const { sum, numInList, findMax, binarySearch, quickSort } = require('./chapterFour');




describe("cpt 2", () => {

  it("sums", () => {
    expect(sum([1, 2, 3])).toEqual(6);
    expect(sum([3, 2])).toEqual(5);
    expect(sum([-1, 2, 10])).toEqual(11);
    expect(sum([0])).toEqual(0);
    expect(sum([0])).not.toEqual(10);
  });

  it("counts", () => {
    expect(numInList([1, 2, 3])).toEqual(3);
    expect(numInList([3, 2])).toEqual(2);

    expect(numInList([0])).toEqual(1);
    expect(numInList([])).toEqual(0);
  });

  it("findMax", () => {
    expect(findMax([1, 2, 3])).toEqual(3);
    expect(findMax([3, 2])).toEqual(3);

    expect(findMax([0, 9])).toEqual(9);
    expect(findMax([100, -100])).toEqual(100);
  });

  it("binarySearch", () => {
    expect(binarySearch([1, 2, 3, 4], 4)).toBeTruthy();
    expect(binarySearch([1, 2, 3, 4, 5], 1)).toBeTruthy();
    expect(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 10)).toBeFalsy();
    expect(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], -10)).toBeFalsy();
  });


  it("quickSort", () => {
    expect(quickSort([1, 20, 5, 4])).toEqual([1, 4, 5, 20]);

  });
});