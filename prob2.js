function prob2() {
    var fname = prompt("Enter First Name: ");
    var lname = prompt("Enter Last Name: ");
    var year = prompt("Enter Birth Year: ");
    var age = 2025-year;
    document.write("Hi " + fname + " " + lname + "! How does it feel to be " + age + " years old?" );
}