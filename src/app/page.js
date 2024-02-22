'use client'
import { Provider } from 'react-redux';
import store from '@/redux/store/store';
import PersonalInformation from "@/components/employees/addemp/personalInformation/page";
{/* <main className="flex min-h-screen flex-col items-center justify-between p-24">
</main> */}
function page() {
  return (
    <div>
    <Provider 
    store={store}>
<PersonalInformation />
    </Provider>
    </div>
  );
}

export default page;