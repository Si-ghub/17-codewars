function divide(weight) {
    //your code here
}



test("Tests", () => {
    expect(divide(4)).toBe(true);
    expect(divide(2)).toBe(false);
    expect(divide(5)).toBe(false);
    expect(divide(88)).toBe(true);
    expect(divide(100)).toBe(true);
    expect(divide(67)).toBe(false);
    expect(divide(90)).toBe(true);
    expect(divide(10)).toBe(true);
    expect(divide(99)).toBe(false);
    expect(divide(32)).toBe(true);

});
