function getPlanetName(id) {
    var name;
    switch (id) {
        case 1:
            name = 'Mercury'
            break;

        case 2:
            name = 'Venus'
            break;

        case 3:
            name = 'Earth'
            break;

        case 4:
            name = 'Mars'
            break;

        case 5:
            name = 'Jupiter'
            break;

        case 6:
            name = 'Saturn'
            break;

        case 7:
            name = 'Uranus'
            break;

        case 8:
            name = 'Neptune'
            break;
    }


    return name;

}

test('teisingi planetu pavadinimai', () => {
    expect(getPlanetName(2)).toBe('Venus');
    expect(getPlanetName(3)).toBe('Earth');
    expect(getPlanetName(5)).toBe('Jupiter');
    expect(getPlanetName(1)).toBe('Mercury');
    expect(getPlanetName(7)).toBe('Uranus');
    expect(getPlanetName(6)).toBe('Saturn');
})