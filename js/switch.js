// Javascript Document

function myFunction() {
    var elem = document.getElementById('chooseMe');
    var fortuneNum = elem.options[elem.selectedIndex].value;
    var fortuneMessage;
    console.log(fortuneNum);

    switch (Number(fortuneNum)) {
        case 1:
        case 3:
            fortuneMessage = "You will inherit a fortune";
            break;

        case 2:
        case 4:
            fortuneMessage = "You won a car";
            break;

        case 4:
        case 8:
            fortuneMessage = "You will have a new computer";
            break;
        default:
            fortuneMessage = "Finish this course in 3 hours";
    }// End Of Switch


    document.getElementById('feedback').innerHTML = fortuneMessage;
}