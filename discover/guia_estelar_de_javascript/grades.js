const getScore = score => {
  if (score >= 9) {
    console.log('A')
  } else if (score >= 8 && score < 9) {
    console.log('B')
  } else if (score >= 7 && score < 8) {
    console.log('C')
  } else if (score >= 6 && score < 7) {
    console.log('D')
  } else {
    console.log('F')
  }
}

const grades = [10, 5, 3]

const score = (grades[0] + grades[1] + grades[2]) / 3
getScore(6)
