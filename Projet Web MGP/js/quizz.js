function check(){
	var c = 0;
	
	var q1= document.quizz.question1.value;
	var q2= document.quizz.question2.value;
	var q3 = document.quizz.question3.value;
	var q4 = document.quizz.question4.value;
	var q5 = document.quizz.question5.value;
	var q6 = document.quizz.question6.value;
	var q7 = document.quizz.question7.value;
	var q8 = document.quizz.question8.value;
	var resultat = document.getElementById('resultat');

	if(q1=="Lille"){c++};
	if(q2=="c"){c++};
	if(q3=="2"){c++};
	if(q4=="rj"){c++};
	if(q5=="lm"){c++};
	if(q6=="22"){c++};
	if(q7=="9"){c++};
	if(q8=="rm"){c++};

	

	if(c<4){
		resultat.textContent= `Nul ! Votre score est de : ${c}/8`;
		resultat.setAttribute("style","color:gold")
		alert("Mets toi au Handball chef")
	}
	else{
		if(c==4){
		resultat.textContent= ` Moyen ! Votre score est de : ${c}/8`;
		resultat.setAttribute("style","color:gold")
		alert("T'es pas le pingouin qui glisse le plus loin dans la banquise")
	}
	
	}
	if(c>=5 && c<8){
		resultat.textContent= `Bien !Votre score est de : ${c}/8`;
		resultat.setAttribute("style","color:gold")
		alert("Quel BG!!!")
	}
	if(c== 8){
		resultat.textContent= `Vous êtes un vrai fan ! Votre score est de : ${c}/8`;
		resultat.setAttribute("style","color:gold")
		alert("SIUUUUUUUUUUUUUUU")
	}

}