import React from 'react'
import { FaRegTrashCan } from "react-icons/fa6";



const DeleteButtons = ({ overClick }) => {
    return (
        <button
            onClick={(e) => {
                e.stopPropagation();
                overClick()
            }}
        >
            <FaRegTrashCan />
        </button>
    )
}

export default DeleteButtons
