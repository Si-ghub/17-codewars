String.prototype.isUpperCase = function () {

    return this.toUpperCase() === this.toString();
}



/*
const str = '';

if (str === str.toUpperCase()) {
    return true;
} else {
    return false;
}
}
*/





test('Fixed Tests', () => {
    expect('c'.isUpperCase()).toBe(false);
    expect('C'.isUpperCase()).toBe(true);
    expect('hello I AM DONALD'.isUpperCase()).toBe(false);
    expect('HELLO I AM DONALD'.isUpperCase()).toBe(true);
    expect('ACSKLDFJSgSKLDFJSKLDFJ'.isUpperCase()).toBe(false);
    expect('ACSKLDFJSGSKLDFJSKLDFJ'.isUpperCase()).toBe(true);
});

/*
it("should also work for a few other basic tests", () => {
    Test.assertEquals('Hello World'.isUpperCase(), false, 'Hello World is not upper case');
    Test.assertEquals('hello world'.isUpperCase(), false, 'hello world is not upper case');
    Test.assertEquals('Hello world'.isUpperCase(), false, 'Hello world is not upper case');
    Test.assertEquals('hello World'.isUpperCase(), false, 'hello World is not upper case');
    Test.assertEquals('HELLO WORLD'.isUpperCase(), true, 'HELLO WORLD is upper case');
    Test.assertEquals('Bob walks his dog every day.'.isUpperCase(), false, 'Bob walks his dog every day. is not upper case');
    Test.assertEquals('BOB walks his dog every day.'.isUpperCase(), false, 'BOB walks his dog every day. is not upper case');
    Test.assertEquals('BOB WALKS HIS DOG EVERY DAY.'.isUpperCase(), true, 'BOB WALKS HIS DOG EVERY DAY. is upper case');
    Test.assertEquals('BOB WALKs HIS DOG EVERY DAY.'.isUpperCase(), false, 'BOB WALKs HIS DOG EVERY DAY. is not upper case');
    Test.assertEquals('#lovewins'.isUpperCase(), false, '#lovewins is not upper case');
    Test.assertEquals('#Lovewins'.isUpperCase(), false, '#Lovewins is not upper case');
    Test.assertEquals('#loveWins'.isUpperCase(), false, '#loveWins is not upper case');
    Test.assertEquals('#LoveWins'.isUpperCase(), false, '#LoveWins is not upper case');
    Test.assertEquals('#LOVEWins'.isUpperCase(), false, '#LOVEWins is not upper case');
    Test.assertEquals('#LoveWINS'.isUpperCase(), false, '#LoveWINS is not upper case');
    Test.assertEquals('#LOVEWINs'.isUpperCase(), false, '#LOVEWINs is not upper case');
    Test.assertEquals('#lOVEWINS'.isUpperCase(), false, '#lOVEWINS is not upper case');
    Test.assertEquals('#LOVEWINS'.isUpperCase(), true, '#LOVEWINS is upper case');
});
});
*/