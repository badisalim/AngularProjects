const {
    checkPassword
   
} = require("./test");

describe("password exercise", () => {
    it("should give false if the passwords are empty", () => expect(checkPassword("", "")).toBe(false));

    it("should give true if larger than 8", () => expect( checkPassword("1234567aS", "1234567aS")).toBe(false));

    it("should give true if contain number", () => expect(checkPassword(1)).toBe(false));

    it("should give true if contain lowercase", () => expect(checkPassword("j")).toBe(false));

   it("should give true if contain Upperercase", () =>expect(checkPassword("A")).toBe(false));
    
    it("should give false if not matches all", () => 
        expect(checkPassword("k","")).toBe(false));

        it("should give true if not matches all", () => 
        expect(!checkPassword("k","k")).toBe(true));

    
});