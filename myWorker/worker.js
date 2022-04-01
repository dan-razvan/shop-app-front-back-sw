const processData = (data) => {
  let sum = data.reduce((prevVal, nextVal) => prevVal + nextVal)

  return sum
}

// const myWorker = new Worker('worker.js');

onmessage = (data) => {
  const sumOfData = processData(data.data)
  postMessage(sumOfData)
}
