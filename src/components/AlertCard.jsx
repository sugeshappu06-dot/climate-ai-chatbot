function AlertCard({ type, message }) {

    return (

        <div className={"alert " + type}>
            {message}
        </div>

    )

}

export default AlertCard