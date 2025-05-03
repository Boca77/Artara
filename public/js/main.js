$(document).ready(function() {
    let allProducts = [];
    $.ajax({
        url: 'assets/products.json',
        method: 'GET',
            success: function(response) {
            allProducts = response;
        }
    })
    
    $('.btn-picture').click(function() {
        let id = $(this).data('id');
        $('.single-page').removeClass('d-none');

        const product = allProducts.products.find(p => p.id === id);

        $('#product-name').text(product.name);
        $('#product-price').text('$' + product.price);
        $('#product-description').text(product.description);
        $('#main-product-image').attr('src', 'assets/placeholder-imgs/' + product.image);

        const moreImages = product['more-imgs'];
        const moreImagesHtml = moreImages.map(img => `<img src="assets/placeholder-imgs/${img}" alt="">`).join('');
        $('#more-images').html(moreImagesHtml);
       
    });
   
});