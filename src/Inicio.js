import { useState, useEffect } from "react";
import BlogList from "./BlogList";
import useCheck from "./check";
import useOriginal from "./original";

const Inicio = () => {
    window.localStorage.setItem("original",JSON.stringify(useOriginal()))
    useCheck()

    const [blogs,setBlogs] =  useState(()=>{
        const item = window.localStorage.getItem("actual")
        return JSON.parse(item)
    });

    const handleDelete = (id) =>{
        const newblogs = blogs.filter( blog => blog.id !== id);
        window.localStorage.setItem("actual",JSON.stringify(newblogs));
        setBlogs(newblogs)
    }

    return ( 
        <div className="inicio">
            <BlogList blogsdata={blogs} titulo="Todos los Blogs!" handleDelete={handleDelete}/>
        </div>
     );
}
 
export default Inicio;