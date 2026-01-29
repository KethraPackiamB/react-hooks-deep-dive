import { useState, useEffect } from "react";

const MusicPlayerByUseEffect = () => {
  const [progress, setProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (isPlaying && progress < 100) {
      const interval = setInterval(() => {
        setProgress((prev) => prev + 1);
      }, 1000);
      return () => {
        clearInterval(interval);
      };
    }
  }, [progress, isPlaying]);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  const handlepause = () => {
    setIsPlaying(false);
  };

  const handleRestart = () => {
    setProgress(0);
    setIsPlaying(true);
  };

  return (
    <div>
    <div style={{ width: "500px", textAlign: "center", margin: "40px auto" }}>
      <h1>🎶 Music Player</h1>

      <div
        style={{
          backgroundColor: "#BFC6C4",
          width: "100%",
          height: "20px",
          borderRadius: "10px",
          overflow: "hidden",
          marginBottom: "20px",
        }}
      >
        <div
          style={{
            width: `${progress}%`,
            height: "20px",
            backgroundColor: "#E83C91",
            transition: "width 0.3s",
          }}
        ></div>
      </div>
      <p>{progress}%</p>
      <div style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
        <button onClick={handlePlay}> ▶️ Play </button>
        <button onClick={handlepause}> ⏸️ Pause </button>
        <button onClick={handleRestart}> 🔁 Restart </button>
      </div>
  </div>
  <hr />
  </div>
    
  );
};

export default MusicPlayerByUseEffect;
