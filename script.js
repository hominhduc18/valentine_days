onload = () => {
    document.body.classList.remove("container");
  };

  const wrapper = document.querySelector(".wrapper");
  const openBtn = document.getElementById("openBtn");
  const closeBtn = document.getElementById("closeBtn");
  
  openBtn.addEventListener("click", () => {
      wrapper.classList.add("open");
      openBtn.style.display = "none";
      closeBtn.style.display = "inline-block";
  });
  
  closeBtn.addEventListener("click", () => {
      wrapper.classList.remove("open");
      closeBtn.style.display = "none";
      openBtn.style.display = "inline-block";
  });

document.addEventListener("DOMContentLoaded", function () {
    function createBird() {
        let bird = document.createElement("img");
        bird.src = "bird.png"; // Đường dẫn ảnh chim
        bird.classList.add("bird");

        // Vị trí xuất hiện ngẫu nhiên trên cao
        let randomTop = Math.random() * window.innerHeight * 0.5;
        bird.style.top = `${randomTop}px`;
        bird.style.left = "-100px"; // Bắt đầu từ bên trái

        // Thêm tốc độ bay ngẫu nhiên
        let duration = Math.random() * 5 + 3;
        bird.style.animationDuration = `${duration}s`;

        document.getElementById("birds-container").appendChild(bird);

        // Xóa chim khi bay hết màn hình
        setTimeout(() => {
            bird.remove();
        }, duration * 1000);
    }

    function createFlyingText() {
        let text = document.createElement("div");
        text.classList.add("flying-text");
        text.innerText = "83 86 Mãi Đỉnh❤️";

        // Vị trí xuất hiện ngẫu nhiên
        let randomTop = Math.random() * window.innerHeight * 0.7;
        text.style.top = `${randomTop}px`;
        text.style.left = "-150px"; // Xuất hiện từ bên trái

        // Thời gian bay ngẫu nhiên
        let duration = Math.random() * 6 + 4;
        text.style.animationDuration = `${duration}s`;

        document.getElementById("text-container").appendChild(text);

        // Xóa chữ khi bay hết màn hình
        setTimeout(() => {
            text.remove();
        }, duration * 1000);
    }

    setInterval(createBird, 2000); // Cứ 2 giây tạo 1 con chim bay
    setInterval(createFlyingText, 3000); // Cứ 3 giây tạo 1 chữ bay
});
