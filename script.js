
document.getElementById("gpa-form").addEventListener("submit", function (gpa){
    gpa.preventDefault();

    let assi = parseFloat(document.getElementById("numberinput0").value);
    let qui = parseFloat(document.getElementById("numberinput1").value);
    let totalmid = parseFloat(document.getElementById("numberinput2").value);
    let obtmid = parseFloat(document.getElementById("numberinput3").value);
    let finaltotal = parseFloat(document.getElementById("numberinput4").value);
    let obtfin = parseFloat(document.getElementById("numberinput5").value);
    let parti = parseFloat(document.getElementById("numberinput6").value);
    let permid = parseFloat(document.getElementById("permid").value);
    let perparti = parseFloat(document.getElementById("perparti").value);
    let pro = parseFloat(document.getElementById("numberinput7").value);
    let totalassi = parseFloat(document.getElementById("numberinput8").value);
    let totalqui = parseFloat(document.getElementById("numberinput9").value);


    let assig = assi * 10 / totalassi;
    let quiz = qui * 10 / totalqui;
    let mid = obtmid * permid / totalmid;
    let final = obtfin * 40 / finaltotal;
    let particepate = parti * perparti / 10;
    let proj = pro * 10 / 10;
    let percent = assig + quiz + mid + final + particepate + proj;

    let o;
    if (percent <= 100 && percent >= 86) {
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