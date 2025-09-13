var monthName = "Jan";
var monthNumber = "0";

switch(monthName){
    case "Jan":
    case "January":
    case "JAN":
    case "JANUARY":
        monthNumber = "1";
        break;
    case "Feb":
    case "Februrary":
    case "FEB":
    case "FEBRURARY":
        monthNumber = "2"; 
        break;
        default:
            monthNumber = "Unknown";
}