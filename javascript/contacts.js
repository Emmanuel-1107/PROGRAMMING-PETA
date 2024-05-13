var countdownDuration = 5;
    function updateCountdown() {
        document.getElementById("countdown").innerText = "" + countdownDuration + "";
        countdownDuration--;

        if (countdownDuration < 0) {
            // Redirect to a new website
            window.location.href = "http://127.0.0.1:3000/home/index.html"; 
        } else {
            setTimeout(updateCountdown, 1000);
        }
    }

    
    updateCountdown();