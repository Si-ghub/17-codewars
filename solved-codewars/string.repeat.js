function repeatStr(n, s) {
    return s.repeat(n);
}

/*
repeatStr = (n, s) => s.repeat(n)   //gali buti naudojamas trumpesnis budas
*/

/*
function repeatStr(n, s) {
    var str = "";
    for (var i = 0; i < n; i++)    //su ciklu (LOOP)
        str += s;
    return str;
}
*/

test('Pakartoti n kartu', () => {
    expect(repeatStr(3, "*")).toBe("***");
    expect(repeatStr(5, "#")).toBe("#####");
    expect(repeatStr(2, "ha ")).toBe("ha ha ");

});