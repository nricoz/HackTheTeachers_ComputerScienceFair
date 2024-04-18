image = document.getElementById('myImg2')
      
Promise.all([
  faceapi.nets.faceRecognitionNet.loadFromUri('/models'),
  faceapi.nets.ssdMobilenetv1.loadFromUri('/models')
]).then(start)
function start() {
  const image = await faceapi.bufferToImage(image)
  const detections = await faceapi.detectAllFaces(image).withFaceLandmarks().withFaceDescriptors()
  document.body.append(detections.length)
}

start()
      