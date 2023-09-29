import { useParams } from "react-router-dom"

export default function Profile() {

    const { profile } = useParams();
    console.log(profile);

    return (
        <h1> profilen til {profile} </h1>
    )

}