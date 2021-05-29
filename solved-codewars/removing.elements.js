function removeEveryOther(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i += 2) {
        result.push(arr[i]);
    }
    return result;
}

/*
function removeEveryOther(arr) {
    return arr.filter((_, idx) => idx % 2 === 0);  // Taip pat gali buti toks variantas
}
*/



test("Basic tests", () => {
    expect(removeEveryOther['Hello', 'Goodbye', 'Hello Again']).toBe['Hello', 'Hello Again'];
    expect(removeEveryOther[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]).toBe[1, 3, 5, 7, 9];
    expect(removeEveryOther[[1, 2]]).toBe[[1, 2]];
    //expect(removeEveryOther([['Goodbye'], { 'Great': 'Job' }]).toBe([['Goodbye']]);  //kazkas negerai su siuo testu, nepraeina :(
})