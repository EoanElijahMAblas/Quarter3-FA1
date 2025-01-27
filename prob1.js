function prob1() {
    var name = "Eoan";
    var height = 64;
    var kg = 63;
    var feet = parseInt(height)/12;
    var inch = parseInt(height)%12;
    var lbs = parseFloat(kg)*2.2;
    lbs=lbs.toFixed(2);
    alert("Name: "+ name + "\nHeight: " + parseInt(feet) + "'" + inch + "''" + "\nWeight: " + lbs + " lbs");
}