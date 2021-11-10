
const Pagination = (props) =>{
    // const firstPav = props.currentPage < limit ? props
    console.log(props)
    const pageLinks =[]
    for(let i = 1; i<= props.pages; i++){
        let active = props.currentPage === i ? '-warning' : '-primary'
        pageLinks.push(
            <div className='center'>
            <li className={`m-2`} key={i} onClick={() => props.nextPage(i)}>
            <button className={`btn btn${active}`}>
                {i}</button>
            </li>
            </div>
        )
    }

    
    // function onClick() {
    //     props.nextPage(props.currentPage)

    //     props.handleNextList();
    //     console.log(props)
    //  }

    // const nextList = () => {
    //     currentPage = currentPage + limit
    //     console.log(currentPage)
    // }
    return(
        <div className='container'>
            <div className='row pt-2'>
                {/* <div className='col-auto'>
                    <button className={`btn btn-secondary ${(props.pages < limit) & (props.firstPav > limit) ? 'visible': 'invisible'}`}
                            onClick={()=> props.handlePrevList()}>
                        Prev</button>
                </div> */}
                    <ul className={props.pages < 24 ? `d-flex justify-content-center flex-wrap ` : `pagination d-flex justify-content-between flex-wrap`}> 
                        {/* {pageLinks.length > limit ? 
                        pageLinks.slice(firstPav ,firstPav+limit) 
                        :
                         pageLinks } */}
                         {pageLinks}
                                             
                    </ul>
                {/* <div className='col-auto'>
                    <button className={`btn btn-secondary ${props.firstPav + props.limit <= props.pages ? 'visible': 'invisible'}`}
                            onClick={onClick}
                            >
                                Next</button>
                </div> */}
            </div>
        </div>
    )
}

export default Pagination;