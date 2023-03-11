import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

export default function Home() {
  const [prompt, setPrompt] = useState("");

  const [array, setArray] = useState([]);

  const router = useRouter();

  useEffect(() => {
    console.log(array);
  }, array);

  const submit = async () => {
    const gptResult = await axios.post("api/hello", { prompt });

    setArray([...array, { prompt, result: gptResult.data.result }] as any);
  };
  return (
    <>
      Landing Page
      <button onClick={(e) => router}></button>
      <div>Hello World</div>
      <input
        value={prompt}
        type="text"
        onChange={(e) => {
          setPrompt(e.target.value);
        }}
      />
      <button onClick={(e) => submit()}>send</button>
      {array.map((element: { prompt: string; result: string }, index) => {
        return (
          <div key={index}>
            {index}번째 질문 : {element.prompt}
            <br />
            {index}번째 답 : {element.result as any}
          </div>
        );
      })}
    </>
  );
}
