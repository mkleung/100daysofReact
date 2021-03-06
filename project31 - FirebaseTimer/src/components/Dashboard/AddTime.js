import React, { useState } from "react";
import firebase from "../../model/firebase";

const AddTimeEntryForm = () => {
  const [title, setTitle] = useState("");
  const [time, setTime] = useState("");

  const onSubmit = e => {
    e.preventDefault();
  };

  // const onSubmit = e => {
  //   e.preventDefault();
  //   firebase
  //     .firestore()
  //     .collection("times")
  //     .add({
  //       title: title,
  //       time_seconds: parseInt(time)
  //     })
  //     .then(() => {
  //       setTitle("");
  //       setTime("");
  //     });
  // };
  return (
    <>
      <form
        className="bg-white shadow-md rounded p-10 ml-5"
        onSubmit={onSubmit}
      >
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              for="inline-full-name"
            >
              Add Title
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              type="text"
              value={title}
              onChange={e => setTitle(e.currentTarget.value)}
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="inline-full-name"
            />
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              for="inline-username"
            >
              Seconds
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              type="number"
              value={time}
              onChange={e => setTime(e.currentTarget.value)}
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            />
          </div>
        </div>

        <div className="md:flex md:items-center">
          <div className="md:w-1/3" />
          <div className="md:w-2/3">
            <button
              className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
              type="submit"
            >
              Add Time
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default AddTimeEntryForm;
