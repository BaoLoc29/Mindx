document.addEventListener("DOMContentLoaded", function () {
  const registerForm = document.getElementById("registerForm");

  registerForm.addEventListener("submit", function (event) {
      event.preventDefault();

      // Lấy giá trị từ các trường input
      const name = document.getElementById("name").value;
      const phoneNumber = document.getElementById("sodth").value;
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;
      const confirmPassword = document.getElementById("confirmPassword").value;

      // Kiểm tra điều kiện và hiển thị thông báo lỗi nếu cần
      const notification = document.getElementById("notification");
      notification.innerHTML = ""; // Đảm bảo thông báo trống trước khi kiểm tra

      if (name.trim() === "" || (/[a-zA-Z0-9]/.test(name))) {
          displayError("Họ và tên không được để trống và không được là chứa ký tự và số!");
          return;
      }

      if (phoneNumber.trim() === "" || !(/^\d+$/.test(phoneNumber))) {
          displayError("Số điện thoại chỉ được nhập trường chữ số và không được để trống!");
          return;
      }

      if (!isValidEmail(email)) {
          displayError("Email không hợp lệ!");
          return;
      }

      if (password.length < 4 || password.trim() === "") {
          displayError("Mật khẩu phải có ít nhất 4 ký tự và không được để trống!");
          return;
      }

      if (password !== confirmPassword) {
          displayError("Mật khẩu nhập lại không khớp!");
          return;
      }

      registerForm.submit();
  });

  function displayError(message) {
      const errorDiv = document.createElement("div");
      errorDiv.classList.add("alert", "alert-danger");
      errorDiv.textContent = message;
      notification.appendChild(errorDiv);
      errorDiv.style.textAlign="center";
      errorDiv.style.color = "red";
  }

  function isValidEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
  }
});