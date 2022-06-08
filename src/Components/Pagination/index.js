import React from 'react';
import './style.css';

function Pagination(props){

    const {page, totalPages, onLeftClick, onRightClick} = props

    return(
        <div className='pagination-container'>
            <button onClick={onLeftClick}><div>⇦</div></button>
            <div>{page} de {totalPages}</div>
            <button onClick={onRightClick}><div>⇨</div></button>
        </div>
    )
}

export default Pagination;