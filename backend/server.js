socket.on('orderCleared', (data) => {
    if (data.tableNumber === currentTableNumber) {
        cart = [];
        updateCartBar();
        closeCartModal();
        // Optionally reload the page to fully reset inputs
        // window.location.reload();
    }
});
