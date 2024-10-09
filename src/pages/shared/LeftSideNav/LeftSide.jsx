import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const LeftSide = () => {

    const [categories, setCategories] = useState([]);

    useEffect(()=>{
        fetch('categories.json')
        .then(res => res.json())
        .then(data => setCategories(data))
    },[])

    return (
        <div className="space-y-6">
            <h1>All Categories</h1>
            {
                categories.map(category => <Link className="block font-semibold" to={`/categories/${category.id}`} key={category.id}>{category.name}</Link>)
            }
        </div>
    );
};

export default LeftSide;