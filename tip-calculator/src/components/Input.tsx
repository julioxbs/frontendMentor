import personIcon from "../assets/icon-person.svg";
import dolarIcon from "../assets/icon-dollar.svg";
import * as ToggleGroup from "@radix-ui/react-toggle-group";
import { useEffect, useState } from "react";
import { ResultProps } from "./Calculator";

const tipValues = ["5", "10", "15", "25", "50"];
type valuesType = { bill: string; tip: string; people: string };

interface InputProps {
  setResult: (value: ResultProps[]) => void;
  values: valuesType;
  setValues: (value: valuesType) => void;
}

export function Input({ setResult, setValues, values }: InputProps) {
  const [errorMessage, setError] = useState<string>("");

  function getValuesFromInput(e: any) {
    setValues({ ...values, [e.target.name]: e.target.value });
  }

  useEffect(() => {
    const { bill, people, tip } = values;

    if (bill && tip && people) {
      if (parseInt(people) === Number(people)) {
        const billPerPerson = Number(bill) / parseInt(people);
        const tipPerPerson = billPerPerson * (Number(tip) / 100);
        const totalBill = billPerPerson + tipPerPerson;
        setResult([{ "Tip Amount": tipPerPerson, Total: totalBill }]);
      } else {
        setError("Can't be float number");
      }
    }
  }, [values]);

  return (
    <div className="flex flex-col gap-12">
      <div>
        <label className="relative text-[#65797A]">
          <span className="block mb-2">Bill</span>
          <input
            data-test="bill"
            name="bill"
            type="number"
            value={values.bill}
            placeholder="0"
            className="inputStyle"
            onInput={(e) => getValuesFromInput(e)}
          />
          <img
            className="absolute top-[44px] left-2"
            src={dolarIcon}
            alt="dolar icon"
          />
        </label>
      </div>

      <div>
        <p className="mb-4 text-[#65797A]">Select Tip %</p>
        <ToggleGroup.Root
          type="single"
          className="grid grid-cols-3 gap-2"
          value={values.tip}
          onValueChange={(value) => setValues({ ...values, ["tip"]: value })}
        >
          {tipValues.map((tip, index) => (
            <ToggleGroup.Item
              key={index}
              data-test={tip}
              value={tip}
              className={`buttonStyle ${
                values.tip === tip ? "active" : "noActive"
              }`}
            >
              {tip}%
            </ToggleGroup.Item>
          ))}
          <input
            name="tip"
            onInput={(e) => getValuesFromInput(e)}
            type="number"
            placeholder="Custom"
            data-test="custom"
            className="inputStyle
            placeholder:text-[#5D7975] placeholder:text-center"
          />
        </ToggleGroup.Root>
      </div>

      <label className="flex flex-col gap-2 text-[#65797A]">
        <p className="flex justify-between">
          Number of People
          <span
            data-test="errorMessage"
            className={errorMessage ? "block text-red-500" : "hidden"}
          >
            {errorMessage}
          </span>
        </p>

        <div className="relative">
          <img
            className="absolute top-[15px] left-2"
            src={personIcon}
            alt="person icon"
          />
          <input
            value={values.people}
            type="number"
            name="people"
            data-test="people"
            placeholder="0"
            className={`inputStyle ${
              errorMessage ? "border-red-500 focus:border-red-500" : ""
            }`}
            onInput={(e) => {
              const target = e.target as HTMLInputElement;

              if (Number(target.value) > 0 || target.value === "") {
                getValuesFromInput(e);
                setError("");
              } else {
                setError("Can't be zero");
              }
            }}
          />
        </div>
      </label>
    </div>
  );
}
