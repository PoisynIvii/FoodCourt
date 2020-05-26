function reDirect(){
  var selected = document.getElementById('path').value;
  var split = selected.lastIndexOf("*");
  var location = selected.substring(0,split);
  var target = selected.substring(split+1);
  if (target=="_self") {
    document.location=location;
  }else{
    parent.frames[target].location = location;
  }
}

function yourName(){
  var x = prompt("Please enter your name.","Enter");
  var y = prompt("Please enter your password", "Enter")
  var name = x; 
  var password = y;
  var names = ["Lex", "Alan", "Guest"];
  var passwords = ["hi", "oh", "yes"];
 for (i = 0; i < names.length; i++) {
 	console.log(i);
 	console.log(names.includes(x));
 	console.log(passwords.includes(y));
 	console.log(x);
  if(names.includes(x) === true && passwords.includes(y) === true){
 	alert("Logged In");
  break;
} else {
	alert("opps! Error");
  break;
}}}
/*
function login (){
var x = prompt("Please enter name:", "Enter here");
var y = prompt("Please enter password:", "Enter here");
var user = {
	name: "Lex",
	password: "hi"
}
for (i = 0; i < user.length; i++) {
	console.log(x);
	console.log(x);
	console.log(user.name.value);
	if (user.name.value === x) {
	alert("Logged in");
} else {
	alert("No");
}}
}
*/
/* redirect thing
<script>
var screensize = screen.width;
var resolution = (
  ((!(640-screensize))*1)+
  ((!(800-screensize))*2)+
  ((!(1024-screensize))*3)+
  ((!(1152-screensize))*4)+
  ((!(1280-screensize))*5)+
  ((!(1600-screensize))*6)
); 
if(!(resolution)) resolution = 1;
if (resolution=='1'){
  window.location='http://www.google.com';
}
if (resolution=='2') {
  window.location='http://www.bing.com';
}
if (resolution=='3') {
  window.location='http://www.yahoo.com';
}
if (resolution!='1' && resolution!='2' && resolution!='3'){
window.location='http://www.msn.com';
}
</script>
*/

/*
const guessField = document.querySelector('.guessField');
const guessField2 = document.querySelector('.guessField2');
const guessSubmit = document.querySelector('.guessSubmit');
const gp = document.querySelector('.p');

function guessNumber () {
let randomNumber = Math.floor(Math.random()*3) + 1;
let userGuess = Number(guessField.value);
let userGuess2 = Number(guessField2.value);
if (randomNumber === userGuess){
	if (randomNumber === userGuess2) {
	gp.textContent = "Congratulations, That's correct!";
}
} else {
	gp.textContent = "Nope, you're wrong! The correct number was " + randomNumber;
}
}
guessSubmit.addEventListener('click', guessNumber);
/* 
https://zellwk.com/blog/frontend-login-system/
async function basiclogin (email, password) {
  const response = await zlFetch.post(loginEndpoint, {
    auth: {
      username: email,
      password: password
    },
    body: { -*...*- }
  })
}
async function basiclogin (email, password) {
  const response = await zlFetch.post(-*...*-)
  const { token } = response.body
  
  localStorage.setItem('token', token)
}
async function isLoggedIn () {
  const token = store.get('token')
  if (!token) return false
}
async function autoRedirect () {
  const validLogin = await isLoggedIn()
  if (!validLogin && location.pathname !== '/login/') redirect('/login')
  if (validLogin && location.pathname === '/login/') redirect('/')
}
async function isLoggedIn () {
  // ...
  // Checks validity of token
  const response = await zlFetch.post(loginEndpoint, {
    auth: token,
    body: { course: 'learn-javascript' }
  })
}
async function isLoggedIn () {
  // ...
  // Saves token into localStorage again
  const { token } = response.body
  localStorage.setItem('token', token)

  return true
}
function basiclogin (email, password) {
  const response = await zlFetch.post(-*...*-)
  const { token, user } = response.body
  // ...

  // user contains accessLevel
  localStorage.setItem('user', user)
}
function isLoggedIn () {
  // ...
  const { token, user } = response.body
  localStorage.setItem('user', user)
}
function logout () {
  localStorage.removeItem('token')
  localStorage.removeItem('user')
}
<html lang="en" class="no-js">
document.documentElement.classList.remove('no-js')
.no-js main {
  display: none !important;
}
</html>
simple login using JSON
*/

/*
lexx works
 const logInForm = document.getElementById('login-form');
const logInButton = document.getElementById('login-form-submit');
const logInError = document.getElementById('login-error-msg');
const help = document.querySelectorAll(".help");


logInButton.addEventListener('click', thing)
function thing (){
	help.textContext = username;
	if (user === "Lex" && pass === "hi") {
	help.textContext = "ohhh";
} else {
	help.textContext = "fuck";
}
} */