import { useState } from "react"

export const Item = ({ name, deleteClick, index, todosState }) => {

    const [isSlide, setIsSlide] = useState(null)
    const [isTached, setIsTached] = useState(false)
    const handleClickSlide = () => {
        setIsSlide(index)
        setTimeout(() => {
            const updatedItems = todosState.filter((_, i) => i !== index);
            deleteClick(updatedItems)
            setIsSlide(null)
        }, 180)
    }
    const handleClickTach = ()=> {
        setIsTached(!isTached)
    }
    return (
        <li className={`item${isSlide === index ? ' slide-right' : ''}`} >
            <div className='item-container'>
                <span onClick={handleClickTach} className='check-container'>✅</span>
                <p className={`name-container ${isTached ? 'tach' : ''}`}>{name}</p>
                <span onClick={handleClickSlide} className='delete-container'>❌</span>
            </div>
        </li>
    )
}