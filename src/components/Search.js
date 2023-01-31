import React, { useState } from "react";
import pic from "./image/git.png";
import Display from "./Display";
import "../index.css";
const Search = () => {
  const [userName, setUserName] = useState("");
  const [data, setData] = useState({});
  const [show, setshow] = useState(false);
  const onChangeHandler = (e) => {
    setUserName(e.target.value);
    // console.log(userName);
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (userName !== "") {
      fetch(`https://api.github.com/users/${userName}`)
        .then((result) => {
          return result.json();
          // console.log(result.json());
        })
        .then((value) => {
          console.log(value);
          if (value.message === "Not Found") {
            alert("invalid username");
            setUserName("");
          } else {
            setshow(true);
            setData(value);
            setUserName("");
          }
        });
    } else {
      alert("Please Enter Username");
      setUserName("");
    }
  };
  return (
    <div>
      <div className="md:mx-20 lg:mx-36 flex-row ">
        <img src={pic} alt="" className="mx-auto" />
        <h1 className="font-mono text-lg font-extrabold my-5 md:text-4xl md:my-12">
          Enter Github User Profile here
        </h1>
        <form
          action=""
          className="op"
          autoComplete="off"
          onSubmit={onSubmitHandler}
        >
          <div className="my-9">
            <input
              type="text"
              className="w-9/12 border-slate-900 h-10 font-sans rounded-2xl pl-5 border"
              placeholder="Search here"
              value={userName}
              onChange={onChangeHandler}
            />
          </div>
          <div className=" my-4 md:my-9">
            <button className="bg-sky-600 px-10 md:px-12 py-4 font-bold font-neutral-400 text-white rounded-full hover:bg-zinc-200 hover:text-sky-800">
              Search
            </button>
          </div>
        </form>
      </div>
      {show && <Display nam={data}></Display>}
    </div>
  );
};

export default Search;
