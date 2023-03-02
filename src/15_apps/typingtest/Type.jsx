import React, { useEffect, useRef, useState } from "react";

const getcloud = () =>
  `Ephemeral Abundance Benevolent Conundru Diaphanous Fortuitous Grandiose Hypocrisy Imminent Juxtaposition Kindle Luminous Mellifluous Nostalgia Obscure Pensive Quaint Resilient Surreptitious Trepidation Ubiquitous Verbose Wistful Xenophobia Yearning Zealous Amicable Belligerent Capitulate Derivative`.split(
    " "
  );

// *************************
function Word(props) {
  const { text, active, correct } = props;

  const render = useRef(0);

  useEffect(() => {
    render.current += 1;
  });

  if (correct === true) {
    return <span className="text-green-600">{text} </span>;
  }
  if (correct === false) {
    return <span className="text-red-600">{text} </span>;
  }
  if (active) {
    return <span className="text-blue-600 text-lg font-bold">{text} </span>;
  }
  return <span>{text} </span>;
}
Word = React.memo(Word);

// *************************
function Timer(props) {
  const { correctWord, startCounting } = props;
  const [timeElapsed, setTimeElapsed] = useState(0);

  useEffect(() => {
    let id;
    if (startCounting) {
      id = setInterval(() => {
        setTimeElapsed((oldTime) => oldTime + 1);
      }, 1000);
    }

    return () => {
      clearInterval(id);
    };
  }, [startCounting]);

  const minutes = timeElapsed / 60;
  return (
    <div>
      <p>Time: {timeElapsed}</p>
      <p>Speed: {(correctWord / minutes || 0).toFixed(2)} WPM</p>
    </div>
  );
}

// *************************
const Type = () => {
  const [userInput, setUserInput] = useState("");
  const cloud = useRef(getcloud());
  const [activeWordIndex, setActiveWordIndex] = useState(0);
  const [correctWordArray, setcorrectWordArray] = useState([]);
  const [startCounting, setStartCounting] = useState(false);

  const processInput = (value) => {
    if (!startCounting) {
      setStartCounting(true);
    }

    if (value.endsWith(" ")) {
      if (activeWordIndex === cloud.current.length) {
        setStartCounting(true);
        setUserInput("Completed");

        return;
      }

      setActiveWordIndex((index) => index + 1);
      setUserInput("");

      setcorrectWordArray((data) => {
        const word = value.trim();
        const newResult = [...data];
        newResult[activeWordIndex] = word === cloud.current[activeWordIndex];
        return newResult;
      });
    } else {
      setUserInput(value);
    }
  };

  return (
    <>
      <div className=" flex flex-col items-center py-4 space-y-5 w-11/12 mx-auto">
        <h1 className="text-3xl">Typing test</h1>
        <Timer
          startCounting={startCounting}
          correctWord={correctWordArray.filter(Boolean).length}
        />
        <p className="w-1/2 mx-auto">
          {cloud.current.map((word, index) => {
            return (
              <Word
                key={index}
                text={word}
                active={index === activeWordIndex}
                correct={correctWordArray[index]}
              />
            );
          })}
        </p>
        <input
          className="border-b border-slate-400 outline-none w-2/4 mx-auto text-center "
          type="text"
          value={userInput}
          onChange={(e) => processInput(e.target.value)}
          placeholder="Get Started..."
        />
      </div>
    </>
  );
};

export default Type;
