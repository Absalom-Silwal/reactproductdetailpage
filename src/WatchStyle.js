import classes from './WatchStyle.module.css'


const WatchStyle = (props)=>{
  console.log(props)
  
    
    return(<div className={classes.watchstyle} key={props.pos}> 
        <img onClick={props.onclickimg} src={props.colors} alt="new"/>
        </div>
        );
      }

export default WatchStyle;