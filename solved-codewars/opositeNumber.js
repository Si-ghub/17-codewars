function opposite(number) {
    return number * -1
}


/*
function opposite(number) {     //Taip pat gali buti
    return (-number);
}
*/



test("Tests", () => {
    expect(opposite(1)).toBe(-1);
    expect(opposite(3)).toBe(-3);
    expect(opposite(4)).toBe(-4);
    expect(opposite(5)).toBe(-5);
    expect(opposite(9)).toBe(-9);
});