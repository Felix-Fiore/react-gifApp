import LazyLoad from "react-lazyload";

export const GifGridItem = ({ id, title, url }) => {
    return (
        <LazyLoad height={200}>
            <div className="card animate__animated animate__fadeInUp">
                <img src={url} alt={title} loading="lazy"></img>
                <p>{title}</p>
            </div>
        </LazyLoad>
    );
};
