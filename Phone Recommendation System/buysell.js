document.addEventListener("DOMContentLoaded", function() {
    const phoneList = document.getElementById("phoneList");

    window.postForSale = function() {
        const brand = document.getElementById("brand").value;
        const model = document.getElementById("model").value;
        const storage = document.getElementById("storage").value;
        const camera = document.getElementById("camera").value;
        const price = document.getElementById("price").value;

        if (brand && model && storage && camera && price) {
            const li = document.createElement("li");
            li.innerHTML = `<strong>${brand} ${model}</strong> - ${storage}, ${camera}, Rs. ${price} 
                            <button onclick="buyPhone(this)">Buy Now</button>`;
            phoneList.appendChild(li);

            document.getElementById("brand").value = "";
            document.getElementById("model").value = "";
            document.getElementById("storage").value = "";
            document.getElementById("camera").value = "";
            document.getElementById("price").value = "";
        } else {
            alert("Please fill all fields before posting for sale.");
        }
    };

    window.buyPhone = function(button) {
        button.parentElement.remove();
        alert("Phone purchased successfully!");
    };
});
