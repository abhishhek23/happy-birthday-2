// Show the button after 6 seconds
  setTimeout(() => {
    document.getElementById("continueBtn").style.display = "block";
  }, 4000); // 6000ms = 4 seconds

  function goNext() {
    window.location.href = "birthday_note.html"; // Or your next layer page
  }