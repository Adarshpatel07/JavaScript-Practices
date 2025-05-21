// Get the input element and heading
const nameInput = document.getElementById('nameInput');
const displayName = document.getElementById('displayName');

// Add event listener for input changes
nameInput.addEventListener('input', function(e) {
    // Filter out any characters that aren't letters or spaces
    const filteredValue = e.target.value.replace(/[^a-zA-Z\s]/g, '');
    
    // Update the input value if it was filtered
    if (e.target.value !== filteredValue) {
        e.target.value = filteredValue;
    }
    
    // Update the heading with the filtered value
    displayName.textContent = filteredValue;
});