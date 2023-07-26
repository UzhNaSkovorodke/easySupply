"use client"

import axios from "axios";
import { useQuery } from "react-query";

interface example {
}

export const QueryTestComponent = (props: example) => {
    const fetchFunc = async () => {
        const {data} = await axios('https://jsonplaceholder.typicode.com/todos/1')
        return data
    }
    const data = useQuery('todos', fetchFunc)

    return (
        <div onClick={() => {
            console.log(data.data)
        }}>QueryTestComponent</div>
    )
}
