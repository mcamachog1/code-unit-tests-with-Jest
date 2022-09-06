test("Un euro debe ser 1.2 dolares", function(){
    //import the function from app.js
    const { fromEuroToDollar } = require('./app.js')

    // use the function like its suppoed to be used
    const dollars = fromEuroToDollar(1)

    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    const expected = 1.2; 
    
    // this is the comparison for the unit test
     expect(fromEuroToDollar(1)).toBe(1.2); //1 euro are 1.2 dolares
})

test("Un dolar debe ser 106.58 yuanes", function(){
    const { fromDollarToYen } = require('./app.js')
    const dollars = fromDollarToYen(1)
    const expected = 106.58; 

     expect(dollars).toBe(expected); 
})

test("1000 yuanes deben ser 6.25 libras", function(){
    const { fromYenToPound } = require('./app.js')
    const yen = fromYenToPound(1000)
    const expected = 6.25; 
    
     expect(yen).toBe(expected); 
})