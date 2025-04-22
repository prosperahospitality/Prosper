'use client'
import IMAGES from '@/public'
import { Button, Input, Select, SelectItem } from '@nextui-org/react'
import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import statesWithCities from '@/_lib/locations'
import countryPhoneCodes from '@/_lib/countrycodes'

const ContactForm = () => {

    const stateNames = statesWithCities.map((stateObj) => stateObj.state);

    const [cities, setCities] = useState([])

    const [selectedState, setSelectedState] = useState('')

    const [selectedCity, setSelectedCity] = useState('')

    const [selectedCode, setSelectedCode] = useState('')

    const [selectedCodeDial, setSelectedCodeDial] = useState('')

    const [errors, setErrors] = useState({});

    const [formValues, setFormValues] = useState({
        fullName: '',
        email: '',
        companyName: '',
        selectedState: '',
        selectedCity: '',
        selectedCode: 'India',
        selectedCodeDial: '+91',
        phoneNumber: '',
    });

    const handleInputChange = (e) => {
        setErrors({})
        const { name, value } = e.target;
        setFormValues((prevValues) => ({
            ...prevValues,
            [name]: value,
        }));
    };

    const handleSelectionChange = (e) => {
        setSelectedState(e.target.value);
        setFormValues((prevValues) => ({
            ...prevValues,
            selectedState: e.target.value,
        }));
    };

    const handleCityChange = (e) => {
        setSelectedCity(e.target.value);
        setFormValues((prevValues) => ({
            ...prevValues,
            selectedCity: e.target.value,
        }));
    };

    const handleSelectedCountryCode = (e) => {
        setSelectedCodeDial(countryPhoneCodes.find((item) => item.name === e.target.value)?.dial_code);
        setSelectedCode(e.target.value);

        setFormValues((prevValues) => ({
            ...prevValues,
            selectedCode: e.target.value,
            selectedCodeDial: countryPhoneCodes.find((item) => item.name === e.target.value)?.dial_code,
        }));
    };

    useEffect(() => {
        const statesCity = statesWithCities.find((item) => item.state === selectedState)?.cities;
        setCities(statesCity)
    }, [selectedState])

    useEffect(() => {
        console.log("selectedCode, selectedCodeDial", selectedCode, selectedCodeDial)
    }, [selectedCode, selectedCodeDial])

    useEffect(() => {
        console.log("formValues::::::>", formValues)
    }, [formValues])

    const validateForm = () => {
        const newErrors = {};
        if (!formValues.fullName) newErrors.fullName = "Full Name is required";
        if (!formValues.email) {
            newErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
            newErrors.email = "Email address is invalid";
        }
        if (!formValues.companyName) newErrors.companyName = "Company Name is required";
        if (!formValues.selectedState) newErrors.selectedState = "State is required";
        if (!formValues.selectedCity) newErrors.selectedCity = "City is required";
        if (!formValues.selectedCode) newErrors.selectedCode = "Country Code is required";
        if (!formValues.phoneNumber) newErrors.phoneNumber = "Phone Number is required";
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        if (validateForm()) {

            console.log("Form submitted:", formValues);

            const response = await fetch('/api/', {

                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    operation: "homeContact",
                    formValues: formValues,
                }),
            });

            const data = await response.json();

            if (response.ok) {
                alert('Email sent successfully!');
                setFormValues({
                    fullName: '',
                    email: '',
                    companyName: '',
                    selectedState: '',
                    selectedCity: '',
                    selectedCode: 'India',
                    selectedCodeDial: '+91',
                    phoneNumber: '',
                })
                setSelectedState('')
                setSelectedCitysetSelectedState('')
            } else {
                alert(`Error: ${data.message}`);
            }


        }

    };


    return (
        <div className='w-full flex justify-center items-center p-4'>
            <div className='flex flex-col md:flex-row w-full md:w-[82%] h-auto bg-gradient-to-r from-red-200 via-red-50 to-red-50 rounded-2xl'>
                <div className='w-full md:w-[40%] px-4 md:px-8 py-8 md:py-16'>
                    {/* Image (uncomment if needed) */}
                    {/* <Image
                        alt="image"
                        src={IMAGES.policy}
                        width={600}
                        height={600}
                        className="w-full h-full object-cover rounded-2xl"
                    /> */}
                    <div className='text-start text-3xl md:text-5xl text-gray-500'>
                        <div>Let&apos;s grow your </div>
                        <div>Business Together!</div>
                    </div>
                </div>
                <div className='w-full md:w-[60%] px-4 md:px-8 py-8 md:py-16'>
                    <form className='flex flex-col gap-7' onSubmit={handleSubmit}>
                        <Input
                            name="fullName"
                            placeholder="Full Name"
                            value={formValues.fullName}
                            onChange={handleInputChange}
                            classNames={{
                                inputWrapper: ["bg-white h-12 md:h-14"],
                            }}
                        />
                        {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName}</p>}
                        <Input
                            name="email"
                            placeholder="Business Email"
                            value={formValues.email}
                            onChange={handleInputChange}
                            classNames={{
                                inputWrapper: ["bg-white h-12 md:h-14"],
                            }}
                        />
                        {errors.email && <p className="text-red-500">{errors.email}</p>}
                        <Input
                            name="companyName"
                            placeholder="Hotel / Company Name"
                            value={formValues.companyName}
                            onChange={handleInputChange}
                            classNames={{
                                inputWrapper: ["bg-white h-12 md:h-14"],
                            }}
                        />
                        {errors.companyName && <p className="text-red-500">{errors.companyName}</p>}
                        <div className='flex flex-col md:flex-row gap-5'>
                            <Select
                                variant="bordered"
                                placeholder="State"
                                selectedKeys={[formValues.selectedState]}
                                classNames={{
                                    trigger: "h-12 md:h-14 bg-white",
                                    listboxWrapper: "bg-white",
                                }}
                                onChange={handleSelectionChange}
                            >
                                {stateNames?.map((state) => (
                                    <SelectItem key={state}>
                                        {state}
                                    </SelectItem>
                                ))}
                            </Select>
                            <Select
                                variant="bordered"
                                placeholder="City"
                                selectedKeys={[formValues.selectedCity]}
                                classNames={{
                                    trigger: "h-12 md:h-14 bg-white",
                                    listboxWrapper: "bg-white",
                                }}
                                onChange={handleCityChange}
                            >
                                {cities?.map((city) => (
                                    <SelectItem key={city}>
                                        {city}
                                    </SelectItem>
                                ))}
                            </Select>
                        </div>
                        {errors.selectedState && <p className="text-red-500">{errors.selectedState}</p>}
                        {errors.selectedCity && <p className="text-red-500">{errors.selectedCity}</p>}
                        <div className='flex flex-col md:flex-row gap-5'>
                            <Select
                                variant="bordered"
                                label="Country Code"
                                placeholder="Country Code"
                                selectedKeys={[formValues.selectedCode]}
                                classNames={{
                                    trigger: "h-12 md:h-14 bg-white",
                                    listboxWrapper: "bg-white",
                                }}
                                onChange={handleSelectedCountryCode}
                            >
                                {countryPhoneCodes?.map((code) => (
                                    <SelectItem key={code.name}>
                                        {code.name}
                                    </SelectItem>
                                ))}
                            </Select>
                            <Input
                                name="phoneNumber"
                                placeholder="Phone Number"
                                value={formValues.phoneNumber}
                                onChange={handleInputChange}
                                startContent={formValues.selectedCodeDial}
                                classNames={{
                                    inputWrapper: ["bg-white h-12 md:h-14"],
                                }}
                            />

                        </div>
                        {errors.phoneNumber && <p className="text-red-500">{errors.phoneNumber}</p>}
                        <div className='mt-4 text-gray-500 opacity-80 text-sm md:text-base'>
                            By submitting your details, you confirm that you would like to receive marketing emails from prospera hospitality and you agree to the storing and processing of your personal data by prospera hospitality as described in our privacy policy.
                        </div>
                        <button
                            type='submit'
                            className='flex w-full h-12 md:h-[50px] mt-8 gap-2 justify-center items-center px-4 py-2 border rounded-full bg-gradient-to-r from-gray-300 via-gray-500 to-gray-500 text-white font-semibold'
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ContactForm
