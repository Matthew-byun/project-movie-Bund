
const Pagination = (props) =>{
   
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

    return(
        <div className='container'>
            <div className='row pt-2'>
               
                    <ul className={props.pages < 24 ? `d-flex justify-content-center flex-wrap ` : `pagination d-flex justify-content-between flex-wrap`}> 
                        
                         {pageLinks}
                                             
                    </ul>
               
            </div>
        </div>
    )
}

export default Pagination;