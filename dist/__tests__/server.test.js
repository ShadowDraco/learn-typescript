"use strict";
const { describe, expect, test } = require("@jest/globals");
const LinkedList = require("../src/classes/LinkedList");
describe("List", () => {
  test("proper creation and insertion", () => {
    const list = new LinkedList();
    expect(list.head).toBeNull();
    list.insert([1, 2, "three"]);
    expect(list.read("values")).toEqual(["Three", 2, 1]);
  });
});
