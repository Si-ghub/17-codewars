class SmallestIntegerFinder {
    findSmallestInt(args) {
        return Math.min(...args);

    }

}

/*
test("Smallest Integer Tests", () => {
    expect(SmallestIntegerFinder([78, 56, 232, 12, 8])).toBe(8);          //Kazkas negerai su testais , neveikia!!!
    expect(SmallestIntegerFinder([78, 56, 232, 12, 18])).toBe(12);
    expect(SmallestIntegerFinder([78, 56, 232, 412, 228])).toBe(56);
    expect(SmallestIntegerFinder([78, 56, 232, 12, 0])).toBe(0);
    expect(SmallestIntegerFinder([1, 56, 232, 12, 8])).toBe(1);
});
*/