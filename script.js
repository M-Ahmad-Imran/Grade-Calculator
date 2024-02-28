
document.getElementById("gpa-form").addEventListener("submit", function (gpa){
    gpa.preventDefault();
    
    // Assignment
    let assiobt = parseFloat(document.getElementById("numberinput0").value);
    let totalassi = parseFloat(document.getElementById("numberinput8").value);
    let assperc = parseFloat(document.getElementById("numberinput10").value);
    // Quiz
    let quiobt = parseFloat(document.getElementById("numberinput1").value);
    let totalqui = parseFloat(document.getElementById("numberinput9").value);
    let quizperc = parseFloat(document.getElementById("numberinput11").value);
    // Mid Term
    let totalmid = parseFloat(document.getElementById("numberinput2").value);
    let obtmid = parseFloat(document.getElementById("numberinput3").value);
    let permid = parseFloat(document.getElementById("permid").value);
    // Final Term
    let finaltotal = parseFloat(document.getElementById("numberinput4").value);
    let obtfin = parseFloat(document.getElementById("numberinput5").value);
    let totalfinal = parseFloat(document.getElementById("totalfinal").value);
    // Class Participation
    let partiobt = parseFloat(document.getElementById("numberinput6").value);
    let perparti = parseFloat(document.getElementById("perparti").value);
    let totalparti = parseFloat(document.getElementById("numberinput12").value);
    // Project
    let proobt = parseFloat(document.getElementById("numberinput7").value);
    let prototal = parseFloat(document.getElementById("numberinput13").value);
    let perpro = parseFloat(document.getElementById("numberinput14").value);

    // Calculations 
    let assig = assiobt * assperc / totalassi;
    let quiz = quiobt * quizperc / totalqui;
    let mid = obtmid * permid / totalmid;
    let final = obtfin * totalfinal / finaltotal;
    let particepate = partiobt * perparti / totalparti;
    let proj = proobt * perpro / prototal;
    // Obtained Percentage
    let percent = assig + quiz + mid + final + particepate + proj;
    let o;
    // Check the grade
    if(percent > 100){
        o = "Wrong Weightage!";
    }
    else if (percent <= 100 && percent >= 86) {
        o = "A";
    }
    else if (percent < 86 && percent >= 82) {
        o = "A-";
    }
    else if (percent < 82 && percent >= 78) {
        o = "B+";
    }
    else if (percent < 78 && percent >= 74) {
        o = "B";
    }
    else if (percent < 74 && percent >= 70) {
        o = "B-";
    }
    else if (percent < 70 && percent >= 66) {
        o = "C+";
    }
    else if (percent < 66 && percent >= 62) {
        o = "C";
    }
    else if (percent <= 61) {
        o = "F"
    }
    let result = document.getElementById("result");
    if (o == "A") {
        result.textContent = "\nCongratulation! Your Grade of this subject is " + o + "! " + percent + "%";
    } else {
        result.textContent = "\nThe Grade of this subject is " + o + "! " + percent;
    }
    
})

function show() {
    setTimeout(() => {
        document.getElementById("data").style.display = 'block';
        document.getElementById("welcomepage").style.display = 'none';
    }, 500);
}

function pop() {
    document.getElementById("box").style.display = "none";
    document.getElementById("st").style.opacity = "1"
}