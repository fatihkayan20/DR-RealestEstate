import React from 'react';
import PropTypes from 'prop-types';



const Pagination = (props) => {
    const getNumbers=() =>{
        let numbers = [];
        let itemsPerPage = props.itemsPerPage;
        let pageNumber=1;

        for (let i=0; i<props.count;i+=itemsPerPage){
            const page = pageNumber;
            let style= 'pagination__number';
            let content = null;

            if(props.active === page ){
                style='pagination__number pagination__number--active';
                content=(
                    <div key={i} className={style}>
                        {pageNumber}
                    </div>                 
                )
            }
            else{
                content=(
                    <div key={i} onClick={() => props.visitPage(page)}  className={style}>
                        {pageNumber}
                    </div>                 
                )
            }

            numbers.push(
                content
            );

            pageNumber++;
        };
        return numbers;
    };
    return(
        <div className="pagination">
            <div className="pagination__number" onClick={()=>props.previous()}>
                Previous
            </div>

            {getNumbers()}

            <div className="pagination__number" onClick={()=>props.next()}>
                Next
            </div>
        </div>
    )  
};


Pagination.propTypes = {
    itemsPerPage: PropTypes.number.isRequired,
    count: PropTypes.number.isRequired,
    active: PropTypes.number.isRequired,
    visitPage: PropTypes.func.isRequired,
    previous: PropTypes.func.isRequired,
    next: PropTypes.func.isRequired,
};

export default Pagination;