import { pandit } from '@/assets/Home'
import React from 'react'

export default function HeroSection() {
  return (
      <section className='lg:flex  items-center justify-center w-full h-full gap-10'>
        <div className=' flex flex-col  lg:justify-start justify-center items-center gap-10'>
            <div className=''>
                <li className='text-xl'>Enter Puja Booking details with your specific requirement</li>
                <li className='text-xl'>Pay the minimum booking amount and the remaining on day of Puja</li>
                <li className='text-xl'>Sit back and relax. We're on it!</li>
            </div>
            <div className='justify-center items-center flex'>
                <img src={pandit.src} className='lg:w-full lg:h-full w-full h-auto'/>
            </div>
        </div>
        <div className='lg:w-[45%] w-full h-dvh bg-gray-100 shadow-2xl shadow-black p-10 gap-3 flex flex-col justify-center rounded-md'>
            <h1 className='text-4xl font-bold font-serif text-red-800'>Book A Pandit Online</h1>
            <form className=''>
                <div className='flex flex-col gap-2'>
                    <label htmlFor='name'>FullName</label>
                    <input type='text' id='name' name='name' className='w-full py-2 px-3 rounded-md border-2 ' required/>
                    <label htmlFor='phone'>Phone</label>
                    <input type='tel' id='phone' name='phone' className='w-full py-2 px-3 rounded-md border-2' required/>
                    <label htmlFor='email'>Email</label>
                    <input type='email' id='email' name='email' className='w-full py-2 px-3 rounded-md border-2' required/>
                    <select name="famous_pujas" id="famous_pujas">
                        <option value="durga_puja">Durga Puja</option>
                        <option value="diwali_lakshmi_puja">Diwali Lakshmi Puja</option>
                        <option value="saraswati_puja">Saraswati Puja</option>
                        <option value="kali_puja">Kali Puja</option>
                        <option value="ganesh_chaturthi">Ganesh Chaturthi Puja</option>
                        <option value="maha_shivaratri_puja">Maha Shivaratri Puja</option>
                        <option value="chhath_puja">Chhath Puja</option>
                        <option value="hanuman_jayanti_puja">Hanuman Jayanti Puja</option>
                        <option value="navratri_puja">Navratri Puja</option>
                        <option value="satyanarayan_puja">Satyanarayan Puja</option>
                        <option value="vaibhav_lakshmi_puja">Vaibhav Lakshmi Puja</option>
                        <option value="mangal_gouri_puja">Mangal Gouri Puja</option>
                        <option value="karwa_chauth_puja">Karwa Chauth Puja</option>
                        <option value="rudrabhishek_puja">Rudrabhishek Puja</option>
                        <option value="ayudha_puja">Ayudha Puja</option>
                        <option value="santan_gopal_puja">Santan Gopal Puja</option>
                        <option value="ganapathi_homa">Ganapathi Homa</option>
                        <option value="lakshmi_narayan_puja">Lakshmi Narayan Puja</option>
                        <option value="sundarkand_puja">Sundarkand Path Puja</option>
                        <option value="mahamrityunjaya_puja">Mahamrityunjaya Puja</option>
                    </select>
                    <select>
                        <option value=''>Select Time</option>
                        <option value=''>Morning</option>
                        <option value=''>Afternoon</option>
                        <option value=''>Evening</option>
                    </select>
                    <select>
                        <option value=''>Select Language</option>
                        <option value=''>Hindi</option>
                        <option value=''>English</option>
                        <option value=''>Odia</option>
                    </select>
                    <label htmlFor='message'>Message</label>
                    <input type='text' id='message' name='message' className='w-full py-2 px-3 rounded-md border-2' required/>
                    <label htmlFor='date'>Date</label>
                    <input type='date' id='date' name='date' className='w-full py-2 px-3 rounded-md border-2' required/>
                    <select name="odisha_cities" id="odisha_cities">
                        <option value="bhubaneswar">Select cities</option>
                        <option value="bhubaneswar">Bhubaneswar</option>
                        <option value="cuttack">Cuttack</option>
                        <option value="puri">Puri</option>
                        <option value="sambalpur">Sambalpur</option>
                        <option value="rourkela">Rourkela</option>
                        <option value="berhampur">Berhampur</option>
                        <option value="balasore">Balasore</option>
                        <option value="baripada">Baripada</option>
                        <option value="jeypore">Jeypore</option>
                        <option value="paradip">Paradip</option>
                        <option value="jharsuguda">Jharsuguda</option>
                        <option value="bargarh">Bargarh</option>
                        <option value="angul">Angul</option>
                        <option value="dhenkanal">Dhenkanal</option>
                        <option value="koraput">Koraput</option>
                        <option value="rayagada">Rayagada</option>
                        <option value="keonjhar">Keonjhar</option>
                        <option value="kandhamal">Kandhamal</option>
                        <option value="nayagarh">Nayagarh</option>
                        <option value="gopalpur">Gopalpur</option>
                    </select>
                    <select name="indian_states" id="indian_states">
                        <option value="andhra_pradesh">Andhra Pradesh</option>
                        <option value="arunachal_pradesh">Arunachal Pradesh</option>
                        <option value="assam">Assam</option>
                        <option value="bihar">Bihar</option>
                        <option value="chhattisgarh">Chhattisgarh</option>
                        <option value="goa">Goa</option>
                        <option value="gujarat">Gujarat</option>
                        <option value="haryana">Haryana</option>
                        <option value="himachal_pradesh">Himachal Pradesh</option>
                        <option value="jharkhand">Jharkhand</option>
                        <option value="karnataka">Karnataka</option>
                        <option value="kerala">Kerala</option>
                        <option value="madhya_pradesh">Madhya Pradesh</option>
                        <option value="maharashtra">Maharashtra</option>
                        <option value="manipur">Manipur</option>
                        <option value="meghalaya">Meghalaya</option>
                        <option value="mizoram">Mizoram</option>
                        <option value="nagaland">Nagaland</option>
                        <option value="odisha">Odisha</option>
                        <option value="punjab">Punjab</option>
                        <option value="rajasthan">Rajasthan</option>
                        <option value="sikkim">Sikkim</option>
                        <option value="tamil_nadu">Tamil Nadu</option>
                        <option value="telangana">Telangana</option>
                        <option value="tripura">Tripura</option>
                        <option value="uttar_pradesh">Uttar Pradesh</option>
                        <option value="uttarakhand">Uttarakhand</option>
                        <option value="west_bengal">West Bengal</option>
                    </select>

                    <button type='submit' className='bg-themeColor bg-black text-white font-bold py-3 px-6 rounded-md mt-5'>Submit</button>
                </div>
            </form>
        </div>
      </section>
  )
}
