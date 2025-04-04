let day = prompt("Enter a day of the week:");

switch (day.toLowerCase()) {
  case "monday":
    console.log("Your task for Monday is: Finish your assignments.");
    break;
  case "tuesday":
    console.log("Your task for Tuesday is: Prepare for the presentation.");
    break;
  case "wednesday":
    console.log("Your task for Wednesday is: Study for the quiz.");
    break;
  case "thursday":
    console.log("Your task for Thursday is: Attend the workshop.");
    break;
  case "friday":
    console.log("Your task for Friday is: Review the lecture notes.");
    break;
  default:
    console.log("Invalid day of the week.");
}