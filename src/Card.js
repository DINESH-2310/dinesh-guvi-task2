import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";
 import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Card({ card,}) {


    return  (
         <div class="col">
           
     
    
        <div class="col-lg-0">
            <div class="card mb-6 mb-lg-4">
                <div class="card-body">
                    <h5 class="card-title text-muted text-uppercase text-center">{card.plan}</h5>
                    <h6 class="card-price text-center">${card.price}<span class="period">/month</span></h6>
                    <hr></hr>
                        <ul class="fa-ul">
                           {card.features.map((list) =>{
                            return(
                            <>
                            
                            <li className={list.isEnable ?'':'text-muted'}><FontAwesomeIcon icon={list.isEnable ? faCheck: faXmark}/>
                                <span>
                                    {list.isBold ? <strong>{list.title}</strong> :list.title}
                                </span>
                            </li>
                            </>
                            )
                           })}
                             
                            
                                
                        </ul>
                        <div class="d-grid">
                            <a href="#" class="btn btn-primary text-uppercase">Button</a>
                        </div>
                </div>
            </div>
        </div>
     </div>
    )
}



export default Card;