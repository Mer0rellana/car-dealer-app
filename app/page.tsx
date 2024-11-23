"use client"
import { useEffect, useState } from "react";
import { Dropdown } from "./components/Dropdown";
import { TCar, TDrop } from "./types";
import { years } from "./year";
import Link from "next/link";

export default function Home() {

  const [models, setModels] = useState<TDrop[]>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        let data = await fetch('https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json')
        let res: { Results: TCar[] } = await data.json()
        setModels(res.Results.map((item: TCar) => ({
          id: item.MakeId,
          option: item.MakeName
        })))
      } catch (error) {
        console.error("Failed to fetch models:", error);
      }
    }

    fetchData()
  }, [])

  const [car, setCar] = useState<TDrop | null>(null)
  const [year, setYear] = useState<TDrop | null>(null)

  return (

    <div className="flex justify-center items-center p-6 h-screen">
      <div className="flex flex-col justify-center items-center bg-violet-300 rounded-3xl shadow-slate-400
      shadow-sm h-1/2 md:w-2/5 w-full p-4">
        <p className="md:text-3xl text-xl font-extrabold uppercase text-violet-900 text-center">Car Dealer App</p>
        <Dropdown options={models} selected={car} onChange={setCar} placeholder="Select Car Model" label="Car Model"></Dropdown>
        <Dropdown options={years} label="Year" onChange={setYear} placeholder="Select Year" selected={year}></Dropdown>

        <Link aria-disabled={car === null || year === null}  className={`my-2 rounded-xl shadow-sm w-20 text-center p-2  
          font-semibold uppercase ${car === null || year === null ? 'pointer-events-none bg-slate-300 text-slate-400':'bg-violet-800 text-violet-50'}`} 
          href={`/result/${car?.id}/${year?.option}`}>Next</Link>
      </div>
    </div>
  );
}
