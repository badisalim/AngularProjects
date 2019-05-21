const {
    checkPassword1And2,
    isNumber,
    isLargerThan8,
    isLowerCase,
    isUpperCase,
    verification
} = require("./password");

describe("password exercise", () => {
    it("should give false if the passwords are empty", () => expect(checkPassword1And2("", "")).toBe(false));

    it("should give true if larger than 8", () => expect( isLargerThan8("1234567aS", "1234567aS")).toBe(true));

    it("should give true if contain number", () => expect(isNumber(1)).toBe(true));

    it("should give true if contain lowercase", () => expect(isLowerCase("j")).toBe(true));

   it("should give true if contain Upperercase", () =>expect(isUpperCase("A")).toBe(true));
    
    it("should give false if not matches all", () => 
        expect(verification("k","")).toBe(false));

    
});