export default function Button({children, handleClickEvent}){
    return <button className="button" onClick={handleClickEvent}>{children}</button>
}