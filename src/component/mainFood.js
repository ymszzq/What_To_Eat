import React, { Component } from 'react'
import './mainFood.css';
import {todosRef} from '../firebase';
import { Card,ListGroup,Button,ButtonToolbar,ButtonGroup,ToggleButton,ToggleButtonGroup } from 'react-bootstrap';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

// import Button from '@material-ui/core/Button';
// import ButtonGroup from '@material-ui/core/ButtonGroup';
class mainFood extends Component {
  constructor(props) {
    super(props);
    this.state = {fields:[],};
    this.database=[];
    this.listAllOnClick = this.listAllOnClick.bind(this);
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
  randomOnClick(){}
  listAllOnClick(){
    let temp = [...this.database];
    this.setState({fields: temp});
    // this.setState({fields: []});
    console.log("test");
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
        {restaurant.name}
        {"   ☆"}
        {restaurant.rate}

      </ListGroup.Item>)

    }
    </ListGroup>
</div>
<br></br>
<div>
        <ButtonGroup aria-label="Basic example">
          <Button variant="secondary">随机</Button>
          <Button variant="secondary" onClick={this.listAllOnClick}>列出全部</Button>

        </ButtonGroup>
        <br></br>
        <br></br>
        <ButtonGroup>
        <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
          <ToggleButton value={"spicy"}>辣</ToggleButton>
          <ToggleButton value={"nonSpicy"}>清淡</ToggleButton>
          <ToggleButton value={"bbqHotPot"}>涮烤</ToggleButton>
          <ToggleButton value={"night"}>宵夜</ToggleButton>
          <ToggleButton value={"western"}>西餐</ToggleButton>
          <ToggleButton value={"janpanestKorean"}>日韩</ToggleButton>
          <ToggleButton value={"all"}>所有</ToggleButton>
        </ToggleButtonGroup>

        </ButtonGroup>

        <br></br>
        <br></br>
        <ButtonGroup>
        <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
          <ToggleButton value={"rmd"}>RMD</ToggleButton>
          <ToggleButton value={"bby"}>BBY</ToggleButton>
          <ToggleButton value={"dt"}>DT</ToggleButton>
          <ToggleButton value={"coq"}>COQ</ToggleButton>
          <ToggleButton value={"position-all"}>所有</ToggleButton>
        </ToggleButtonGroup>
        </ButtonGroup>
        <Typography id="discrete-slider-custom" gutterBottom>
        距离
      </Typography>
      <Slider
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
    )
  }
}

export default mainFood
