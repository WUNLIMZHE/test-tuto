const greeting = function(person){
  console.log(`Hello ${person} 😄`);
}
greeting('John');

const login = function(password){
  if (password === "123"){
    console.log(`Login successfully!`);
  } else{
    console.log(`Invalid password, please try again`);
  }
}
login('1234');

const signUp = function(username, password){
  console.log(`Hi ${username}, your sign up information has been stored. Thank you!`);
}
signUp('wunlimzhe', '123');