// Select elements
const requestRideButton = document.querySelector("#request-ride button");
const loginButton = document.querySelector("#login button");
const registerButton = document.querySelector("#register button");
const dashboardLink = document.querySelector("#dashboard-link");
const logoutLink = document.querySelector("#logout-link");

// Add event listeners
requestRideButton.addEventListener("click", requestRide);
loginButton.addEventListener("click", login);
registerButton.addEventListener("click", register);
dashboardLink.addEventListener("click", showDashboard);
logoutLink.addEventListener("click", logout);

// Functions
function requestRide() {
    const pickup = document.querySelector("#pickup").value;
    const dropoff = document.querySelector("#dropoff").value;

    // Validate input
    if (pickup === "" || dropoff === "") {
        alert("Please fill in both pickup and dropoff locations");
        return;
    }

    // Send request to server
    fetch("/request-ride", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            pickup: pickup,
            dropoff: dropoff
        })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert("Ride requested successfully");
        } else {
            alert("Error requesting ride");
        }
    })
    .catch(error => {
        console.error(error);
    });
}

function login() {
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;

    // Validate input
    if (email === "" || password === "") {
        alert("Please fill in both email and password");
        return;
    }

    // Send request to server
    fetch("/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            email: email,
            password: password
        })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert("Logged in successfully");
            window.location.href = "/dashboard";
        } else {
            alert("Invalid email or password");
        }
    })
    .catch(error => {
        console.error(error);
    });
}

function register() {
    const name = document.querySelector("#name").value;
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;

    // Validate input
    if (name === "" || email === "" || password === "") {
        alert("Please fill in all fields");
        return;
    }

    // Send request to server
    fetch("/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: name,
            email: email,
            password: password
        })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert("Registered successfully");
            window.location.href = "/login";
        } else {
            alert("Error registering");
        }
    })
    .catch(error => {
        console.error(error);
    });
}

function showDashboard() {
    window.location.href = "/dashboard";
}

function logout() {
    fetch("/logout", {
        method: "POST"
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert("Logged out successfully");
            window.location.href = "/login";
        } else {
            alert("Error logging out");
        }
    })
    .catch(error => {
        console.error(error);
    });
}
