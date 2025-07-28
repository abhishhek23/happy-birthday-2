    // Show button after 6 seconds
    setTimeout(() => {
      const btn = document.getElementById("continueBtn");
      if (btn) btn.style.display = "block";
    }, 6000);

    // Go to next page
    function goNext() {
      window.location.href = "index4.html"; // Replace with your desired link
    }