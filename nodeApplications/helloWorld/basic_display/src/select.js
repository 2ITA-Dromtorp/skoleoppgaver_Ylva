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
                        <th>kjønn</th>
                        {/* add more colums based on your data structure */}
                    </tr>
                </thead>
                <tbody>
                    {customersData.map((customer) => (
                        <tr key={customer.ElevID}> 
                            <td>{customer.ElevID}</td>
                            <td>{customer.fornavn}</td>
                            <td>{customer.etternavn}</td>
                            <td>{customer.datamaskin}</td>
                            <td>{customer.hobby}</td>
                            <td>{customer.klasse}</td>
                            <td>{customer.kjønn}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}