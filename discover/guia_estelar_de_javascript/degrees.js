const CelsiusToFahrenheit = celsius => celsius * (9 / 5) + 32

const FahrenheitToCelsius = fahrenheit => (fahrenheit - 32) * (5 / 9)

const transformDegree = degree => {
  const celsiusExists = degree.toUpperCase().includes('C')
  const fahrenheitExists = degree.toUpperCase().includes('F')

  if (!celsiusExists && !fahrenheitExists) {
    throw new Error('Grau não identificado')
  } else if (celsiusExists) {
    const celsius = Number(degree.toUpperCase().replace('C', ''))

    return CelsiusToFahrenheit(celsius)
  } else {
    const fahrenheit = Number(degree.toUpperCase().replace('F', ''))

    return FahrenheitToCelsius(fahrenheit)
  }
}

try {
  console.log(transformDegree('50F'))
  console.log(transformDegree('10c'))
} catch (error) {
  console.log(error)
}
