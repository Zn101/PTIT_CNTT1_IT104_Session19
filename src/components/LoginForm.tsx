import React, { useReducer, useState } from "react";

type State = {
  loading: boolean;
  success: boolean;
  error: string | null;
};

type Action =
  | { type: "LOGIN_START" }
  | { type: "LOGIN_SUCCESS" }
  | { type: "LOGIN_ERROR"; payload: string };

const initialState: State = {
  loading: false,
  success: false,
  error: null,
};

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "LOGIN_START":
      return { loading: true, success: false, error: null };
    case "LOGIN_SUCCESS":
      return { loading: false, success: true, error: null };
    case "LOGIN_ERROR":
      return { loading: false, success: false, error: action.payload };
    default:
      return state;
  }
}

export default function LoginForm() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });

    // Giả lập gọi API bằng setTimeout
    setTimeout(() => {
      if (username === "admin" && password === "123456") {
        dispatch({ type: "LOGIN_SUCCESS" });
      } else {
        dispatch({ type: "LOGIN_ERROR", payload: "Sai tài khoản hoặc mật khẩu" });
      }
    }, 1500);
  };

  return (
    <div
      style={{
        maxWidth: "300px",
        margin: "50px auto",
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "8px",
        textAlign: "center",
      }}
    >
      <h2>🔑 Đăng nhập</h2>
      <form onSubmit={handleLogin} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <input
          type="text"
          placeholder="Tên người dùng"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          disabled={state.loading}
          style={{ padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }}
        />
        <input
          type="password"
          placeholder="Mật khẩu"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={state.loading}
          style={{ padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }}
        />
        <button
          type="submit"
          disabled={state.loading}
          style={{
            padding: "10px",
            background: "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          {state.loading ? "Đang đăng nhập..." : "Đăng nhập"}
        </button>
      </form>

      {/* Hiển thị trạng thái */}
      {state.success && <p style={{ color: "green", marginTop: "10px" }}>✅ Đăng nhập thành công!</p>}
      {state.error && <p style={{ color: "red", marginTop: "10px" }}>{state.error}</p>}
    </div>
  );
}
