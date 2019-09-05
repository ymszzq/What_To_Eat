import React, { Component } from 'react'
import './mainFood.css';
import {todosRef} from '../firebase';
import { ListGroup,Button,ButtonGroup,ToggleButton,ToggleButtonGroup } from 'react-bootstrap';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const BBQ_HOT_POT = "bbqHotPot";
const JANPANEST_KOREAN = "janpanestKorean";
const NIGHT = "night";
const NON_SPICY = "nonSpicy";
const OTHER = "other";
const SPICY = "spicy";
const WESTERN = "western";
const ALL = "ALL";

const REGION_BBY = "region_bby";
const REGION_COQ = "region_coq";
const REGION_DT = "region_dt";
const REGION_RMD = "region_rmd";
const REGION_ALL = "region_ALL"
// import Button from '@material-ui/core/Button';
// import ButtonGroup from '@material-ui/core/ButtonGroup';
class mainFood extends Component {
  constructor(props) {
    super(props);
    this.state = {fields:[],
      choices:{
        type: SPICY,
        region: REGION_BBY,
        slider: "0",
      }};

    this.database=[];
    this.listAllOnClick = this.listAllOnClick.bind(this);
    this.randomOnClick = this.randomOnClick.bind(this);
    this.handleTypeOnChange = this.handleTypeOnChange.bind(this);
    this.handleRegionOnChange = this.handleRegionOnChange.bind(this);
    this.handleSliderOnChange = this.handleSliderOnChange.bind(this);
    this.filterOut = this.filterOut.bind(this);

  }

  componentDidMount() {

    todosRef.on("value",snapshot=>{
      this.database = [];
      let result = snapshot.val();

      Object.keys(result).map((k,i)=>this.database.push(result[k]));
      // this.setState( {fields: toArray});
      console.log(this.database);
  })
     
  }
  filterOut(){

      let result = [];
      let type = this.state.choices.type;
      let region = this.state.choices.region;

      for(let i = 0; i<this.database.length; i++) {
          console.log(i);
          if((type === ALL || this.database[i][type]==="on") && (region === REGION_ALL || this.database[i][region]==="on")){
              result.push(this.database[i]);
          }

      }
      console.log(result);
      return result;
  }
  handleTypeOnChange(type){
    this.setState(prev=>({choices: {...prev.choices,type:type}}));
    // this.setState({ choices:{[e.target.name]: e.target.value}});
  }
  handleRegionOnChange(region){

    this.setState(prev=>({choices: {...prev.choices,region:region}}));
    // this.setState({choices: {region: region}});
  }
  handleSliderOnChange(e,val){

    this.setState(prev=>({choices: {...prev.choices,slider:val}}));
  }
  listAllOnClick(){

    let temp = this.filterOut();
    this.setState({fields: temp});
    // this.setState({fields: []});
    // console.log("test");
  }
  randomOnClick(){
    let temp = this.filterOut();
    let result = [];
    for(let i = 0; i<2;i++){
      let item = temp[Math.floor(Math.random()*temp.length)];
      result.push(item);
  }
  this.setState({fields: result});
  }


  marks = [
    {
      value: 5,
      label: '5KM',
    },
    {
      value: 10,
      label: '10KM',
    },
    {
      value: 15,
      label: '15KM',
    },
    {
      value: 20,
      label: '20KM',
    },
    {
      value: 25,
      label: '25KM',
    },
    {
      value: 30,
      label: '30KM',
    },
  ];
  alertClicked (){
    console.log("test");
  }
  
  render() {
    
    return (
      <div>
<div>
  <ListGroup >
    {this.state.fields.map((restaurant)=>      
    <ListGroup.Item key={restaurant.name} action onClick={this.alertClicked}>
        {restaurant.name?restaurant.name:""}
        {"      ☆"}
        {restaurant.rate?restaurant.rate:""}
        {"   "}
        {<sub>{restaurant.contributer?"by "+restaurant.contributer:""}</sub>}
      </ListGroup.Item>)

    }
    </ListGroup>
</div>
<br></br>
<div>
        <ButtonGroup aria-label="Basic example">
          <Button variant="secondary" onClick={this.randomOnClick}>随机</Button>
          <Button variant="secondary" onClick={this.listAllOnClick}>列出全部</Button>

        </ButtonGroup>
        <br></br>
        <br></br>
        <ButtonGroup>
        <ToggleButtonGroup onChange={this.handleTypeOnChange} type="radio" name="options" defaultValue={1}>
          <ToggleButton value={SPICY}>辣</ToggleButton>
          <ToggleButton value={NON_SPICY}>清淡</ToggleButton>
          <ToggleButton value={BBQ_HOT_POT}>涮烤</ToggleButton>
          <ToggleButton value={NIGHT}>宵夜</ToggleButton>
          <ToggleButton value={WESTERN}>西餐</ToggleButton>
          <ToggleButton value={JANPANEST_KOREAN}>日韩</ToggleButton>
          <ToggleButton value={ALL}>所有</ToggleButton>
        </ToggleButtonGroup>

        </ButtonGroup>

        <br></br>
        <br></br>
        <ButtonGroup>
        <ToggleButtonGroup onChange={this.handleRegionOnChange} type="radio" name="options" defaultValue={1}>
          <ToggleButton value={REGION_RMD}>RMD</ToggleButton>
          <ToggleButton value={REGION_BBY}>BBY</ToggleButton>
          <ToggleButton value={REGION_DT}>DT</ToggleButton>
          <ToggleButton value={REGION_COQ}>COQ</ToggleButton>
          <ToggleButton value={REGION_ALL}>所有</ToggleButton>
        </ToggleButtonGroup>
        </ButtonGroup>
        <div className={"slider"}>
        <Typography id="discrete-slider-custom" gutterBottom>
        距离(暂不可用)
      </Typography>
      <Slider
      onChangeCommitted = {this.handleSliderOnChange}
        defaultValue={5}
        // getAriaValueText={this.valuetext}
        aria-labelledby="discrete-slider-custom"
        step={5}
        valueLabelDisplay="auto"
        marks={this.marks}
        max={30}
      />
      </div>

      


</div>
      </div>
    )
  }
}

export default mainFood
