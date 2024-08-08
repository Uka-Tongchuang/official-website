"use client";

import { useEffect, useState } from "react";

interface DataItem {
    id: number;
    module: string;
    title: string;
    content: string;
}

export default function CustomerCase() {
    const [data, setData] = useState<DataItem[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch("/api/get-data");
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                const result: DataItem[] = await response.json();
                setData(result);
            } catch (error: any) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        }

        fetchData();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <h1>Data from Database</h1>
            <ul>
                {data.map((item, index) => (
                    <li key={index}>{item.content}</li> // Replace `column_name` with your actual column name
                ))}
            </ul>
        </div>
    );
}
