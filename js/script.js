document.addEventListener('DOMContentLoaded', function() {
    const products = [
        {
            id: '1',
            name: 'Smart Wearable',
            price: 199,
            image: 'images/products/smart-wearable.jpg',
            category: 'gadget',
            featured: true
        },
        // Add other products
    ];

    // Cart functionality from first example
    // Enhanced with filter/search
    function filterProducts() {
        const searchTerm = searchInput.value.toLowerCase();
        const priceRange = priceFilter.value.split('-');
        const category = categoryFilter.value;

        return products.filter(product => {
            const matchesSearch = product.name.toLowerCase().includes(searchTerm);
            const matchesPrice = !priceFilter.value || 
                (product.price >= (parseInt(priceRange[0]) || 0) && 
                 product.price <= (parseInt(priceRange[1]) || Infinity));
            const matchesCategory = !category || product.category === category;
            
            return matchesSearch && matchesPrice && matchesCategory;
        });
    }

    // Initialize event listeners
    searchInput.addEventListener('input', renderProducts);
    priceFilter.addEventListener('change', renderProducts);
    categoryFilter.addEventListener('change', renderProducts);

    function renderProducts() {
        const filtered = filterProducts();
        featuredProductsContainer.innerHTML = filtered.map(createProductCard).join('');
    }
    
    // Rest of cart functionality from first example
});
