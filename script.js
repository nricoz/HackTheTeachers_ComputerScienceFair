const imageUpload = document.getElementById("imageUpload")

Promise.all([
faceapi.nets.faceRecognitionNet.loadFromUri('/models'),
faceapi.nets.faceLandmark68Net.loadFromUri('/models'),
faceapi.nets.ssMobilenetv1.loadFromUri('/models')
]).then(start)

function start(){
  document.body.append("Loaded")
  
}