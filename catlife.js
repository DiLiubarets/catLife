
init();

function init() {

    document.addEventListener('readystatechange', function () {
        if (document.readyState === "complete") {

            document.getElementById("send").addEventListener("click", convertAgeToCatYears);
        }
    });
}


function convertAgeToCatYears() {
    var yourAge = document.getElementById("yourAge").value;
    var year1 = 15;
    var year2 = 10;
    var laterYears
    var text;
    var myAgeInCatYears


    if (isNaN(yourAge) || yourAge < 1 || yourAge > 100) {

        text = "Input not valid";

    } else {

        laterYears = yourAge - 2;
        laterYears *= 4;
        myAgeInCatYears = laterYears + year1 + year2

        if (yourAge == 1) {
            myAgeInCatYears = year1;
        }

        text = myAgeInCatYears;

    }

    document.getElementById("p1").innerHTML = ('I am ' + yourAge
    + ' years old in human which is ' + myAgeInCatYears + ' years old in cat years.');
    console.log(text)
}

