image = document.getElementById('myImg2')
      
Promise.all([
  faceapi.nets.faceRecognitionNet.loadFromUri('/models'),
  faceapi.nets.ssdMobilenetv1.loadFromUri('/models')
]).then(start)
function start() {
  const image = await faceapi.bufferToImage("/IMG_0245.jpeg")
  const detections = await faceapi.detectAllFaces("/IMG_0245.jpeg").withFaceLandmarks().withFaceDescriptors()
  document.body.append(detections.length)
}

start()
      