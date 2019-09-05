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
        other: "off",
        region_bby:"off",
        region_rmd:"off",
        region_coq:"off",
        region_dt:"off",
        region_other:"off",
    }
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
    let formIsValid = true;

    //Name
    if(!fields["name"]){
       formIsValid = false;
    }

    //Email
    if(!fields["address"]){
       formIsValid = false;
    }

    if(!fields["rate"] ){
        formIsValid = false;
    }
    
    if(fields["region_bby"] === "off" && fields["region_rmd"] === "off" && fields["region_coq"] === "off" && fields["region_dt"] === "off" && fields["region_other"] === "off" )
        formIsValid = false;

   return formIsValid;
}
  handleSubmit() {

    if(this.handleValidation()){

        todosRef.push().set(this.state);
        this.setState({spicy: "off",
        nonSpicy: "off",
        bbqHotPot: "off",
        night: "off",
        janpanestKorean: "off",
        western: "off",
        other: "off",
        region_bby:"off",
        region_rmd:"off",
        region_coq:"off",
        region_dt:"off",
        region_other:"off",
    });
    document.getElementById("formID").reset();
    alert("Successful");
      }
    else
        alert("Field cannot be empty");
    
      
  }
  render() {
    return (
      <div>
        <Form ref = "form" id = "formID">
          <Form.Group as={Row} controlId="formHorizontalEmail">
            <Form.Label column sm={2}>
              餐厅名字*
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
          <Form.Group as={Row}>
              <Form.Label as="legend" column sm={2}>
                餐厅地区*
              </Form.Label>

              <Col sm={10}>
                <Form.Check
                  name="region_bby"
                  custom
                  inline
                  label="BBY"
                  type={"checkbox"}
                  id={`region_bby`}
                  onChange={this.handleChange}
                />
                <Form.Check
                  name="region_rmd"
                  custom
                  inline
                  label="RMD"
                  type={"checkbox"}
                  id={`region_rmd`}
                  onChange={this.handleChange}
                />
                <Form.Check
                  name="region_coq"
                  custom
                  inline
                  label="COQ"
                  type={"checkbox"}
                  id={`region_coq`}
                  onChange={this.handleChange}
                />
                <Form.Check
                  name="region_dt"
                  custom
                  inline
                  label="DT"
                  type={"checkbox"}
                  id={`region_dt`}
                  onChange={this.handleChange}
                />
                <Form.Check
                  name="region_other"
                  custom
                  inline
                  label="Other"
                  type={"checkbox"}
                  id={`region_other`}
                  onChange={this.handleChange}
                />
              </Col>
            </Form.Group>
          <Form.Group as={Row} controlId="formHorizontalPassword">
            <Form.Label column sm={2}>
              餐厅评级*
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
                餐厅类型*
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
          <Form.Group as={Row} controlId="formHorizontalEmail">
            <Form.Label column sm={2}>
            贡献人
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                name="contributer"
                type="text"
                placeholder="贡献人（你的名字）"
                onChange={this.handleChange}
              />
            </Col>
          </Form.Group>
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
