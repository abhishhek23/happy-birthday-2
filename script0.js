// Show the button after 6 seconds
  setTimeout(() => {
    const btn = document.getElementById("continueBtn");
    if (btn) {
      btn.style.display = "block";
    }
  }, 15000);

  // Navigate to next page
  function goToNextPage() {
    window.location.href = "index.html";  // Or the actual path
  }