import React, { useState } from "react";

export default function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState<{ name?: string; email?: string }>({});

  const validateName = (value: string) => {
    if (!value.trim()) {
      return "Truong nay la bat buoc";
    }
    return "";
  };

  const validateEmail = (value: string) => {
    if (!value.trim()) {
      return "Trường này là bắt buộc";
    }
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test/(value)) {
      return "Email khong hop le";
    }
    return "";
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setName(value);
    setErrors((prev) => ({ ...prev, name: validateName(value) }));
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    setErrors((prev) => ({ ...prev, email: validateEmail(value) }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const nameError = validateName(name);
    const emailError = validateEmail(email);

    if (nameError || emailError) {
      setErrors({ name: nameError, email: emailError });
      return;
    }
    alert("Gui thanh cong!");
  };

  const isFormValid = !errors.name && !errors.email && name && email;

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: "flex", flexDirection: "column", gap: "10px" }}
    >
      <div>
        <label>Họ tên:</label>
        <input type="text" value={name} onChange={handleNameChange} />
        {errors.name && <p style={{ color: "red"}}>{errors.name}</p>}
      </div>

      <div>
        <label>Email:</label>
        <input type="email" value={email} onChange={handleEmailChange} />
        {errors.email && <p style={{ color: "red"}}>{errors.email}</p>}
      </div>

      <button type="submit" disabled={!isFormValid}>
        Gửi
      </button>
    </form>
  );
}
