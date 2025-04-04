let correctPassword = "correctPassword";

let password = prompt("Enter your password:");


do {
  if (password !== correctPassword) {
    console.log("Incorrect, try again.");
  }
  password = prompt("Enter your password:");
} while (password !== correctPassword);

console.log("Access granted.");