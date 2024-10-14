const minPriceInput = document.getElementById('min-price');
const maxPriceInput = document.getElementById('max-price');
const minPriceValue = document.getElementById('min-price-value');
const maxPriceValue = document.getElementById('max-price-value');

// Met à jour les valeurs affichées
minPriceInput.addEventListener('input', function() {
    minPriceValue.textContent = this.value;

    if (parseInt(minPriceInput.value) > parseInt(maxPriceInput.value)) {
        minPriceInput.value = maxPriceInput.value;
        minPriceValue.textContent = minPriceInput.value;
    }
});

maxPriceInput.addEventListener('input', function() {
    maxPriceValue.textContent = this.value;


    if (parseInt(maxPriceInput.value) < parseInt(minPriceInput.value)) {
        maxPriceInput.value = minPriceInput.value;
        maxPriceValue.textContent = maxPriceInput.value;
    }
});