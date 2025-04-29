// Extract phone name from URL
const urlParams = new URLSearchParams(window.location.search);
const phoneName = urlParams.get("phone");

// Display phone name
document.getElementById("phoneName").innerText = `Available Shops for ${phoneName}`;

const shopsData = {
    "Mumbai": [
        { name: "Reliance Digital", address: "Andheri West, Mumbai", contact: "9876543210" },
        { name: "Croma", address: "Bandra, Mumbai", contact: "9876543211" }
    ],
    "Delhi": [
        { name: "Samsung Store", address: "Connaught Place, Delhi", contact: "9876543220" },
        { name: "iPhone Hub", address: "Karol Bagh, Delhi", contact: "9876543221" }
    ],
    "Bangalore": [
        { name: "OnePlus Experience Store", address: "Koramangala, Bangalore", contact: "9876543230" },
        { name: "Xiaomi Exclusive", address: "Indiranagar, Bangalore", contact: "9876543231" }
    ],
    "Hyderabad": [
        { name: "Vijay Sales", address: "Banjara Hills, Hyderabad", contact: "9876543240" },
        { name: "Samsung Smart Plaza", address: "Hitech City, Hyderabad", contact: "9876543241" }
    ],
    "Chennai": [
        { name: "Apple Store", address: "T Nagar, Chennai", contact: "9876543250" },
        { name: "Poorvika Mobiles", address: "Velachery, Chennai", contact: "9876543251" }
    ]
};

// Find shops based on city selection
document.getElementById("findShops").addEventListener("click", function () {
    const city = document.getElementById("city").value;
    const shopList = document.getElementById("shopList");
    
    if (shopsData[city]) {
        shopList.innerHTML = shopsData[city].map(shop => `
            <div class="shop-card">
                <h3>${shop.name}</h3>
                <p><strong>Address:</strong> ${shop.address}</p>
                <p><strong>Contact:</strong> ${shop.contact}</p>
            </div>
        `).join("");
    } else {
        shopList.innerHTML = `<p>No shops found in this city.</p>`;
    }
});
