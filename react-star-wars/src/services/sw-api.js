import { useEffect, useState } from "react";


const useFetch = () => {
    const [starships, setStarships] = useState(null)

    const [isPending, setIsPending] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            const getStarships = async () => {
                try {
                    const response = await fetch(`https://swapi.dev/api/starships/`)

                    const data = await response.json()

                    setStarships(data)

                    setIsPending(false)
                } catch (err) {
                    console.log("error no data of starships")

                    console.log(err)
                }
            }

            getStarships()
        }, 1000)
    }, [])
    return { starships, isPending}
}

export default useFetch;