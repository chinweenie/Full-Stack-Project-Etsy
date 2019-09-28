import React from 'react'

const Pagination = ({reviewsPerPage, totalReviews, paginate}) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalReviews / reviewsPerPage); i++){
        pageNumbers.push(i);
    };

    return (
        <nav>
            <ul className="pagination">
                {pageNumbers.map(number => {
                    return (
                        <li key={number} onClick={paginate(number)} className="page-link">
                            {number}
                        </li>
                    )
                }) }
            </ul>
        </nav>
    )
}

export default Pagination;