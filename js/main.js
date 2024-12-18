document.getElementById('checkout').addEventListener('click', function() {
    window.location.href = './cart.html';
});

let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
}

setInterval(nextSlide, 3000);

// 初始化显示第一张幻灯片
showSlide(currentSlide);

setInterval(function() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    document.getElementById('time').textContent = `${hours}:${minutes}:${seconds}`;
}, 1000);

document.getElementById('toggle-form').addEventListener('click', function() {
    var loginDiv = document.getElementById('login');
    var registerDiv = document.getElementById('register');
    var toggleButton = document.getElementById('toggle-form');

    if (loginDiv.style.display === 'none') {
        loginDiv.style.display = 'block';
        registerDiv.style.display = 'none';
        toggleButton.textContent = '切换到注册';
    } else {
        loginDiv.style.display = 'none';
        registerDiv.style.display = 'block';
        toggleButton.textContent = '切换到登录';
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const cartItemsContainer = document.getElementById('cart-items');
    const addToCartButtons = document.querySelectorAll('.add-to-cart');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            const product = button.parentElement.parentElement.cloneNode(true);
            product.querySelector('.add-to-cart').remove();
            
            // 修改CSS样式以适应购物车
            product.style.margin = '10px 0';
            product.style.border = '1px solid #ccc';
            product.style.padding = '10px';
            product.style.backgroundColor = '#f9f9f9';
            
            // 修改产品图片大小
            const productImage = product.querySelector('img');
            if (productImage) {
                productImage.style.width = '100px';
                productImage.style.height = 'auto';
            }
            
            cartItemsContainer.appendChild(product);
            updateTotalPrice();
        });
    });

    function updateTotalPrice() {
        let totalPrice = 0;
        const prices = cartItemsContainer.querySelectorAll('.product-details p:nth-child(3)');
        prices.forEach(price => {
            totalPrice += parseFloat(price.textContent.replace('价格: ¥', ''));
        });
        document.getElementById('total-price').textContent = totalPrice.toFixed(2);
    }
});

