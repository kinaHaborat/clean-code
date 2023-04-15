//exercise clean-code (11 to 15)

//ex: 11 --------

function buyBeer(age, money) {
  return age >= 21 && money >= 20 ? true : false;
}

//---------------

//ex: 12 --------

class User {
  name;
  age;
  email;
  constructor(name, age, email) {
    this.name = name;
    this.age = age;
    this.email = email;
  }
}

const user = new User("Max", 31, "max@test.com");

//---------------
//ex: 13 --------

let chemicalSymbol = {
  sodium: "Na",
  hydrogen: "H",
  helium: "He",
  oxigen: "o",
};
function getSymbol(name) {
  let symbol = [name];
  if (symbol) {
    return s;
  }

  console.log("symbol not found");
  return "not found";
}

//---------------
//ex: 14 --------
function initApp() {
  try {
    connectDatabase();
  } catch (error) {
    console.log("Could not connect to database!");
  }
}
function connectDatabase() {
  return database.connect();
}
function determineSuportAgent(ticket) {
  return ticket.requestType === "unknown"
    ? findStandardAgent()
    : findByAgentRequestType(ticket.requestType);
}

function isValid(email, password) {
  return !email.includes("@") || password.length < 7
    ? { code: 433, message: "invalid input" }
    : { code: 200, message: "success" };
}

//---------------
//ex: 15 --------

class OnlineShop {}

//---------------
