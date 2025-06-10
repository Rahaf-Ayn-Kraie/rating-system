import React, { useState } from "react";
import Dialog from "./components/Dialog";

function App() {
   const [showDialog, setShowDialog] = useState(false);

  const openDialog = () => {
    setShowDialog(true);
  };

  const closeDialog = () => {
    setShowDialog(false);
  };

  return (
    <div className="main-div">
      <h1 className="main-title"> Food Rating App </h1>
      <p className="main-description">Click below to rate which food you like more!</p>

      {!showDialog && <button className="rate-btn" onClick={openDialog}>Rate Food</button>}

      {showDialog && <Dialog onClose={closeDialog} />}
    </div>
  );
}

export default App;
