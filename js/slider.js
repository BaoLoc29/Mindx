// Khai báo biến để theo dõi vị trí hiện tại của slider
let currentSlide = 1;

// Hàm chuyển slide tiếp theo
function nextSlide() {
    currentSlide++;
    if (currentSlide > 3) {
        currentSlide = 1; // Quay lại slide đầu tiên nếu đang ở slide cuối cùng
    }
    updateSlider();
}

// Hàm cập nhật slider để hiển thị slide hiện tại
// sử dụng CSS để thay đổi vị trí của slider bằng cách sử dụng thuộc tính transform để dịch chuyển slider theo chiều ngang
function updateSlider() {
    const slider = document.querySelector('.slider');
    slider.style.transform = `translateX(-${(currentSlide - 1) * 1300}px)`;
    const sliderPosition = document.getElementById('slider-position');
}

// Tự động chuyển slide sau một khoảng thời gian
function autoSlide() {
    setInterval(nextSlide, 4000); // Chuyển slide mỗi 4 giây (4000 milliseconds)
}

// Bắt đầu chạy slider tự động
autoSlide();
