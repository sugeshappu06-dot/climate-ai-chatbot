import AlertCard from "../components/AlertCard"

function Alerts() {

    return (

        <div className="page">

            <h1>Climate Alerts</h1>

            <AlertCard type="red" message="Flood Risk Warning" />
            <AlertCard type="orange" message="Heatwave Alert" />
            <AlertCard type="yellow" message="Air Pollution Warning" />

        </div>

    )

}

export default Alerts