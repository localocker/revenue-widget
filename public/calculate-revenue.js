// Get the input field and output section
const inputField = document.getElementById('occupied-units');
const outputSection = document.getElementById('anticipated-revenue');

// Function to update the revenue based on input value
function updateRevenue() {
    const inputValue = parseInt(inputField.value);
    // Check if inputValue is a valid number
    if (isNaN(inputValue) || inputValue <= 0) {
        outputSection.textContent = "Please enter a valid number of occupied units.";
    } else {
        const revenue = inputValue * 10 * 12;
        outputSection.textContent = `Anticipated Annual Revenue from Protection Plan: $${revenue}`;
    }
}

// Add event listener to the input field
inputField.addEventListener('input', updateRevenue);
