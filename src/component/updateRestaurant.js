import React, { Component } from "react";
import { Form, Button, Col, Row } from "react-bootstrap";
import {todosRef} from '../firebase';

export default class updateRestaurant extends Component {
  constructor(props) {
    super(props);
    this.state = {spicy: "off",
        nonSpicy: "off",
        bbqHotPot: "off",
        night: "off",
        janpanestKorean: "off",
        western: "off",
        other: "off",}
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleValidation = this.handleValidation.bind(this);
  }
  handleChange(e) {
    // console.log(e.target.value);
    this.setState({ [e.target.name]: e.target.value });
  }
  handleValidation(){
    let fields = this.state;
    let errors = {};
    let formIsValid = true;

    //Name
    if(!fields["name"]){
       formIsValid = false;
    }

    //Email
    if(!fields["address"]){
       formIsValid = false;
    }

    if(!fields["rate"]){
        formIsValid = false;
    }

   return formIsValid;
}
  handleSubmit() {
    console.log(this.state)
    if(this.handleValidation()){
        alert("Successful");
        todosRef.push().set(this.state);}
    else
        alert("Field cannot be empty");
    
      
  }
  render() {
    return (
      <div>
        <Form >
          <Form.Group as={Row} controlId="formHorizontalEmail">
            <Form.Label column sm={2}>
              餐厅名字
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                name="name"
                type="text"
                placeholder="餐厅名字"
                onChange={this.handleChange}
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formHorizontalPassword">
            <Form.Label column sm={2}>
              餐厅地址
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                name="address"
                type="text"
                placeholder="餐厅地址"
                onChange={this.handleChange}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="formHorizontalPassword">
            <Form.Label column sm={2}>
              餐厅评级
            </Form.Label>
            <Col>
              <Form.Check
                type="radio"
                label="1"
                name="rate"
                id="formHorizontalRadios1"
                value="1"
                inline
                onChange={this.handleChange}
              />
              <Form.Check
                type="radio"
                label="2"
                name="rate"
                id="formHorizontalRadios2"
                value="2"
                inline
                onChange={this.handleChange}
              />
              <Form.Check
                type="radio"
                label="3"
                name="rate"
                id="formHorizontalRadios3"
                value="3"
                inline
                onChange={this.handleChange}
              />
              <Form.Check
                type="radio"
                label="4"
                name="rate"
                inline
                id="formHorizontalRadios3"
                value="4"
                onChange={this.handleChange}
              />
              <Form.Check
                type="radio"
                label="5"
                inline
                name="rate"
                id="formHorizontalRadios3"
                value="5"
                onChange={this.handleChange}
              />
            </Col>
          </Form.Group>
          <fieldset>
            <Form.Group as={Row}>
              <Form.Label as="legend" column sm={2}>
                餐厅类型
              </Form.Label>

              <Col sm={10}>
                <Form.Check
                  name="spicy"
                  custom
                  inline
                  label="辣"
                  type={"checkbox"}
                  id={`custom`}
                  onChange={this.handleChange}
                />
                <Form.Check
                  name="nonSpicy"
                  custom
                  inline
                  label="清淡"
                  type={"checkbox"}
                  id={`nonSpicy`}
                  onChange={this.handleChange}
                />
                <Form.Check
                  name="bbqHotPot"
                  custom
                  inline
                  label="涮烤"
                  type={"checkbox"}
                  id={`bbqHotPot`}
                  onChange={this.handleChange}
                />
                <Form.Check
                  name="night"
                  custom
                  inline
                  label="宵夜"
                  type={"checkbox"}
                  id={`night`}
                  onChange={this.handleChange}
                />
                <Form.Check
                  name="janpanestKorean"
                  custom
                  inline
                  label="日韩"
                  type={"checkbox"}
                  id={`janpanestKorean`}
                  onChange={this.handleChange}
                />
                <Form.Check
                  name="western"
                  custom
                  inline
                  label="西餐"
                  type={"checkbox"}
                  id={`western`}
                  onChange={this.handleChange}
                />
                <Form.Check
                  name="other"
                  custom
                  inline
                  label="其他"
                  type={"checkbox"}
                  id={`other`}
                  onChange={this.handleChange}
                />
              </Col>
            </Form.Group>
          </fieldset>

          <Form.Group as={Row}>
            <Col sm={{ span: 10, offset: 2 }}>
              <Button  onClick={this.handleSubmit}>添加</Button>
            </Col>
          </Form.Group>
        </Form>
      </div>
    );
  }
}
