function calculate(){
    var kilogram=document.getElementById("kilogram").value;
    var height=document.getElementById("height").value;
    var body_index=(kilogram/(height*height*0.0001)).toFixed(1);

    if (height=="" || kilogram ==""){
        alert("Please fill the blanks")
    }

    else{

    if (body_index<18.5){
        document.getElementById("parag1").innerHTML =body_index + ' '+ "Underweight"
        document.getElementById("parag2").innerHTML="It means that you are not at the proper weight according to your height, you are weak. Weakness is a condition that poses a risk for certain diseases and is undesirable. In order for you to reach the appropriate weight for your height, you should eat a sufficient and balanced diet and take care of improving your eating habits."

    }

    if (18.5<=body_index && body_index<=24.9){
        document.getElementById("parag1").innerHTML =body_index + ' '+ "Normal weight"
        document.getElementById("parag2").innerHTML="You have the appropriate weight according to your height. Take care to maintain this weight by eating an adequate and balanced diet and doing regular physical activity."
    }

    if (25<=body_index && body_index<=29.9){
        document.getElementById("parag1").innerHTML =body_index + ' '+ "Overweight"
        document.getElementById("parag2").innerHTML="Your body weight is too much according to your height, in other words, you are fat. Obesity  is a risk factor for cardiovascular diseases, diabetes, hypertension, etc. chronic diseases. It is very important for your health that you go down to normal weight by getting weak under the control of a doctor / dietitian by contacting a medical institution. Please, contact the health facility."
    }

    if (30<=body_index && body_index<=39.9){
        document.getElementById("parag1").innerHTML =body_index + ' '+ "Obese"
        document.getElementById("parag2").innerHTML="Your body weight is too much according to your height, in other words, you are fat. Obesity  is a risk factor for cardiovascular diseases, diabetes, hypertension, etc. chronic diseases. It is very important for your health that you go down to normal weight by getting weak under the control of a doctor / dietitian by contacting a medical institution. Please, contact the health facility."
    }

    if (body_index>=40){
        document.getElementById("parag1").innerHTML =body_index + ' '+ "Morbid obese"
        document.getElementById("parag2").innerHTML= "Your body weight is too much according to your height, in other words, you are fat. Obesity  is a risk factor for cardiovascular diseases, diabetes, hypertension, etc. chronic diseases. It is very important for your health that you go down to normal weight by getting weak under the control of a doctor / dietitian by contacting a medical institution. Please, contact the health facility."
    }

}
   
}
