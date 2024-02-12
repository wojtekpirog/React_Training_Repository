import { useState, useEffect } from "react";
import PageHeading from "./PageHeading";
import Main from "./Main";

export default function App() {
  const [advice, setAdvice] = useState("");
  const [count, setCount] = useState(0);

  async function getAdvice() {
    const response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json();
    setAdvice(data.slip.advice);
    setCount(count + 1);
  }

  useEffect(() => {
    getAdvice();
  }, []);

  return (
    <div>
      <PageHeading />
      <Main onClickFunction={getAdvice} advice={advice} count={count} />
    </div>
  );
}