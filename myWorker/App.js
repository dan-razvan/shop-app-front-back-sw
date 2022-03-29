const data = [1, 2, 3, 4, 5]

const myWorker = new Worker('worker.js')

myWorker.postMessage(data)

myWorker.onmessage = (sumOfData) => {
  console.log(`Received message from worker: ${sumOfData.data}`)
}
