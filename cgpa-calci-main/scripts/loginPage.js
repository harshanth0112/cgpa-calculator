document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM fully loaded and parsed");
  const enterBtn = document.querySelector(".js-enter");
  const loginInput = document.querySelector(".js-login-input");
  
  if (!enterBtn || !loginInput) {
    console.error("Enter button or login input not found!");
    return;
  }
  
  enterBtn.addEventListener("click", () => {
    console.log("Enter button clicked");
    const rollValue = loginInput.value.trim();
    if (rollValue === "") {
      alert("Please enter a roll number");
      return;
    }
    let rollNumber = { rollNo: rollValue };
    localStorage.setItem("rollNumber", JSON.stringify(rollNumber));
    console.log("Roll number saved:", rollNumber.rollNo);
    alert("Roll number saved: " + rollNumber.rollNo);
    window.location.href = "cgpaHome.html"; // redirect to Home page
  });
});