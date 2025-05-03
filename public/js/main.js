$(document).ready(function() {
    
    $('.btn-picture').click(function() {
        let id = $(this).data('id');
        $('.single-page').removeClass('d-none');
        $.ajax({
            url: 'assets/products.json',
            method: 'GET',
             success: function(response) {
                const productId = id; 
                const product = response.products.find(p => p.id === productId);

                $('#product-name').text(product.name);
                $('#product-price').text('$' + product.price);
                $('#product-description').text(product.description);
                $('#main-product-image').attr('src', 'assets/placeholder-imgs/' + product.image);

                const moreImages = product['more-imgs'];
                const moreImagesHtml = moreImages.map(img => `<img src="assets/placeholder-imgs/${img}" alt="">`).join('');
                $('#more-images').html(moreImagesHtml);

                if (product) {
                    console.log(product);
                } else {
                    console.log('Product not found');
                }
            }
        })
    });

   
});