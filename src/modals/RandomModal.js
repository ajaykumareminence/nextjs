export default function RandomModal({id}){
    function hide(id){
        let element = document.getElementById(id);
        element.close()
    }
    return(
        <dialog id={id}>
            <button onClick={()=>hide(id)}>hideme</button>
            Hello i am a modal
        </dialog>
    )
}