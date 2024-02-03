import React, { useState } from "react";

const StartApplicationButton: React.FC<{ onClick: () => void }> = ({ onClick }) => {
  return (
    <button onClick={onClick}>Start Application</button>
  )
}

export default StartApplicationButton;