import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  const [prompt, setPrompt] = useState("");

  const [array, setArray] = useState([]);

  useEffect(() => {
    console.log(array);
  }, array);

  const submit = async () => {
    const gptResult = await axios.post("api/hello", { prompt });

    setArray([...array, { prompt, result: gptResult.data.result }]);
  };
  return (
    <>
      <div>Hello World</div>
      <input
        value={prompt}
        type="text"
        onChange={(e) => {
          setPrompt(e.target.value);
        }}
      />
      <button onClick={(e) => submit()}>send</button>
      {array.map((element, index) => {
        return (
          <div key={index}>
            {index}번째 질문 : {prompt}
            <br />
            {index}번째 답 : {element.result as any}
          </div>
        );
      })}
    </>
  );
}
