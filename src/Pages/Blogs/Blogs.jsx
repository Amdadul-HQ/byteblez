import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

const Blogs = () => {
    const blogsData = useLoaderData()
    const [blogs,setBlogs]= useState([])
    useEffect(() => {
        setBlogs(blogsData)
    },[])
    
    return (
        <section>
                
        </section>
    );
};

export default Blogs;