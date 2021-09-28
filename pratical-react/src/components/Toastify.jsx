import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import React from "react";

toast.configure();
function Toastify() {
  const toastify = () => {
    toast("Basic notification!", {
      position: toast.POSITION.BOTTOM_LEFT,
      autoClose: 2000,
    });
    toast.dark("Dark Toastify", { position: toast.POSITION.TOP_CENTER });
  };

  return (
    <div>
      <button onClick={toastify}>Toastify</button>
    </div>
  );
}

export default Toastify;
