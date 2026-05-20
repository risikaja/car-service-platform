import React, { useEffect, useState } from 'react';
import axios from 'axios';

function PartsList() {

    const [parts, setParts] = useState([]);

    useEffect(() => {

        axios
            .get('http://localhost:5000/parts')
            .then((response) => {
                setParts(response.data);
            })
            .catch((error) => {
                console.log(error);
            });

    }, []);

    return (

        <div className="parts-grid">

            {
                parts.map((part) => (

                    <div className="part-card" key={part.part_id}>

                        <div className="part-image">
                            🚗
                        </div>

                        <h3>{part.name}</h3>

                        <p>
                            <strong>Brand:</strong> {part.brand}
                        </p>

                        <p>
                            <strong>Model:</strong> {part.model}
                        </p>

                        <p className="price">
                            ${part.price}
                        </p>

                        <p>
                            <strong>Stock:</strong> {part.stock}
                        </p>

                        <button>
                            Add to Cart
                        </button>

                    </div>

                ))
            }

        </div>

    );
}

export default PartsList;