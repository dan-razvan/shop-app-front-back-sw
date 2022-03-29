const processData = (data) => {
  let sum = null
  data.forEach((number) => (sum += number))

  return sum
}

// const myWorker = new Worker('worker.js');

onmessage = (data) => {
  const sumOfData = processData(data.data)
  postMessage(sumOfData)
}
