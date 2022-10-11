import { useState } from "react";
import { Input } from "./Input";
import { Output } from "./Output";

export interface ResultProps {
  "Tip Amount": number;
  "Total": number;
}

export function Calculator() {
  const [result, setResult] = useState<ResultProps[]>([]);

  const [values, setValues] = useState({
    bill: "",
    tip: "",
    people: "",
  });

  // Clear all inputs
  function resetBtn() {
    setValues({
      bill: "",
      tip: "",
      people: "",
    });

    setResult([]);

    const inputCustom = document.querySelector("[data-test=custom]") as HTMLInputElement;
    inputCustom.value = "";
  }

  return (
    <main className="flex flex-col items-center justify-center min-h-screen mb-16">
      <h1 className="text-2xl inline-block tracking-widest my-16 text-[#749598]">
        SPLI <br /> TTER
      </h1>

      <div className="bg-white max-w-4xl w-full rounded-md px-6 py-8 grid md:grid-cols-2 gap-12 shadow-md">
        <Input setResult={setResult} setValues={setValues} values={values} />
        <Output result={result} resetBtn={resetBtn} />
      </div>
    </main>
  );
}
