"use client"
import React , { useState,useEffect} from "react";
import axios from "@/api/axios"
import { useSelector } from 'react-redux'
const PersonalInfo = () => {
  const formData = useSelector((state) => state.personalDetails.formData);
  // const [data, setData] = useState({})
 
  // useEffect(()=>{
  //   const fetchData = async ()=>{
  //     try{
  //       const values = await axios.get('/employee/fd7cbfe2-167c-4f7d-98ca-d4c778721d6e');
  //       console.log("response",values.data.personal_information        )
  //       setData(values.data.personal_information);
  //       // console.log("data",employees)

  //     }
  //     catch(error){
  //       console.log('error',error);
  //     }
  //   }
  //   fetchData()
  // },[])

  // "employee_name": "string",
  // "employee_id": "string",
  // "email_address": "string",
  // "designation": "string",
  // "employee_type": "string",
  // "department":
  return (
    
    <div className="grid grid-cols-2 grid-rows-9 ">
      <span className="mb-4">
        <h2 className="text-gray-400">First Name</h2>
        <p className="font-semibold text-base">{formData["first_name"]}</p>
      </span>
      <span>
        <h2 className="text-gray-400">Last Name</h2>
        <p className="font-semibold text-base">{formData["last_name"]}</p>
      </span>

      {/* second row  */}
      <span className="mb-4">
        <h2 className="text-gray-400">Date of Birth </h2>
        <p className="font-semibold text-base">{formData["dob"]?.format('YYYY-MM-DD')}</p>
      </span>
      <span>
        <h2 className="text-gray-400">Gender</h2>
        <p className="font-semibold text-base">{formData["gender"]}</p>
      </span>

      {/* third row  */}
      <span className="mb-4">
        <h2 className="text-gray-400">Contact No.</h2>
        <p className="font-semibold text-base">{formData["number"]}</p>
      </span>
      <span>
        <h2 className="text-gray-400">Emergency Contact No.</h2>
        <p className="font-semibold text-base">{formData["emergency_number"]}</p>
      </span>

    {/* fourth row  */}
      <span className="mb-4">
        <h2 className="text-gray-400">Work Email</h2>
        <p className="font-semibold text-base">{formData["work_email"]}</p>
      </span>
      <span>
        <h2 className="text-gray-400">Personal Email</h2>
        <p className="font-semibold text-base">{formData["email"]}</p>
      </span>

      {/* fifth row  */}
      <span className="mb-4">
        <h2 className="text-gray-400">Employee ID</h2>
        <p className="font-semibold text-base">{formData["emp_id"]}</p>
      </span>
      <span>
        <h2 className="text-gray-400">Qualification</h2>
        <p className="font-semibold text-base">{formData["highest_qualification"]}</p>
      </span>

      {/* sixth row  */}
      <span className="mb-4">
        <h2 className="text-gray-400">Address Line 1</h2>
        <p className="font-semibold text-base">{formData["address_line_1"]}</p>
      </span>
      <span>
        <h2 className="text-gray-400">Address Line 2</h2>
        <p className="font-semibold text-base">{formData["address_line_2"]}</p>
      </span>

      {/* seventh row  */}
      <span className="mb-4">
        <h2 className="text-gray-400">Landmark</h2>
        <p className="font-semibold text-base">{formData["landmark"]}</p>
      </span>
      <span>
        <h2 className="text-gray-400">City </h2>
        <p className="font-semibold text-base">{formData["city"]}</p>
      </span>

      {/* eighth row  */}
      <span className="mb-4">
        <h2 className="text-gray-400">State</h2>
        <p className="font-semibold text-base">{formData["state"]}</p>
      </span>
      <span>
        <h2 className="text-gray-400">Counrty</h2>
        <p className="font-semibold text-base">{formData["country"]}</p>
      </span>

      {/* ninth row  */}
      <span className="mb-4">
        <h2 className="text-gray-400">Zip code</h2>
        <p className="font-semibold text-base">{formData["zipcode"]}</p>
      </span>



    </div>
  );
};

export default PersonalInfo;
