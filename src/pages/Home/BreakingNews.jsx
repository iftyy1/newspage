import Marquee from "react-fast-marquee";

const BreakingNews = () => {
    return (
        <div className="flex">
            <div>
                <button className="btn btn-secondary">Breaking News</button>
            </div>
            <Marquee speed={200}>
                <p className="mr-6">Kalo</p>
                <p>HAE KALO</p>
            </Marquee>
        </div>
    );
};

export default BreakingNews;