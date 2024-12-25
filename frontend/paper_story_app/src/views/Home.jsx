import React from "react";
import Information from "../components/Information";
import NewBooks from "../components/NewBooks";

function Home() {

  return (
    <div>
      <div className="white:bg-slate-800">
        <Information />
        <NewBooks />
        <br />
      </div>
    </div>
  );
}

export default Home;