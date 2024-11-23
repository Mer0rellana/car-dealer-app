"use client"
import { useRef, useState } from "react"
import { TDrop } from "../types"

interface DropdownProps {
  options: TDrop[],
  placeholder: string,
  selected: TDrop | null
  onChange: (option: TDrop) => void,
  label: string
}

export const Dropdown = ({ options, selected, onChange, placeholder, label }: DropdownProps) => {

  const [isOpen, setOpen] = useState<boolean>(false)
  const ref = useRef(null)

  const toggleDropdown = () => {
    setOpen(!isOpen);
  };


  return (
    <div ref={ref} className="w-64 my-2">
      <label htmlFor="" className="font-bold text-sm">{label}</label>
      <div className="relative bg-violet-100 text-gray-300 
          font-normal border-[1px] rounded-md py-2 px-5 cursor-pointer text-center text-xl" onClick={toggleDropdown}>{
          selected ? <span>{selected.option}</span>
            : <span>{placeholder}</span>
        }</div>

      {
        isOpen && (
          <div className="absolute z-10 h-32 overflow-auto bg-white divide-y divide-gray-200 rounded-lg w-64">
            <ul className="text-center font-semibold text-gray-800">
              {
                options.map((opt, i) => (
                  <li key={i} onClick={()=>{onChange(opt), setOpen(!isOpen)}} className={`cursor-pointer p-2 odd:bg-violet-50 even:bg-violet-100 hover:bg-violet-200 transition duration-150`}>
                    {opt.option}
                  </li>
                ))
              }
            </ul>
          </div>
        )
      }

    </div>)
}
