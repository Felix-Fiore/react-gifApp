import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

const GifExpertApp = () => {
    const [categories, setCategories] = useState(["Tokyo Revengers"]);

    return (
        <>
            <h2 className="title">Gif Expert App</h2>
            <AddCategory setCategories={setCategories}></AddCategory>
            <hr />
            <ol className="container">
                {categories.map((category) => (
                    <GifGrid key={category} category={category}></GifGrid>
                ))}
            </ol>
        </>
    );
};

export default GifExpertApp;
