import { React, useState} from "react";
import { State, City }  from 'country-state-city';
import Select from "react-select";


const Addressinfo = () => {
    function handleInput(e) {
        e.preventDefault();
        if (e) {
          const formCopy = {
            ...form,
            [e.target.id]: e.target.value,
          };
          setForm(formCopy);
        }
      }  
      const [countrystate, setCountrystate] = useState("");
      const [statecity, setStatecity] = useState("");
      const [form, setForm] = useState({});
      const statesofcountry = State.getStatesOfCountry('IN');
      const stateoptions =[];
      for (let i = 0; i < statesofcountry.length; i++) {
          stateoptions.push({
            value: statesofcountry[i].isoCode,
            label: statesofcountry[i].name,
          });
        }   
        const  handleOnchangestate  =  val  => {
          setCountrystate(val);
        }
        const citiesofstate = City.getCitiesOfState('IN', countrystate.value);
        const citiesoptions =[];
        for (let i = 0; i < citiesofstate.length; i++) {
          citiesoptions.push({
              value: citiesofstate[i].name,
              label: citiesofstate[i].name,
            });
          }   
          const  handleOnchangecities =  val  => {
              setStatecity(val);
            }


  return (
   <>
    <div className="text-2xl md:text-3xl font-semibold mb-2 mt-2">Billing Address Information</div>
   <div className="grid grid-cols-1 md:grid-cols-2 md:gap-3 mb-6">
        <div>
          <label
            htmlFor="countrystate"
            className="block text-md font-medium text-gray-900"
          >
            Select State
          </label>
          <div className="mt-1">
          <Select
           id="countrystate"
        className="appearance-none block w-full  border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          options={stateoptions}
          onChange={handleOnchangestate} />
          </div>
        </div>
        <div>
          <label
            htmlFor="cityofstate"
            className="block text-md font-medium text-gray-900"
          >
            Select City
          </label>{countrystate ?  <div className="mt-1">
          <Select
           id="cityofstate"
        className="appearance-none block w-full  border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          options={citiesoptions}
          onChange={handleOnchangecities} />
          </div> : <div className="flex justify-center my-2 font-medium text-red-500">Please Select your State</div>
          }
        </div>
        <div>
          <label
            htmlFor="yourpincode"
            className="block text-md font-medium text-gray-900"
          >Pin Code
             </label>
          <div className="mt-1">
            <input
            id="pincode"
            placeholder="PINCODE"
              type="Number"
              name="yourpincode"
              value={form && form["pincode"]}
              onChange={handleInput}
              className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="yourarea"
            className="block text-md font-medium text-gray-900"
          >
            Nearest Point
          </label>
          <div className="mt-1">
            <input
            placeholder="Your Current Area , Landmark"
              type="text"
              name="yourarea"
              className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="streetname"
            className="block text-md font-medium text-gray-900"
          >
            Street name
          </label>
          <div className="mt-1">
            <input
            placeholder="Street Name"
              type="text"
              name="streetname"
              className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="buildingno"
            className="block text-md font-medium text-gray-900"
          >
            Building No 
          </label>
          <div className="mt-1">
            <input
            placeholder="Apartment Name (or) Building No."
              type="text"
              name="buildingno"
              className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
        </div>
        </div>
   </>
  )
}

export default Addressinfo;