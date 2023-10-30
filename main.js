function startClassification()
{
  navigator.mediaDevices.getUserMedia({ audio: true});
  classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/Fx0zZc6lR/model.json',modelReady);
}

function modelReady(){
  classifier.classify( gotResults);
}

function gotResults(error, results) {
  if (error) {
    console.error(error);
  } else {
    console.log(results);
    random_number_r = Math.floor(Math.random() * 255) + 1;
    random_number_g = Math.floor(Math.random() * 255) + 1;
    random_number_b = Math.floor(Math.random() * 255) + 1;

 document.getElementById("result_label").innerHTML = 'posso ouvir -' +results[0].label;

 document.getElementById("result_label").style.color = "rgb('+random_number_r+','+random_number_g+','+random_number_b+')";

 document.getElementById("result_confidence").innerHTML = 'precisão -'+ (results[0].confidence*100).toFixed(2)+"%";

 document.getElementById("result_confidence").style.color = "rgb('+random_number_r+','+random_number_g+','+random_number_b+')";
  

  img =document.getElementById("leao");
  img1=document.getElementById("cachorro");
  img2=document.getElementById("gato");
 

  if (results [0].label == "latido") {
    img1.src="cachorro.gif";
  }
   else if (results [0].label == "miado") {
    img2.src="gato.gif";
  }
 
  else {
    img.src ="leao.gif";
  }
}
 
}





































































































