import React, { useMemo, useState } from "react";

export default function RandomQuote() {
  const Quotes = [
    "Học, học nữa, học mãi.",
    "Thất bại là mẹ thành công.",
    "Không gì là không thể.",
    "Kiến tha lâu đầy tổ.",
    "Muốn đi nhanh hãy đi một mình, muốn đi xa hãy đi cùng nhau."
  ]

  const [quote, setQuote] = useState<string>("");
  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * Quotes.length);
    setQuote(Quotes[randomIndex])
  }
 
  return (
    <div>
      <h2>🧠 Cau noi truyen cam hung hom nay</h2>
      <p>{quote}</p>
      <button onClick={getRandomQuote}>Lay cau noi moi</button>    
    </div>
  );
}

