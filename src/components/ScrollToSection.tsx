import React, { useRef } from "react";
import "./ScrollToSection.css";

export default function ScrollToSection() {
  const targetRef = useRef<HTMLDivElement | null>(null);

  const handleScroll = () => {
    if (targetRef.current) {
      targetRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      {/* Header */}
      <div className="header">
        <div className="header-content">
          <h1>🧭 Cuộn tới nội dung</h1>
        </div>
        <button onClick={handleScroll} className="scroll-btn">
          Đi tới phần nội dung
        </button>
      </div>

      {/* Nội dung giả lập */}
      <div ref={targetRef} className="content">
        <p>Đây là nội dung giả lập để tạo khoảng cách cho trang...</p>
        <p>Bạn có thể thêm nhiều đoạn như thế này để tăng chiều dài.</p>
        <p>Cuộn trang sẽ mượt mà hơn khi có nhiều nội dung.</p>
      </div>
    </div>
  );
}
