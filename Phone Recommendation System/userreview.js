function submitReview() {
    let name = document.getElementById('name').value;
    let rating = document.getElementById('rating').value;
    let review = document.getElementById('review').value;

    if (name === "" || review === "") {
        alert("Please fill in all fields.");
        return;
    }

    let reviewHTML = `
        <div class="review-box">
            <strong>${name}</strong> 
            <span class="rating">${"⭐".repeat(rating)}</span>
            <p>${review}</p>
        </div>
    `;

    document.getElementById('reviews-list').innerHTML += reviewHTML;

    // Clear input fields
    document.getElementById('name').value = "";
    document.getElementById('review').value = "";
    document.getElementById('rating').value = "5";
}
