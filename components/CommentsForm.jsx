import React, { useState, useEffect, useRef } from "react";

import { submitComment } from "../services";

const CommentsForm = ({ slug }) => {
  const [error, setError] = useState(false);
  const [localStorage, setLocalStorage] = useState(null);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const commentEl = useRef();
  const nameEl = useRef();
  const emailEl = useRef();
  const storeDataEl = useRef();

  useEffect(() => {
    nameEl.current.value = window.localStorage.getItem("name");
    emailEl.current.value = window.localStorage.getItem("email");
  }, []);

  const handleCommentSubmission = () => {
    setError(false);

    const { value: comment } = commentEl.current;
    const { value: name } = nameEl.current;
    const { value: email } = emailEl.current;
    const { checked: storeData } = storeDataEl.current;

    if (!comment || !name || !email) {
      setError(true);
      return;
    }

    const commentObj = {
      name,
      email,
      comment,
      slug,
    };
    if (storeData) {
      window.localStorage.setItem("name", name);
      window.localStorage.setItem("email", email);
    } else {
      window.localStorage.removeItem("name", name);
      window.localStorage.removeItem("email", email);
    }

    submitComment(commentObj).then((res) => {
      setShowSuccessMessage(true);
      setTimeout(() => {
        setShowSuccessMessage(false);
      }, 3000);
    });
  };

  return (
    <div className="bg-slate-800 shadow-xl rounded-xl p-8 pb-12 mb-8">
      <h3 className="text-white text-xl mb-8 font-semibold border-b border-slate-700 pb-4">
        Comment
      </h3>
      <div className="grid grid-cols-1 gap-4 mb-4">
        <textarea
          ref={commentEl}
          className="p-4 outline-none w-full rounded-lg shadow-lg focus:ring-2 focus:ring-slate-400 bg-slate-600 text-slate-500"
          placeholder="Comment"
          name="comment"
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
        <input
          type="text"
          ref={nameEl}
          placeholder="Name"
          name="name"
          className="py-2 px-4 outline-none w-full rounded-lg shadow-lg focus:ring-2 focus:ring-slate-400 bg-slate-600 text-slate-500"
        />
        <input
          type="text"
          ref={emailEl}
          placeholder="Email"
          name="email"
          className="py-2 px-4 outline-none w-full rounded-lg shadow-lg focus:ring-2 focus:ring-slate-400 bg-slate-600 text-slate-500"
        />
      </div>
      <div className="grid grid-cols-1 gap-4 mb-4">
        <div>
          <input
            ref={storeDataEl}
            type="checkbox"
            id="storeData"
            name="storeData"
            value="true"
          />
          <label
            className="text-slate-500 ml-2 cursor-pointer"
            htmlFor="storeData"
          >
            Remember me for next time
          </label>
        </div>
      </div>
      {error && (
        <p className="text-xs text-rose-600">All fields are required.</p>
      )}
      <div className="mt-8">
        <button
          type="button"
          onClick={handleCommentSubmission}
          className="ease-in-out duration-300 bg-sky-600 hover:bg-sky-700 hover:shadow-xl inline-block  text-lg font-medium rounded-full text-white px-8 py-3 cursor-pointer"
        >
          Submit
        </button>
        {showSuccessMessage && (
          <span className="text-xl float-right font-semibold mt-3 text-emerald-500">
            Comment submitted for review.
          </span>
        )}
      </div>
    </div>
  );
};

export default CommentsForm;
