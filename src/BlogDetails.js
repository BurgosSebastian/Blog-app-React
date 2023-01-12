import { useParams } from "react-router-dom";
import useOriginal from "./original";

const BlogDetails = () => {
    const { id }= useParams()

    const grupo = JSON.parse(window.localStorage.getItem("actual"))

    const [elblog, setelblog] = grupo.filter(grup => grup.id == id)


    return ( 
        <div className="blog-details">
            <h2>{elblog.titulo}</h2>
            <h3>Creado por {elblog.autor}</h3>
            <div>
                <p>{elblog.body}</p>
            </div>
            
        </div>
     );
}
 
export default BlogDetails;