function prob3() {
    var auth = confirm("Do you agree to share your information to the site?");
    if(auth == true) {
        var name = "Eoan";
        var height = 64;
        var kg = 63;
        var feet = parseInt(height)/12;
        var inch = parseInt(height)%12;
        var lbs = parseFloat(kg)*2.2;
        lbs=lbs.toFixed(2);
        console.log("Name: "+ name + "\nHeight: " + parseInt(feet) + "'" + inch + "''" + "\nWeight: " + lbs + " lbs");
    }else {
        console.log("User does not wish to share his/her information.");
    }
}