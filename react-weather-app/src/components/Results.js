const Results=(props)=>{
    return(
     <div>
         {props.resules.cityName && <div>{props.resules.cityName}</div>}
         {props.resules.country && <div>{props.resules.country}</div>}
         {props.resules.temperature && <div>{props.resules.temperature}<span>℃</span></div>}
         {props.resules.conditionText && <div><img src={props.resules.icon} alt="icon" />
         <span>{props.resules.conditionText}</span></div>}     
     </div>
    );
};

export default Results;