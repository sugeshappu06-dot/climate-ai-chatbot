import { useState } from "react"

function CarbonCalculator() {

    const [travel, setTravel] = useState(0)
    const [electric, setElectric] = useState(0)
    const [result, setResult] = useState("")

    const calculate = () => {

        const score = travel * 0.21 + electric * 0.5

        setResult("Carbon Footprint Score: " + score.toFixed(2))

    }

    return (

        <div className="page">

            <h1>Carbon Footprint Calculator</h1>

            <input
                type="number"
                placeholder="Daily travel km"
                onChange={(e) => setTravel(e.target.value)}
            />

            <input
                type="number"
                placeholder="Electric usage kWh"
                onChange={(e) => setElectric(e.target.value)}
            />

            <button onClick={calculate}>Calculate</button>

            <h3>{result}</h3>

        </div>

    )

}

export default CarbonCalculator