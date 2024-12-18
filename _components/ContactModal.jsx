'use client'
import {
    Button, Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    useDisclosure,
    Input, Select, SelectItem,
    Textarea
} from '@nextui-org/react'
import React, { useState, useEffect } from 'react'
import Swal from 'sweetalert2';
import statesWithCities from '@/_lib/locations'

const ContactModal = ({ modalClicked, onCloseClicked, serviceClicked }) => {

    const stateNames = statesWithCities.map((stateObj) => stateObj.state);

    const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure();

    const [cities, setCities] = useState([])

    const [selectedState, setSelectedState] = useState('')

    const [selectedCity, setSelectedCity] = useState('')

    const [formValues, setFormValues] = useState({
        fullName: '',
        email: '',
        selectedState: '',
        selectedCity: '',
        phoneNumber: '',
        query: '',
        service: '',
    });

    useEffect(() => {
        if (modalClicked) {
            onOpen()
        }
    }, [modalClicked])

    const handleInputChange = (e) => {
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

    useEffect(() => {

        const statesCity = statesWithCities.find((item) => item.state === selectedState)?.cities;
        setCities(statesCity)

    }, [selectedState])

    const handleClose = () => {
        onClose()
        onCloseClicked(true)
        setFormValues({
            fullName: '',
            email: '',
            selectedState: '',
            selectedCity: '',
            phoneNumber: '',
            query: '',
            service: '',
        })
    }

    useEffect(() => {
        if (!isOpen) {
            onCloseClicked(true)
            setFormValues({
                fullName: '',
                email: '',
                selectedState: '',
                selectedCity: '',
                phoneNumber: '',
                query: '',
                service: '',
            })
        }
    }, [isOpen])

    useEffect(() => {
        if (serviceClicked) {
            setFormValues((prevValues) => ({
                ...prevValues,
                service: serviceClicked,
            }));
        }
    }, [serviceClicked])


    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Form Values::::>", formValues)

        const response1 = await fetch('/api/enquiries/serviceenquiry', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                operation: "serviceContact",
                formValues: formValues,
            }),
        });

        const result1 = await response1.json()

        console.log("REsult1::::>", result1)

        const response = await fetch('/api/send-email', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                operation: "serviceContact",
                formValues: formValues,
            }),
        });

        if (response.ok) {
            Swal.fire({

                title: "Form submitted successfully!",

                text: "Team connect with you soon",

                icon: "success"

            }).then((result) => {


            });
        } else {

        }
    }

    return (
        <div>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange} className='mymodal' id="mymodal">
                <ModalContent>
                    {(onClose) => (
                        <>
                            <form className='flex flex-col' onSubmit={handleSubmit}>
                                <ModalHeader className="flex flex-col gap-1">{"Contact Form"}</ModalHeader>
                                <ModalBody>

                                    <div>
                                        <div className='flex flex-col gap-4'>
                                            <Input
                                                required
                                                type="text"
                                                placeholder="Enter Name *"
                                                name="fullName"
                                                value={formValues.fullName}
                                                onChange={handleInputChange} />
                                            <Input
                                                required
                                                type="text"
                                                placeholder="Enter Number *"
                                                name="phoneNumber"
                                                value={formValues.phoneNumber}
                                                onChange={handleInputChange}
                                            />
                                            <Input
                                                type="text"
                                                placeholder="Enter Email"
                                                name="email"
                                                value={formValues.email}
                                                onChange={handleInputChange}
                                            />
                                            <div className='flex flex-col md:flex-row gap-5'>
                                                <Select
                                                    variant="bordered"
                                                    placeholder="State"
                                                    selectedKeys={[formValues.selectedState]}
                                                    classNames={{
                                                        trigger: "bg-white",
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
                                                        trigger: "bg-white",
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
                                            <Textarea
                                                type="text"
                                                placeholder="Any Queries"
                                                name="query"
                                                value={formValues.query}
                                                onChange={handleInputChange}
                                                rows={3}
                                            />
                                            {/* <Input
                                            type="file"
                                            label="Attach Resume"
                                        /> */}
                                        </div>

                                    </div>

                                </ModalBody>
                                <ModalFooter>
                                    <>
                                        <Button color="danger" variant="light" onClick={(e) => handleClose()}>
                                            Close
                                        </Button>
                                        <Button className='bg-[#800000] text-white' type='submit'>
                                            Submit
                                        </Button>
                                    </>

                                </ModalFooter>
                            </form>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </div>
    )
}

export default ContactModal




