import { useState } from "react";

export default function StarShipCards ({ ships }) {

    let [hide , setHide] = useState(true)

    const handleClick = () => {
        setHide(!hide)
    }

    return (


        <div className="column">
            <div className="card">
                <h2>{ships.name}</h2>
                <br />
                <button onClick={handleClick}>More Info</button>
                <br />
                <br />
                <div hidden={hide}>
                    <p>Model: {ships.model}</p>
                    <br />
                    <br />
                    <p>Manufacturer: {ships.manufacturer}</p>
                    <br />
                    <br />
                    <p>{ships.starship_class}</p>
                </div>

            </div>

            <br />
            
        </div>
    )
}