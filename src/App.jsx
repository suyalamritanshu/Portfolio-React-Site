import React, { useState, useEffect } from "react";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import "./App.css"


const App = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 8000);
  }, []);
  return (
    <div className="App">
      {loading ? (
        <ClimbingBoxLoader color={"#F3B042"} loading={loading} size={30} />
      ) : (
        "hello"
      )}
    </div>
  );
};

export default App;
