const sum = array => {
  let total = 0
  for (const value of array) {
    total += value
  }
  return total
}

const balance = ({ incomes, expenses }) => {
  const totalIncomes = sum(incomes)
  const totalExpenses = sum(expenses)

  if (totalIncomes > totalExpenses) {
    console.log('positive')
  } else if (totalIncomes === totalExpenses) {
    console.log('balance')
  } else {
    console.log('negative')
  }
}

const family = {
  incomes: [4, 5, 1],
  expenses: [2, 6, 1]
}

balance(family)
