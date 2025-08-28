import React, { useState, useEffect } from "react";

export default function KeyTracker() {
  const [lastKey, setLastKey] = useState<string>("");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      setLastKey(e.key);
    };

    window.addEventListener("keydown", handleKeyDown);

    // cleanup khi component unmount
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div>
      <p>💻 Phim ban vua nhan: </p>
      {lastKey}
    </div>
  );
}
