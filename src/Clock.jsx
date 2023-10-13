import { Break, Session, Timer } from "./Components"

export const Clock = () => {
  return (
    <div id="clock" 
    className="text-white"> 
      <h1 id="title" 
      className="pt-4 text-center">25 + 5 Clock</h1>
      <Break />
      <Session />
      <Timer />
    </div>
  )
}