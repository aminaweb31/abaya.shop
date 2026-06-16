function openLogin() {
  document.getElementById("loginModal").style.display = "flex";
}

function openSignup() {
  document.getElementById("signupModal").style.display = "flex";
}

function closeModal() {
  document.getElementById("loginModal").style.display = "none";
  document.getElementById("signupModal").style.display = "none";
}

/* 💾 simple storage */
function signup() {
  const user = document.getElementById("signupUser").value;
  const pass = document.getElementById("signupPass").value;

  localStorage.setItem(user, pass);
  alert("Compte créé !");
  closeModal();
}

function login() {
  const user = document.getElementById("loginUser").value;
  const pass = document.getElementById("loginPass").value;

  const saved = localStorage.getItem(user);

  if (saved === pass) {
    alert("Connexion réussie !");
    closeModal();
  } else {
    alert("Login incorrect !");
  }
}

function openLogin() {
  document.getElementById("loginModal").style.display = "flex";
}

function openSignup() {
  document.getElementById("signupModal").style.display = "flex";
}

function closeModal() {
  document.getElementById("loginModal").style.display = "none";
  document.getElementById("signupModal").style.display = "none";
}

/* 💾 OPEN/CLOSE CART  */
const openButton = document.getElementById("openButton");
const closeButton = document.getElementById("closeButton");
const navCart = document.getElementById("navCart");


openButton.addEventListener("click", ()=>{

    navCart.classList.add("active");

});


closeButton.addEventListener("click", ()=>{

    navCart.classList.remove("active");

});