
// My valid number format is 0424-8822350

const { isValidNumber } = require('./app.js');

test('El número 0424-8822350 es válido, retorna true', () => {
    
    let aprobarNumero = isValidNumber("0424-8822350")
    expect(aprobarNumero).toBe(true);
});

test('El número 0414-8822350 es válido, retorna true', () => {
    
    let aprobarNumero = isValidNumber("0414-8822350")
    expect(aprobarNumero).toBe(true);
});

test('El número 0416-8822350 es válido, retorna true', () => {
    
    let aprobarNumero = isValidNumber("0416-8822350")
    expect(aprobarNumero).toBe(true);
});

test('El número 0412-8822350 es válido, retorna true', () => {
    
    let aprobarNumero = isValidNumber("0412-8822350")
    expect(aprobarNumero).toBe(true);
});

test('El número 0426-8822350 es válido, retorna true', () => {
    
    let aprobarNumero = isValidNumber("0426-8822350")
    expect(aprobarNumero).toBe(true);
});

test('El número 04248822350 no es válido, la prueba devuelve false', () => {
    
    let aprobarNumero = isValidNumber("04248822350");
    expect(aprobarNumero).toBe(false);
});

test('El número (0424)8822350 no es válido, la prueba devuelve false', () => {
    let aprobarNumero = isValidNumber("(0424)8822350");
    expect(aprobarNumero).toBe(false);
});

test('El número 424-8822350 no es válido, la prueba devuelve false', () => {
    let aprobarNumero = isValidNumber("424-8822350");
    expect(aprobarNumero).toBe(false);
});

test('El número 0424-882235 no es válido, la prueba devuelve false', () => {
    let aprobarNumero = isValidNumber("0424-882235");
    expect(aprobarNumero).toBe(false);
});

test('El número +58 424 8822350 no es válido, la prueba devuelve false', () => {
    let aprobarNumero = isValidNumber("+58 424 882235");
    expect(aprobarNumero).toBe(false);
});

test('El número 0436-8822350 no es válido, la prueba devuelve false', () => {
    let aprobarNumero = isValidNumber("0436-882235");
    expect(aprobarNumero).toBe(false);
});