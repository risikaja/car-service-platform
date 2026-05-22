import React, {
    useEffect,
    useState
} from 'react';

import axios from 'axios';


function AdminDashboard() {

    const [parts, setParts] = useState([]);

    const [formData, setFormData] = useState({

        name: '',
        brand: '',
        model: '',
        price: '',
        stock: ''

    });


    const fetchParts = async () => {

        try {

            const response = await axios.get(

                'http://localhost:5000/parts'

            );

            setParts(response.data);

        } catch (error) {

            console.log(error);

        }

    };


    useEffect(() => {

        fetchParts();

    }, []);


    const handleChange = (e) => {

        setFormData({

            ...formData,

            [e.target.name]:
                e.target.value

        });

    };


    const addPart = async () => {

        try {

            await axios.post(

                'http://localhost:5000/parts',

                formData

            );

            alert('Part added');

            fetchParts();

            setFormData({

                name: '',
                brand: '',
                model: '',
                price: '',
                stock: ''

            });

        } catch (error) {

            console.log(error);

        }

    };


    const deletePart = async (id) => {

        try {

            await axios.delete(

                `http://localhost:5000/parts/${id}`

            );

            fetchParts();

        } catch (error) {

            console.log(error);

        }

    };


    return (

        <div className="admin-dashboard">

            <h2>

                Admin Dashboard

            </h2>


            <div className="admin-form">

                <input
                    type="text"
                    name="name"
                    placeholder="Part Name"
                    value={formData.name}
                    onChange={handleChange}
                />

                <input
                    type="text"
                    name="brand"
                    placeholder="Brand"
                    value={formData.brand}
                    onChange={handleChange}
                />

                <input
                    type="text"
                    name="model"
                    placeholder="Model"
                    value={formData.model}
                    onChange={handleChange}
                />

                <input
                    type="number"
                    name="price"
                    placeholder="Price"
                    value={formData.price}
                    onChange={handleChange}
                />

                <input
                    type="number"
                    name="stock"
                    placeholder="Stock"
                    value={formData.stock}
                    onChange={handleChange}
                />

                <button onClick={addPart}>

                    Add Part

                </button>

            </div>


            <div className="admin-parts">

                {

                    parts.map((part) => (

                        <div
                            key={part.part_id}
                            className="admin-card"
                        >

                            <h3>

                                {part.name}

                            </h3>

                            <p>

                                {part.brand}

                            </p>

                            <p>

                                ${part.price}

                            </p>

                            <button

                                onClick={() =>

                                    deletePart(
                                        part.part_id
                                    )

                                }

                            >

                                Delete

                            </button>

                        </div>

                    ))

                }

            </div>

        </div>

    );

}

export default AdminDashboard;