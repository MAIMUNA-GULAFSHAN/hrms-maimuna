'use client'
import { Provider } from 'react-redux';
import Store from '@/redux/store/store';
import PersonalInformation from "@/components/employees/addemp/personalInformation/page";


{/* <main className="flex min-h-screen flex-col items-center justify-between p-24">
</main> */}
function page() {
  return (
    <Provider store={Store}>
<PersonalInformation />
    </Provider>
  );
}

export default page;




    