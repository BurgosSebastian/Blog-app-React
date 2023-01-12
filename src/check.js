import useOriginal from "./original";

const useCheck = () => {
    if(window.localStorage.getItem("actual") == null ){
        window.localStorage.setItem("actual",window.localStorage.getItem("original"))
        window.localStorage.setItem("id",3)
    } else{
    }

    return  ;
}
 
export default useCheck;