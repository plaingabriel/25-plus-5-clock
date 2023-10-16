import { Break, Session, Timer } from "./Components"
import { useEffect, useState } from "react"

export const Clock = () => {
  const initialState = {
    break: 5,
    session: 25,
    play: false,
    timingType: "SESSION",
    timeLeft: 1500,
  }

  const [state, setState] = useState({ ...initialState });

  const timeOut = setTimeout(() => {
    if (state.timeLeft && state.play) {
      setState({ ...state, timeLeft: state.timeLeft - 1 });
    }      
  }, 1000);

  const handleDreceaseBreak = () => {
    if (state.break > 1) {
      setState(prevState => ({ ...prevState, break: state.break - 1 }));        
    }
  }

  const handleDreceaseSession = () => {
    if (state.session > 1) {
      setState(prevState => ({ ...prevState, session: state.session - 1, timeLeft: state.timeLeft - 60 }));        
    }
  }

  const handleIncreaseBreak = () => {
    if (state.break < 60) {
      setState({ ...state, break: state.break + 1 });        
    }
  }

  const handleIncreaseSession = () => {
    if (state.session < 60) {
      setState(prevState => ({ ...prevState, session: state.session + 1, timeLeft: state.timeLeft + 60 }));        
    }
  }

  const resetTimer = () => {
    const audio = document.getElementById("beep");
      if (!state.timeLeft && state.timingType === "SESSION") {
          setState(prevState => ({ ...prevState, timeLeft: state.break * 60, timingType: "BREAK" }));
          audio.play();
      }
      if (!state.timeLeft && state.timingType === "BREAK") {
        setState(prevState => ({ ...prevState, timeLeft: state.session * 60, timingType: "SESSION" }));
        audio.pause();
        audio.currentTime = 0;      
      }
  }

  const clock = () => {
    if(state.play){
      timeOut
      resetTimer()
    } else {
      clearTimeout(timeOut)
    }
  }

  const reset = () => {
    setState(prevState => ({ ...prevState, ...initialState }));
    clearTimeout(timeOut);
    const audio = document.getElementById("beep");
    audio.pause();
    audio.currentTime = 0;
  }

  useEffect(() => {
    clock()
  }, [state.play, state.timeLeft, timeOut])

  const format = () => {
    const minutes = Math.floor(state.timeLeft/60);
    const seconds = state.timeLeft - (minutes*60);
    const minFormat = minutes < 10 ? '0' + minutes.toString() : minutes.toString();
    const secFormat = seconds < 10 ? '0' + seconds.toString() : seconds.toString();

    return `${minFormat}:${secFormat}`;
  }

  const handlePlay = () => {
    clearTimeout(timeOut);
    setState({ ...state, play: !state.play});
    }

  let title = state.timingType === "SESSION" ? "Session" : "Break";

  return (
    <div id="clock" 
    className="text-white"> 
      <h1 id="title" 
      className="pt-4 text-center">25 + 5 Clock</h1>
      <Break count={ state.break } increase={ handleIncreaseBreak } decrease={ handleDreceaseBreak } play={ state.play } />
      <Session count={ state.session } increase={ handleIncreaseSession } decrease={ handleDreceaseSession } play={ state.play } />
      <Timer title={ title } timeFormatter={ format() } handlePlay={ handlePlay } reset={ reset }/>
      <audio
      id="beep" 
      preload="auto"
      src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"
      />
    </div>
  )
}