import { ResultProps } from "./Calculator";

const valuesOfInputs = ["Tip Amount", "Total"];

interface Result {
  result: ResultProps[];
  resetBtn: () => void;
}

export function Output({ result, resetBtn }: Result) {
  function printResults(index: number) {
    const objResult: any = result[0];
    
    if (result.length) {
      return objResult[valuesOfInputs[index]].toFixed(2);
    }

    return Number(0).toFixed(2);
  }

  return (
    <div className="bg-[#00494d] py-8 px-4 rounded-md flex flex-col justify-between">
      <div>
        {valuesOfInputs.map((value, index) => (
          <div className="flex justify-between mb-12" key={index}>
            <div>
              <p className="text-white">{value}</p>
              <span className="text-sm text-[#5e7a7d]">/ person</span>
            </div>
            <p className="md:text-5xl text-3xl text-[#26c0ab]" data-test={index}>
              ${printResults(index)}
            </p>
          </div>
        ))}
      </div>

      <button data-test="resetBtn" onClick={resetBtn} disabled={result.length ? false : true} className="resetBtn disabled:bg-[#0D686D]">
        RESET
      </button>
    </div>
  );
}
