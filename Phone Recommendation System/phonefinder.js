const filterPanel = document.getElementById("filterPanel");
const filterBtn = document.getElementById("filterBtn");
const closeBtn = document.querySelector(".close-btn");
const applyFilters = document.getElementById("applyFilters");
const searchInput = document.getElementById("search");
const suggestionsBox = document.getElementById("suggestions");
const phoneList = document.getElementById("phoneList");

const phones = [
    { name: "iPhone 13", brand: "Apple", price: 80000 },
    { name: "Samsung S22", brand: "Samsung", price: 75000 },
    { name: "OnePlus 10", brand: "OnePlus", price: 50000 },
    { name: "Xiaomi Mi 11", brand: "Xiaomi", price: 40000 },
    { name: "Google Pixel 6", brand: "Google", price: 70000 },
    { name: "iPhone 12", brand: "Apple", price: 65000 },
    { name: "Samsung A52", brand: "Samsung", price: 35000 },
    { name: "Xiaomi Redmi Note 11", brand: "Xiaomi", price: 20000 }
];

// ✅ Display filtered phones
function displayPhones(filteredPhones) {
    phoneList.innerHTML = filteredPhones.length
        ? filteredPhones.map(phone => `
            <div class="phone-card">
                <h3>${phone.name}</h3>
                <p>Brand: ${phone.brand}</p>
                <p>Price: ₹${phone.price}</p>
                <button class="buy-now-btn" onclick="redirectToShops('${phone.name}')">Buy Now</button>
            </div>
        `).join("")
        : "<p>No phones found.</p>";
}

// ✅ Show brand suggestions while typing
searchInput.addEventListener("input", () => {
    const value = searchInput.value.toLowerCase();
    const matchingBrands = [...new Set(phones.map(phone => phone.brand))] // Unique brands
        .filter(brand => brand.toLowerCase().includes(value));

    suggestionsBox.innerHTML = matchingBrands.length
        ? matchingBrands.map(brand => `<div class="suggestion-item">${brand}</div>`).join("")
        : "";

    suggestionsBox.style.display = matchingBrands.length ? "block" : "none";
});

// ✅ Select a suggestion from the dropdown
suggestionsBox.addEventListener("click", (event) => {
    if (event.target.classList.contains("suggestion-item")) {
        searchInput.value = event.target.textContent;
        suggestionsBox.style.display = "none";
        applyFiltersAndSearch();
    }
});

// ✅ Open/Close filter panel
filterBtn.addEventListener("click", () => filterPanel.classList.add("open"));
closeBtn.addEventListener("click", () => filterPanel.classList.remove("open"));

// ✅ Apply filters & search together
function applyFiltersAndSearch() {
    const searchQuery = searchInput.value.toLowerCase();
    const minPrice = parseInt(document.getElementById("minPrice").value) || 0;
    const maxPrice = parseInt(document.getElementById("maxPrice").value) || Infinity;
    const selectedBrand = document.getElementById("brand").value.toLowerCase();

    const filteredPhones = phones.filter(phone => 
        phone.price >= minPrice && phone.price <= maxPrice &&
        (selectedBrand === "" || phone.brand.toLowerCase() === selectedBrand) &&
        (searchQuery === "" || phone.brand.toLowerCase().includes(searchQuery) || phone.name.toLowerCase().includes(searchQuery))
    );

    displayPhones(filteredPhones);
}

// ✅ Apply filters when clicking "Apply Filters"
applyFilters.addEventListener("click", () => {
    filterPanel.classList.remove("open");  // Close panel after applying
    applyFiltersAndSearch();
});

// ✅ Search bar should also filter results in real-time
searchInput.addEventListener("input", applyFiltersAndSearch);

// ✅ Redirect "Buy Now" button to shop availability page
function redirectToShops(phoneName) {
    window.location.href = `shops.html?phone=${encodeURIComponent(phoneName)}`;
}

// ✅ Initial display
displayPhones(phones);
