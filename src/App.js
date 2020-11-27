import {Component} from 'react'
import logo from './logo.svg';
import image from './watchpic/heart.gif' 
import classes from './App.module.css';
import ProductData from './ProductData' 
import WatchStyle from "./WatchStyle";
import fclasses from "./WatchFeatures.module.css";



class App extends Component {
state = {
  imgurl:'https://imgur.com/iOeUBV7.png',
  time:true,
  heart:false,
  curtime :new Date().getMinutes().toLocaleString() + ':' + new Date().getSeconds().toLocaleString()
}

heartimg= <img height='50px' width='50px' src={image} />
onclickimg = (pk)=>{
  console.log(ProductData.colorOptions[pk])
  this.colorurl = ProductData.colorOptions[pk].imageUrl;
this.setState({
    imgurl:this.colorurl,
    curtime:new Date().getMinutes().toLocaleString() + ':' + new Date().getSeconds().toLocaleString()
    })
}

onclickheartbtn=()=>{
  this.setState({
    heart:true,
    time:false,
  })
}
onclicktimebtn=()=>{
  this.setState({
    heart:false,
    time:true,
  })
}


render(){ 
  return (
    <div className={classes.App}>
      <div className={classes.productdisplay}>
        <p className={classes.productdisplay}><img src={this.state.imgurl} /></p>
        <p className={classes.time}>{ this.state.time ? this.state.curtime : []}</p>
        <p className={classes.heartimgdisplayed}>{this.state.heart ? this.heartimg : []}</p>
      </div>
      <div className={classes.productdetail}>
        <div className={classes.title}><h1>{ProductData.title}</h1></div>
        <div className={classes.description}>{ProductData.description}</div>
        <h2>select color</h2>
        <div className={classes.productcolor}>
          {ProductData.colorOptions.map((colors)=>{
            return <WatchStyle colors={colors.imageUrl} pos={colors.id} onclickimg={()=>this.onclickimg(colors.id)} />
          })
          }
        </div>
        <h2>Features</h2>
        <div className={fclasses.productfeatures}>
        <button className={fclasses.btn} onClick={this.onclicktimebtn}>Time</button>
        <button className={fclasses.btn} onClick={this.onclickheartbtn}>Heart Rate</button>
        </div>
      </div>
    </div>
  );
  }
  
}

export default App;
