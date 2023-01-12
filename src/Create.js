import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {

    const [titulo,setTitle] = useState("");
    const [body,setBody] = useState("");
    const [autor,setAuthor] = useState("Invitado");
    const pagina = useHistory();



    const handleSubmit = (e)=>{
        e.preventDefault();
        var id = window.localStorage.getItem("id")
        id++
        window.localStorage.setItem("id",id)
        const oldblogs = JSON.parse(window.localStorage.getItem("actual"));
        var listblogs = oldblogs;
        const blog = {titulo,body,autor,id};
        listblogs.push(blog);
        window.localStorage.setItem("actual",JSON.stringify(listblogs))
        pagina.push("/build/")
    }

    return ( 
        <div className="create" >
            <h2>Crear un nuevo Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Titulo del Blog:</label>
                <input 
                    type="text"
                    required
                    value={titulo}
                    onChange={(e)=>setTitle(e.target.value)}
                />
                <label>Cuerpo del Blog:</label>
                <textarea 
                required
                value={body}
                    onChange={(e)=>setBody(e.target.value)}
                ></textarea>
                <label>Autor del Blog:</label>
                <select
                    value={autor}
                    onChange={(e)=>setAuthor(e.target.value)}
                >
                    <option value="Sebastian">Sebastian</option>
                    <option value="Invitado">Invitado</option>
                </select>
                <button>Crear blog</button>
            </form>
        </div>
     );
}
 
export default Create;