// Phone Data
const phoneData = {
    iphone: {
        name: "iPhone 15 Pro",
        screen: "6.1 inches",
        ram: "8GB",
        processor: "A17 Bionic",
        storage: "128GB - 1TB",
        battery: "24 hours",
        camera: "48MP Triple-lens",
        os: "iOS 17",
        price: "$999"
    },
    samsung: {
        name: "Samsung Galaxy S24 Ultra",
        screen: "6.8 inches",
        ram: "12GB",
        processor: "Snapdragon 8 Gen 3",
        storage: "256GB - 1TB",
        battery: "26 hours",
        camera: "200MP Quad-lens",
        os: "Android 14",
        price: "$1199"
    }
};

// Compare Button Click Event
document.getElementById("compare-btn").addEventListener("click", function() {
    let phone1 = document.getElementById("phone1").value;
    let phone2 = document.getElementById("phone2").value;

    if (!phone1 || !phone2) {
        alert("Please select two phones to compare.");
        return;
    }

    // Fill the Table with Data
    document.getElementById("phone1-name").innerText = phoneData[phone1].name;
    document.getElementById("phone2-name").innerText = phoneData[phone2].name;

    Object.keys(phoneData[phone1]).forEach(feature => {
        document.getElementById(`phone1-${feature}`).innerText = phoneData[phone1][feature];
        document.getElementById(`phone2-${feature}`).innerText = phoneData[phone2][feature];
    });

    document.getElementById("comparison-section").classList.remove("hidden");
});

// Call-to-Action Buttons
function buyPhone() {
    alert("Redirecting to purchase page...");
}

function readReviews() {
    alert("Redirecting to reviews...");
}
