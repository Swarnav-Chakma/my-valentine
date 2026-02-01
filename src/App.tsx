"use client";
import { useState } from "react";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "No",
      "Are you sure?",
      "What if I asked really nicely?",
      "Pretty please",
      "With a cheesecake on top",
      "What about a rice beer",
      "PLEASE POOKIE",
      "But :*(",
      "I am going to die",
      "Yep im dead",
      "ok ur talking to Swarnav's ghost rn",
      "please babe",
      ":((((",
      "PRETTY PLEASE",
      "Maiṁ mara gi'ā hāṁ",
      "No :(",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="flex h-screen flex-col items-center justify-center bg-pink-400">
      {yesPressed ? (
        <>
          <img src="https://media1.tenor.com/m/9OoAFz-RAGoAAAAd/house-md-reaction.gif" />
          <div className="my-4 text-4xl font-bold">WOOOOOO!!! LESGOOOOO!! ;))</div>
        </>
      ) : (
        <>
          <img
            className="h-[200px]"
            src="https://img1.picmix.com/output/pic/normal/0/1/6/3/12323610_2cd41.gif"
          />
          <h1 className="my-4 text-4xl">Will you be my Valentine?</h1>
          <div className="flex items-center">
            <button
              className={`mr-4 rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700`}
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Yes
            </button>
            <button
              onClick={handleNoClick}
              className=" rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700"
            >
              {noCount === 0 ? "No" : getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
