"use client"
import React from 'react'
import PersonalInformationreview from '@/components/employees/addemp/review/page'
import {Provider} from "react-redux";
import store from '@/redux/store/store';
const Review1 = () => {
  return (
    <div>
<Provider store={store}>
<PersonalInformationreview />
    </Provider>    </div>
  )
}

export default Review1