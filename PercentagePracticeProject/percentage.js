 let grade=prompt("Enter your Percentage");
switch(true){
    case grade >=90:
    document.write("A+ Grade");
    break;
    case grade >=80:
    document.write("A Grade");
    break;
    case grade >=70:
    document.write("B Grade");
    break;
    case grade >=60:
    document.write("C Grade");
    break;
    case grade >=50:
    document.write("D Grade");
    break;
    case grade >=40||grade<=40:
    document.write("E Grade(You are Fail)");
    break; 
    default:
    document.write("Warning(Enter your Percentage.)");
    break;
}
