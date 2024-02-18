// ReviewPage.js
import React from "react";
import { Button, Form, Input, Row, Col} from "antd";

const ReviewPage = () => {
  // Retrieve form data from local storage
  const formData = JSON.parse(localStorage.getItem("personalInformation"));

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
      name="First Name"
      rules={[{ message: "Please input your First Name!" }]}
    >
      {formData["First Name"]}
    </Form.Item>
  </Col>
  <Col span={12}>
    <Form.Item
      label="Last Name"
      name="Last Name"
      rules={[{message: "Please input your Last Name!" }]}
    >
{formData["Last Name"]}    </Form.Item>
  </Col>
</Row>

<Row gutter={16}>
  <Col span={12}>
    <Form.Item
      label="Email Address"
      name="Email Address"
      rules={[
        {message: "Please input your Email Address!" },
        { type: 'email', message: 'Please enter a valid email address' }
      ]}
    >
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
name="Employee ID"
rules={[
{
  message: "Please input your Employee ID!",
},
]}
>
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
      name="Contact no"
      rules={[
        {
          message: "Please input you Contact no!",
        },
      ]}
    >
      {formData["Contact no"]}
    </Form.Item>
  </Col>
  <Col span={12}>
    <Form.Item
      label="Emergency Contact no"
      name="Emergency Contact no"
      rules={[
        {
        
          message: "Please input your Emergency Contact no!",
        },
      ]}
    >
     {formData["Emergency Contact no"]}
    </Form.Item>
  </Col>
</Row>
<Row gutter={0}>
  <Col span={12}>
    <Form.Item
      label="Address line 1"
      name="Address line 1"
      rules={[
        {
          message: "Please input you Address line 1!",
        },
      ]}
    >
    {formData["Address line 1"]}
    </Form.Item>
  </Col>
  <Col span={12}>
    <Form.Item
      label="Address line 2"
      name="Address line 2"
      rules={[
        {
          message: "Please input your Address line 2!",
        },
      ]}
    >
     {formData["Address line 2"]}
    </Form.Item>
  </Col>
</Row>
<Row gutter={0}>
  <Col span={12}>
    <Form.Item
      label="Landmark"
      name="Landmark"
      rules={[
        {
          message: "Please input your Landmark!",
        },
      ]}
    >
    {formData["Landmark"]}
    </Form.Item>
  </Col>
  <Col span={12}>
    <Form.Item
      label="Country"
      name="Country"
      rules={[
        {
          message: "Please input your Country!",
        },
      ]}
    >
      {formData["Country"]}
    </Form.Item>
  </Col>
</Row>
<Row gutter={0}>
  <Col span={12}>
    <Form.Item
      label="State"
      name="state"
      rules={[
        {
          message: "Please select an option!",
        },
      ]}
    >
      {formData["state"]}
    </Form.Item>
  </Col>

  <Col span={12}>
    <Form.Item
      label="City"
      name="city"
      rules={[
        {
          message: "Please select an option!",
        },
      ]}
    >
     {formData["city"]}
    </Form.Item>
  </Col>
</Row>

<Col span={12}>
  <Form.Item
    label="Zip Code"
    name="Zip Code"
    rules={[
      {
        pattern:/^\d{5}-\d{4}$/,
        message: "Please input your zip code!",
      },
    ]}
  >
    {formData["Zip Code"]}
  </Form.Item>
</Col>

<Form.Item
  wrapperCol={{
    offset: 2,
  }}
>
</Form.Item>
</Form>
</div>
  );
};

export default ReviewPage;
