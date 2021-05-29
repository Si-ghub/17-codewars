function smallEnough(a, limit) {
    const min = Math.min(...a);
    const max = Math.max(...a);

    for (let i = min; i <= max; i++) {
        if (limit >= max) {
            return true;
        }
        return false;
    }


}

/*
function smallEnough(a, limit){       //Trumpesnis sprendimas
  return Math.max(...a) <= limit   
}
*/

test('Ar mazesni nei reiksme', () => {
    expect(smallEnough([66, 101], 200)).toBe(true);
    expect(smallEnough([78, 117, 110, 99, 104, 117, 107, 115], 100)).toBe(false);
    expect(smallEnough([101, 45, 75, 105, 99, 107], 107)).toBe(true);
    expect(smallEnough([80, 117, 115, 104, 45, 85, 112, 115], 120)).toBe(true);
})


/*
UZDUOTIS
You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.

You can assume all values in the array are numbers.
*/