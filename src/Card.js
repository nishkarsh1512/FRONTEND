const Card = (props) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{props.data.airline}</h5>
        <p className="card-text">{props.data.departureDate}</p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">{props.data.departureTime}</li>
        <li className="list-group-item">{props.data.destination}</li>
        <li className="list-group-item">{props.data.flightNumber}</li>
        <li className="list-group-item">{props.data.terminal}</li>
        <li className="list-group-item">{props.data.gateNumber}</li>
      </ul>
    </div>
  )
}

export default Card
