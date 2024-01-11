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

    //middleware


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
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}