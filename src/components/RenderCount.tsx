import React, { useState, useRef, useEffect } from 'react'

export default function RenderCount() {
  const [value, setValue] = useState("")
  const renderCount = useRef(0)

  useEffect(() => {
    renderCount.current += 1;
  })
  
    return (
    <div>
      <h2>🔢 Component Render Counter</h2>
      <label htmlFor="">Input: </label><input type="text" onChange={(e) => setValue(e.target.value)}/>
      <p>Component da render: {renderCount.current} lan</p>
    </div>
  )
}

