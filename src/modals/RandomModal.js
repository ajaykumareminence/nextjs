export default function RandomModal({id, data}){
    function hide(id){
        let element = document.getElementById(id);
        element.close()
    }
    return(
        <dialog id={id}>
            <button onClick={()=>hide(id)}>hideme</button><br />
            Hello i am {data}
        </dialog>
    )
}