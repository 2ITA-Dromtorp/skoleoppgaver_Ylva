import axios from "axios";
import { useEffect, useState } from "react";
import "./table_style.css";



export default function Select() {

    const [customersData, setCustomersData] = useState([]);

    useEffect(() => {
        getCustomersData();
    }, []);

    const getCustomersData = () => {
        axios
            .get("http://localhost:3000/")
            .then(response => {setCustomersData(response.data)})
            .catch(error => console.log(error));
    };

    //delete
    const handleDelete = async (id) =>{
        try {
            await axios.delete('http://localhost:3000/deleteuser/'+id); 
            window.location.reload()
            getCustomersData();
        } catch (error) {
            console.log(error);
        }

    }


    return (
        <div className="table-container">
            <table className="table">
                <thead>
                    <tr>
                        <th>ElevID</th>
                        <th>fornavn</th>
                        <th>etternavn</th>
                        <th>datamaskin</th>
                        <th>hobby</th>
                        <th>klasse</th>
                        <th>kjonn</th>
                        <th>delete</th>
                        {/* add more colums based on your data structure */}
                    </tr>
                </thead>
                <tbody>
                    {customersData.map((customer) => (
                        <tr key={customer.ElevID}> 
                            <td>{customer.ElevID}</td>
                            <td>{customer.Fornavn}</td>
                            <td>{customer.Etternavn}</td>
                            <td>{customer.DatamaskinID}</td>
                            <td>{customer.Hobby}</td>
                            <td>{customer.Klasse}</td>
                            <td>{customer.Kjonn}</td>
                            <td>
                                <button className='deleteklikk' onClick={ e => handleDelete(customer.ElevID)}>delete</button>
                               
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}