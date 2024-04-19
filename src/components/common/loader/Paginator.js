import React,{useState} from "react";

const Paginator = ({paginate,PerPage,totalPage}) =>{

    const pageNumbers = [];
       
    for (let i = 1; i <= Math.ceil(totalPage); i++) {
      pageNumbers.push(i);
    }
   
     const[ getActivePage,setActivePage] = useState(1)
    const getCurrentPage = (number) =>{
      paginate(number);
      setActivePage(number);
    }
  return(
    <span className="col-12" >
    <nav aria-label="Page navigation example text-center" >
    <ul
        className="pagination justify-content-center"
        style={{display:"flex",flexWrap:"wrap",justifyContent:"center",alignItems:"center",alignContent:"center"}}
        >
       { 

       pageNumbers.map((number,index)=>

       <li className={ getActivePage === number ? "page-item active" :'page-item'} key={number}>
        <a
       className="page-link"
        href="javascript:void(0)"
        onClick={()=> getCurrentPage(number)}
        >{number}</a>
   </li>
      )
      
       }

    </ul>
</nav>
</span>
  )
}

export default Paginator;