import React from "react";
import {Form, Row, Col} from "antd";
import {useSelector} from 'react-redux'
import adduser from "@/redux/slices/slice";

const ReviewPage = () => {
  // Retrieve form data from local storage
  // const formData = JSON.parse(localStorage.getItem("personalInformation"));
  const formData = useSelector(adduser);

  return (
    <div>
    <h2>Stored Form Data:</h2>
    <Form
        labelAlign="top"
        style={{ maxWidth: 900 }}
        layout="vertical"
       // Populate form fields with retrieved data
    >
<Row gutter={16}>
  <Col span={12}>
    <Form.Item
      label="First Name"
      name="First Name">
      {formData["First Name"]}
    </Form.Item>
  </Col>
  <Col span={12}>
    <Form.Item
      label="Last Name"
      name="Last Name"
      rules={[{message: "Please input your Last Name!" }]}
    >
{formData["Last Name"]}   
 </Form.Item>
  </Col>
</Row>

<Row gutter={16}>
  <Col span={12}>
    <Form.Item
      label="Email Address"
      name="Email Address">
      {formData["Email Address"]}
    </Form.Item>
  </Col>
  <Col span={12}>
    <Form.Item
      label="Work Email"
      name="Work Email"
      rules={[{ message: "Please input your Work Email Address!" }]}
    >
 {formData["Work Email"]}
    </Form.Item>
  </Col>
</Row>
<Row gutter={16}>
<Col span={12}>
<Form.Item
label="Employee ID"
name="Employee ID">
{formData["Employee ID"]}
</Form.Item>
</Col>
<Col span={12}>
<Form.Item label="Gender" name="Gender" style={{ marginBottom: 0 }}>
{formData["Gender"]}
</Form.Item>
</Col>
</Row>       
 <Row gutter={0}>
  <Col span={12}>
    <Form.Item
      label="Contact no"
      name="Contact no">
      {formData["Contact no"]}
    </Form.Item>
  </Col>
  <Col span={12}>
    <Form.Item
      label="Emergency Contact no"
      name="Emergency Contact no">
     {formData["Emergency Contact no"]}
    </Form.Item>
  </Col>
</Row>
<Row gutter={0}>
  <Col span={12}>
    <Form.Item
      label="Address line 1"
      name="Address line 1">
    {formData["Address line 1"]}
    </Form.Item>
  </Col>
  <Col span={12}>
    <Form.Item
      label="Address line 2"
      name="Address line 2">
     {formData["Address line 2"]}
    </Form.Item>
  </Col>
</Row>
<Row gutter={0}>
          <Col span={12}>
            <Form.Item
              label="Qualification"
              name="Qualification">
              <Input className="rounded-none"/>
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Date of Birth"
              name="RangePicker">
              <DatePicker className="rounded-none"/>
            </Form.Item>
          </Col>
        </Row>
<Row gutter={0}>
  <Col span={12}>
    <Form.Item
      label="Landmark"
      name="Landmark">
    {formData["Landmark"]}
    </Form.Item>
  </Col>
  <Col span={12}>
    <Form.Item
      label="Country"
      name="Country">
      {formData["Country"]}
    </Form.Item>
  </Col>
</Row>
<Row gutter={0}>
  <Col span={12}>
    <Form.Item
      label="State"
      name="state">
      {formData["state"]}
    </Form.Item>
  </Col>

  <Col span={12}>
    <Form.Item
      label="City"
      name="city"
    >
     {formData["city"]}
    </Form.Item>
  </Col>
</Row>

<Col span={12}>
  <Form.Item
    label="Zip Code"
    name="Zip Code">
    {formData["Zip Code"]}
  </Form.Item>
</Col>

</Form>
</div>
  );
};

export default ReviewPage;