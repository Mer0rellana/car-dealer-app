"use client"
import { Suspense, useEffect, useState } from "react"
import { TCar, TRes } from "../../../types"

export default function Results({
    params,
}: { params: Promise<{ makeId: number, year: string }> }) {

    const [models, setModels] = useState<TRes[]>([])

    useEffect(() => {
        const fetchResult = async () => {
            try {
                let data = await fetch(`https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeIdYear/makeId/${(await params).makeId}/modelyear/${(await params).year}?format=json`)
                let res = await data.json()
                setModels(res.Results)
            } catch (error) {
                console.error("Failed to fetch models:", error);
            }
        }

        fetchResult()
    }, [params])

    return (
        <div className="flex justify-center items-center p-6 h-screen">
            <div className="flex flex-col justify-center items-center bg-violet-300 rounded-3xl shadow-slate-400
      shadow-sm h-2/3 md:w-2/5 w-full p-4">
                <p className="md:text-3xl text-xl font-extrabold uppercase text-violet-900 text-center mb-5">Results for your search</p>
                <div className="h-3/4 w-3/4 justify-between overflow-clip rounded-xl bg-violet-100 border border-solid flex flex-col">
                    <Suspense fallback={<Loading />}>
                        <div className="overflow-x-auto">
                            <table className="table-auto w-full border-collapse">
                                <thead className="bg-violet-600 text-white font-semibold uppercase sticky top-0">
                                    <tr>
                                        <th className="px-4 py-2">Brand</th>
                                        <th className="px-4 py-2">Model</th>
                                    </tr>
                                </thead>
                            </table>
                        </div>
                        <div className="flex-1 overflow-y-auto">
                            <table className="table-auto w-full border-collapse">
                                <tbody className="divide-y divide-violet-200">
                                    {models.map((m, i) => (
                                        <tr
                                            key={i}
                                            className={`odd:bg-violet-50 even:bg-violet-100 hover:bg-violet-200 transition duration-150`}
                                        >
                                            <td className="px-4 py-2 text-violet-700">{m.Make_Name}</td>
                                            <td className="px-4 py-2 text-violet-700">{m.Model_Name}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </Suspense>
                </div>
            </div>
        </div>
    )
}

function Loading() {
    return <p className="text-violet-50 text-xl font-bold">🌀 Loading...</p>;
}