"use strict";

const { describe, expect, test } = require("@jest/globals");
const LinkedList = require("../src/classes/LinkedList.js");

describe("List", () => {
  test("proper creation and insertion", () => {
    const list = new LinkedList();
    expect(list.head).toBeNull();

    list.insert([1, 2, "three"]);
    console.log(list.read("values"));
    expect(list.read("values")).toEqual(["Three", 2, 1]);
  });
});
