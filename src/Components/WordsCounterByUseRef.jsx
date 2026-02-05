import { useRef, useState, useEffect } from "react";

const WordsCounterByUseRef = () => {
  const wordCountRef = useRef(0);
  const counterDisplayRef = useRef(null);
  const textAreaRef = useRef(null);
  const [status, setStatus] = useState(null);
 

  useEffect(()=> {
      textAreaRef.current.focus();
  },[]);

  const handleInput = (e) => {
    const text = e.target.value.trim();

    const word = text === "" ? [] : text.split(/\s+/);

    wordCountRef.current = word.length;

    counterDisplayRef.current.innerText = `${wordCountRef.current} words`;

    if (wordCountRef.current > 20) {
      setStatus("⚠️ Limit Reached ...");
    } else {
      setStatus(null);
    }
  };
  return (
    <div style={{ width: "350px", margin: "40px auto" }}>
      <h1>📝 Words Counter</h1>
      <textarea
        name=""
        id=""
        placeholder="Type Something..."
        rows={5}
        onInput={handleInput}
        ref={textAreaRef}
        style={{width: "100%", padding: "20px", fontFamily: "sans-serif"}}
      ></textarea>
      <div style={{display: "flex", gap: "42%" }}>
      <p ref={counterDisplayRef}>0 words</p>
      <p style={{color : "#f00b0b"}}>{status}</p>
      </div>
    </div>
  );
};

export default WordsCounterByUseRef;
