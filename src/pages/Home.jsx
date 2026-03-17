import earth from "../../assets/images/earth.png";

function Home() {

    return (

        <div className="page">

            <h1>AI Climate Prediction System</h1>

            <p>
                Monitor climate data and get AI based climate predictions.
            </p>

            <img src={earth} alt="earth" width="250" />

        </div>

    )

}

export default Home