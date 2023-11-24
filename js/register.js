 function validateForm() {
    // Kiểm tra tất cả các trường nhập liệu
    var isValid = true;

    // Kiểm tra 
    function validateForm() {
      var fullName = document.getElementById("fullName").value;
      var email = document.getElementById("email").value;
      var phone = document.getElementById("phone").value;
      var password = document.getElementById("password").value;
      var confirmPassword = document.getElementById("confirmPassword").value;
  
      if (fullName === '' || email === '' || phone === '' || password === '' || confirmPassword === '') {
        alert("Vui lòng điền đầy đủ thông tin");
        return false;
      }
      
      // Kiểm tra họ tên không chứa ký tự đặc biệt và chữ số
      var nameFormat = /^[^\d\s!@#$%^&*()_+={}|<>?`~\[\]\\;:'",./]+$/;
      if (!nameFormat.test(fullName)) {
        alert("Họ tên không được chứa ký tự đặc biệt và số");
        return false;
      }
  
      var emailFormat = /\S+@\S+\.\S+/;
      if (!emailFormat.test(email)) {
        alert("Vui lòng nhập email hợp lệ");
        return false;
      }
  
      if (password.length < 8) {
        alert("Mật khẩu cần ít nhất 8 ký tự");
        return false;
      }
  
      if (password !== confirmPassword) {
        alert("Mật khẩu nhập lại không khớp");
        return false;
      }
  
      var phoneFormat = /^\d{10,}$/;
      if (!phoneFormat.test(phone)) {
        alert("Vui lòng nhập số điện thoại hợp lệ");
        return false;
      }
  
      return true;
    }

    // Kiểm tra email và các trường khác tương tự

    // Kiểm tra tất cả các trường nhập liệu có hợp lệ không
    if (isValid) {
      // Nếu hợp lệ, hiển thị thông báo đăng ký thành công
      var successMessage = document.createElement("p");
      successMessage.textContent = "Đăng ký thành công!";
      successMessage.style.color = "green";
    } else {
      // Nếu có lỗi, hiển thị thông báo lỗi và ngăn form được submit
      alert("Vui lòng điền thông tin đầy đủ và chính xác.");
      return false;
    }
  }