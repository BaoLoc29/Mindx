// Sử dụng JavaScript để include header và footer
fetch("header.html")
    .then((response) => response.text())
    .then((data) => {
        document.querySelector("#header").innerHTML = data;
        // Thêm sự kiện đăng xuất
        document
            .querySelector("#logoutButton")
            .addEventListener("click", function (e) {
                e.preventDefault();
                var isConfirmed = confirm("Bạn có chắc chắn muốn đăng xuất?");
                if (isConfirmed) {
                    window.location.href = "index.html";
                    localStorage.removeItem("email");
                    localStorage.removeItem("password");
                } else {
                    console.log("Đăng xuất thất bại.");
                }
            });

        // Kiểm tra trạng thái đăng nhập
        function checkLoginState() {
            var email = localStorage.getItem("email");
            var password = localStorage.getItem("password");
            if (email && password) {
                var loginButton = document.getElementById("loginButton");
                var userDropdown = document.getElementById("userDropdown");
                loginButton.style.display = "none";
                userDropdown.style.display = "block";
            }
        }

        checkLoginState();
    });

fetch("footer.html")
    .then((response) => response.text())
    .then((data) => {
        document.querySelector("#footer").innerHTML = data;
    });