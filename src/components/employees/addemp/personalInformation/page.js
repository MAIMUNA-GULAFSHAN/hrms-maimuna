"use client"
import { useState, useRef } from "react";
import { Button, Form, Input, Row, Col, Select, Radio, DatePicker,Option} from "antd";
const PersonalInformation = () => {
  
  const [image, setImage] = useState(null);
  const hiddenFileInput = useRef(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const imgname = event.target.files[0].name;
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (e) => {
      const img = new Image();
      img.src = e.target.result;
      img.onload = () => {
        const canvas = document.createElement("canvas");
        const maxWidth = 100; // Specify the maximum width here
        const maxHeight = 100; // Specify the maximum height here
        let width = img.width;
        let height = img.height;

        // Calculate new dimensions while maintaining aspect ratio
        if (width > height) {
          if (width > maxWidth) {
            height *= maxWidth / width;
            width = maxWidth;
          }
        } else {
          if (height > maxHeight) {
            width *= maxHeight / height;
            height = maxHeight;
          }
        }

        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0, width, height);

        canvas.toBlob(
          (blob) => {
            const file = new File([blob], imgname, {
              type: "image/png",
              lastModified: Date.now(),
            });
            setImage(file);
          },
          "image/jpeg",
          0.8
        );
      };
    };
  };
  const onFinish = (values) => {
    // Save form data to local storage
    localStorage.setItem("personalInformation", JSON.stringify(values));
    // Redirect or perform any other necessary action after form submission
    // For example, you can redirect to another page:
    history.push("/review");
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div style={{ display: "flex", justifyContent:"center", alignItems:"center" ,gap:"100px"}}>
      {/* "Choose an image" section */}
      <div className="image-upload-container">
        <div style={{border:"2px dashed gray ", padding:"12px", height:"20vh"}}>
          <label htmlFor="image-upload-input" className="image-upload-label">
            {image ? image.name : "Choose an image"}
          </label>
          <div style={{ cursor: "pointer" }}>
            {image ? (
              <img
                src={URL.createObjectURL(image)}
                alt="upload image"
                className="img-display-after" style={{width:"100px",height:"100px"}}
              />
            ) : (
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={60}
                  height={60}
                  style={{marginRight:"16px", justifyContent:"center", width:"40px", height:"40px"}}
                  viewBox="0 0 512 512"
                >
                  <path d="M149.1 64.8L138.7 96H64C28.7 96 0 124.7 0 160V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H373.3L362.9 64.8C356.4 45.2 338.1 32 317.4 32H194.6c-20.7 0-39 13.2-45.5 32.8zM256 192a96 96 0 1 1 0 192 96 96 0 1 1 0-192z" />
                </svg>
              </div>
            )}
            <input
              id="image-upload-input"
              type="file"
              onChange={handleImageChange}
              ref={hiddenFileInput}
              style={{ display: "none" }}
            />
          </div>
        </div>
      </div>
      
      {/* Form */}
      <Form
        name="basic"
        labelCol={{
          span: 10,
        }}
        wrapperCol={{
          span: 18,
        }}
        initialValues={{
          remember: true,
        }}
        className="w-[55%]"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Row gutter={0}>
          <Col span={12}>
            <Form.Item
              label="First Name"
              name="First Name"
              rules={[
                {
                    pattern: /^[A-Za-z]+$/,
                  required: true,
                  message: "Please input your username!",
                },
              ]}
            >
              <Input className="rounded-none"/>
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Last Name"
              name="Last Name"
              rules={[
                {
                  required: true,
                  message: "Please input your Last Name!",
                },
              ]}
            >
              <Input className="rounded-none"/>
            </Form.Item>
          </Col>
        </Row>

        <Col span={24}>
          <Form.Item
            label="Email Address"
            name="Email Address"
            style={{width:600}}
            rules={[
              {
                required: true,
                pattern:/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,

                message: "Please input your Email Address!",
              },
            ]}
          >
            <Input className="rounded-none"/>
          </Form.Item>
        </Col>
        <Col span={24}>
          <Form.Item
            label="Work Email"
            name="Work Email"
            rules={[
              {
                required: true,
                message: "Please input your Work Email Address!",
              },
            ]}
          >
            <Input className="rounded-none"/>
          </Form.Item>
        </Col>

        <Row gutter={0}>
  <Col span={12}>
    <Form.Item
      label="Employee ID"
      name="Employee ID"
      rules={[
        {
          required: true,
          pattern:/^[A-Za-z0-9]{6,}$/,
          message: "Please input your Employee ID!",
        },
      ]}
    >
      <Input className="rounded-none"/>
    </Form.Item>
  </Col>
  <Col span={7}>
    <Form.Item label="Gender" name="Gender" style={{ marginBottom: 0 }}>
      <Radio.Group style={{ display: 'flex', flexDirection: 'row' }}>
        <Radio.Button value="Male">Male</Radio.Button>
        <Radio.Button value="Female">Female</Radio.Button>
        <Radio.Button value="Other">Other</Radio.Button>
      </Radio.Group>
    </Form.Item>
  </Col>
</Row>        <Row gutter={0}>
          <Col span={12}>
            <Form.Item
              label="Contact no"
              name="Contact no"
              rules={[
                {
                  required: true,
                  pattern:/^[0-9]{10}$/,
                  message: "Please input you Contact no!",
                },
              ]}
            >
              <Input  className="rounded-none"/>
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Emergency Contact no"
              name="Emergency Contact no"
              rules={[
                {
                  required: true,
                  pattern:/^[0-9]{10}$/,
                  message: "Please input your Emergency Contact no!",
                },
              ]}
            >
              <Input className="rounded-none"/>
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
                  required: true,
                  message: "Please input you Address line 1!",
                },
              ]}
            >
              <Input className="rounded-none"/>
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Address line 2"
              name="Address line 2"
              rules={[
                {
                  required: true,
                  message: "Please input your Address line 2!",
                },
              ]}
            >
              <Input className="rounded-none"/>
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={0}>
          <Col span={12}>
            <Form.Item
              label="Qualification"
              name="Qualification"
              rules={[
                {
                  required: true,
                  message: "Please input your Qualification!",
                },
              ]}
            >
              <Input className="rounded-none"/>
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Date of Birth"
              name="RangePicker"
              rules={[
                {
                  required: true,
                  message: "Please input your Date of Birth!",
                },
              ]}
            >
              <DatePicker className="rounded-none"/>
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
                  required: true,
                  message: "Please input your Landmark!",
                },
              ]}
            >
              <Input className="rounded-none"/>
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Country"
              name="Country"
              rules={[
                {
                  required: true,
                  message: "Please input your Country!",
                },
              ]}
            >
              <Input className="rounded-none"/>
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
                  required: true,
                  message: "Please select an option!",
                },
              ]}
            >
              <Select placeholder="Please select">
                <Option value="option1">Option 1</Option>
                <Option value="option2">Option 2</Option>
                <Option value="option3">Option 3</Option>
              </Select >
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item
              label="City"
              name="city"
              rules={[
                {
                  required: true,
                  message: "Please select an option!",
                },
              ]}
            >
              <Select placeholder="Please select">
                <Option value="option1">Option 1</Option>
                <Option value="option2">Option 2</Option>
                <Option value="option3">Option 3</Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>

        <Col span={12}>
          <Form.Item
            label="Zip Code"
            name="Zip Code"
            rules={[
              {
                required: true,
                message: "Please input your Zip code!",
              },
            ]}
          >
            <Input className="rounded-none"/>
          </Form.Item>
        </Col>

        <Form.Item
          wrapperCol={{
            offset: 2,
          }}
        >
          <div className="w-full flex justify-center h-10 "> 
          <Button className="bg-[#1890ff] w-[70%] text-white h-full rounded-none">
            Next
          </Button></div>
        </Form.Item>
      </Form>
    </div>
  );
};


export default PersonalInformation;