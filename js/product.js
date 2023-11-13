// khởi tạo sự kiện khi click vào button cộng trừ sẽ tăng/giảm
const quantityInput = document.querySelector('.quantity-input');
const quantityDisplay = document.querySelector('.quantity p b');

function updateQuantityDisplay() {
  let currentValue = parseInt(quantityInput.value);
  // Cập nhật phần hiển thị số lượng
  quantityDisplay.textContent = currentValue;
}

quantityInput.addEventListener('input', () => {
  updateQuantityDisplay();
});

const decreaseButton = document.querySelector('.quantity-button.decrease');
const increaseButton = document.querySelector('.quantity-button.increase');

function decreaseQuantity() {
  let currentValue = parseInt(quantityInput.value);
  if (currentValue > 1) {
    quantityInput.value = currentValue - 1;
    updateQuantityDisplay();
  }
}

function increaseQuantity() {
  let currentValue = parseInt(quantityInput.value);
  quantityInput.value = currentValue + 1;
  updateQuantityDisplay();
}

decreaseButton.addEventListener('click', () => {
  decreaseQuantity();
});

increaseButton.addEventListener('click', () => {
  increaseQuantity();
});


// Khởi tạo sự kiện khi click vào size lần nữa sẽ hủy chọn
const sizeRadios = Array.from(document.querySelectorAll('input[type="radio"][name="radio"]'));
const like = Array.from(document.querySelectorAll('input[type="radio"][name="heart"]'));
const errorMessage = document.getElementById('error-message');
let lastClicked = null;

sizeRadios.forEach(radio => {
    radio.addEventListener('click', function() {
        if (this === lastClicked && this.checked) {
            this.checked = false;
            lastClicked = null;
        } else {
            lastClicked = this;
        }
    });
});
like.forEach(radio => {
  radio.addEventListener('click', function() {
      if (this === lastClicked && this.checked) {
          this.checked = false;
          lastClicked = null;
      } else {
          lastClicked = this;
      }
  });
});

const buyButton = document.getElementById('buy-button');
buyButton.addEventListener('click', function() {
    const selectedRadio = sizeRadios.find(radio => radio.checked);
    if (!selectedRadio) {
        errorMessage.textContent = 'Vui lòng chọn size';
    } else {
        errorMessage.textContent = '';
        // Thêm logic mua hàng ở đây nếu size đã được chọn
        // Ví dụ: window.location.href = 'link_den_trang_mua_hang';
    }
});



