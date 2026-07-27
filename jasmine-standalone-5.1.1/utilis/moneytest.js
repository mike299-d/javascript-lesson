import {FormatCurrency} from "../../utilis/money.js"


describe("test suite:FormatCurrency",()=>{
    it("convert cents into dollars",()=>{
        expect(FormatCurrency(2095)).toEqual("20.95");
    });
    it("works with zero",()=>{
        expect(FormatCurrency(0)).toEqual("0.00");
    })
    it("rounds up to the nearest ",()=>{
        expect(FormatCurrency(2000.5)).toEqual("20.01")
    })
    it("rounds down to the nearest ",()=>{
        expect(FormatCurrency(2000.4)).toEqual("20.00")
    })
});