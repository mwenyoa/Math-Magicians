import operate from '../../logic/operate';

describe('Test operations agains operand', () => {
  test('Multiplication', () => {
    const outPut = operate('12', '12', 'x');
    expect(outPut).toBe('144');
  });

  test('Division', () => {
    const outPut = operate('12', '12', '÷');
    expect(outPut).toBe('1');
  });

  test('Modulas', () => {
    const outPut = operate('12', '12', '%');
    expect(outPut).toBe('0');
  });

  test('Addition', () => {
    const outPut = operate('12', '12', '+');
    expect(outPut).toBe('24');
  });

  test('Subtraction', () => {
    const outPut = operate('12', '12', '-');
    expect(outPut).toBe('0');
  });
});
