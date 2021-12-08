import { useFetchgGifs } from "../hooks/useFetchGifs";
import { GifGridItem } from "./GifGridItem";

export const GifGrid = ({ category }) => {
    const { data: images, loading } = useFetchgGifs(category);

    return (
        <>
            <h3>{category}</h3>

            {loading && <p>Loading...</p>}

            <div className="card-grid">
                <ol>
                    {images.map((img) => (
                        <GifGridItem key={img.id} {...img}></GifGridItem>
                    ))}
                </ol>
            </div>
        </>
    );
};
