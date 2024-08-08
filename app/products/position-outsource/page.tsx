"use client";

import { useEffect, useState } from "react";

interface CardItem {
    id: number;
    page: string;
    module: string;
    title: string;
    content: string;
}
type cardArray = Array<CardItem>

interface TextItem {
    id: number;
    page: string;
    module: string;
    title: string;
    content: string;
}
type textArray = Array<TextItem>

export default function PositionOutsource() {

    const [cardData, setCardData] = useState<cardArray>([]);
    const [textData, setTextData] = useState<textArray>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch("../api/position-outsource-data");
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                const result = await response.json();
                setCardData(result.cards as cardArray);
                setTextData(result.texts as textArray);
                console.log(result)
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
            <ul style={{ marginTop: "80px" }}>
                <h1 style={{ color: "#ff0000" }}>Card Data</h1>
                {cardData.map((item, index) => (
                    <li key={index}>{item.content}</li> // Replace `column_name` with your actual column name
                ))}
                <hr></hr>
                <h1 style={{ color: "#ff0000" }}>Text Data</h1>
                {textData.map((item, index) => (
                    <li key={index}>{item.content}</li> // Replace `column_name` with your actual column name
                ))}
            </ul>
        </div>
    );

}