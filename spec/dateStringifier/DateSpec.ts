import format from '../../index'

describe('The function parameters', function () {

  it('should use default if not specified', function () {
    const result = format()
    expect(result).toMatch(/^[0-9]{2}\/[0-9]{2}\/[0-9]{4}$/)
  })

  it('should not accept invalid dates', function () {
    expect(() => format(new Date('example'))).toThrowError('Invalid Date is not a valid Date')
    expect(() => format('Not a date')).toThrowError('Not a date is not a valid Date')
  })

  it('should not accept invalid languages only if any date needs it', function () {
    const date = new Date(2022, 5, 25)
    expect(format(date, '', 'invalid')).toBe('')
    expect(format(date, '{DD}', 'invalid')).toBe('25')
    expect(() => format(date, '{oDD}', 'invalid')).toThrowError('invalid is not a valid language')
  })

})

describe('The returned Date', function () {
  // using toLocaleString to set a fixed UTC
  const baseDate = new Date(new Date(1656188882000).toLocaleString("en-US", { timeZone: "America/Sao_Paulo" }))

  it('must be correct', function () {
    expect(format(baseDate, '{zDD}/{zMM}/{yyyy}')).toBe('25/06/2022')
    expect(format(baseDate, '{DD}/{MM}/{yyyy}')).toBe('25/6/2022')
    expect(format(baseDate, '{day} {month} {hour} {minute} {second}'))
      .toBe('Saturday June Seventeen Twenty-eight Two')
    expect(format(baseDate, '{zhh}:{zmm}:{zss}.{ms}')).toBe('17:28:02.0')
    expect(format(baseDate, '{hh}:{mm}:{ss}')).toBe('17:28:2')
    expect(format(baseDate, '{DDs} {DDm} {oDD}')).toBe('7 6 25th')
    expect(format(baseDate, '{unixms}')).toBe('1656188882000')
    expect(format(baseDate, '{unix}')).toBe('1656188882')
    expect(format(baseDate, '{unix}')).toBe('1656188882')
    expect(format(baseDate, '{tz} {utc}')).toBe('180 -3')
    expect(format(baseDate, '{zhh12}{hhp}')).toBe('05PM')
    expect(format(baseDate, '{hh12}{hhp}')).toBe('5PM')
    expect(format(baseDate, '{hour12}')).toBe('Five')
    expect(format(baseDate, '{century}')).toBe('21')
    expect(format(baseDate, '')).toBe('')
  })

  it('must change depending on language', function () {

    expect(format(baseDate, '{oDD} dia de {month}', 'pt')).toBe('25º dia de Junho')
    expect(format(baseDate, 'Hoje é {day}', 'pt')).toBe('Hoje é Sábado')
    expect(format(baseDate, 'Agora são {hour} horas, {hour12} da tarde', 'pt'))
      .toBe('Agora são Dezessete horas, Cinco da tarde')
    expect(format(baseDate, '{minute} minutos e {second} segundos', 'pt'))
      .toBe('Vinte e oito minutos e Dois segundos')

  })
})