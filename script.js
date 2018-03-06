// Initial Ratings

const ratings = {
    asics: 5.0,
    nike: 2.5,
    adidas: 2.2,
    newbalance: 3.5,
    brooks:1.1
}

// Total stars
const starsTotal = 5;

// Run get ratins when dom loads
document.addEventListener('DOMContentLoaded', getRatings);

// Form element 
const productSelect = document.getElementById('product-select');
const ratingControl = document.getElementById('rating-control');

// Initialize product
let product;

// Product select event
productSelect.addEventListener('change', (e) => {
    product = e.target.value;
    // Enable rating control
    ratingControl.disabled = false;
    ratingControl.value = ratings[product];
});

// Rating control change

ratingControl.addEventListener('blur', (e) => {
    const rating = e.target.value;

    //check for undervalue
    if(rating > 5) {
        alert('Please rate 1 - 5');
        return;
    }

    // Change ratinh
    ratings[product] = rating;

    getRatings();
});

// For in loop. Get ratings
function getRatings() {
    for(let rating in ratings) {
        // Get % 
        const starPercentage = (ratings[rating] / starsTotal) * 100;
        
        // Round to nearest 10
        const starPercentageRounded = `${Math.round(starPercentage / 10) * 10}%`;
        // console.log(starPercentageRounded);

        // Set width of stars inner to %
        document.querySelector(`.${rating} .stars-inner`)
        .style.width = starPercentageRounded;

        // Add number rating
        document.querySelector(`.${rating} .number-rating`)
        .innerHTML = ratings[rating];

    }
}
