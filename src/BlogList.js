import { Link } from "react-router-dom";

const BlogList = ({blogsdata , titulo, handleDelete}) => {

    

    return ( 
        <div className="blog-list">
            <h2>{titulo}</h2>
            {blogsdata.map((blog)=>(
                <div className="blog-preview" key={blog.id}>
                    <Link to={`/blogs/${blog.id}`}>
                        <h2>{blog.titulo}</h2>
                        <p>Escrito por {blog.autor}</p>
                    </Link>
                    <button onClick={()=> handleDelete(blog.id)}>Borrar Blog</button>
                </div>
            ))}
        </div>
     );
}
 
export default BlogList;