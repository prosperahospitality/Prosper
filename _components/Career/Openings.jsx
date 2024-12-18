'use client'
import {
    Button, Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    useDisclosure,
    Input, Select, SelectItem, Spinner
} from '@nextui-org/react'
import React, { useState, useEffect } from 'react'
import Swal from 'sweetalert2';
import statesWithCities from '@/_lib/locations'
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "@/app/config";

const Openings = () => {

    const [file, setFile] = useState(null);

    const [isLoading, setIsLoading] = useState(false);

    const [downloadURL, setDownloadURL] = useState();

    const stateNames = statesWithCities.map((stateObj) => stateObj.state);

    const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure();

    const [cities, setCities] = useState([])

    const [selectedState, setSelectedState] = useState('')

    const [selectedCity, setSelectedCity] = useState('')

    const [selectedData, setSelectedData] = useState({});

    const [applyClicked, setApplyClicked] = useState(false);

    const [formValues, setFormValues] = useState({
        fullName: '',
        email: '',
        selectedState: '',
        selectedCity: '',
        phoneNumber: '',
        resumeLink: '',
    });

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

    const cardDetails = [
        {
            id: "se",
            icon: (<>
                <svg xmlns="http://www.w3.org/2000/svg" width="55" height="55" viewBox="0 0 48 48"><g fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4"><path d="M21 6H9C7.34315 6 6 7.34315 6 9V31C6 32.6569 7.34315 34 9 34H39C40.6569 34 42 32.6569 42 31V21" /><path d="M24 34V42" /><path d="M32 6L28 10L32 14" /><path d="M38 6L42 10L38 14" /><path d="M14 42L34 42" /></g></svg>
            </>),
            title: "Software Engineer",
            location: "Remote / Thane",
            experience: "2+ Years",
            desc: "Remote / Collaborate with a dynamic team to design, develop, and implement cutting-edge solutions. You'll work on exciting projects, contribute to meaningful advancements, and grow your expertise in a supportive, innovation-focused environment.",
        },
        {
            id: "dm",
            icon: (<>
                <svg xmlns="http://www.w3.org/2000/svg" width="55" height="55" viewBox="0 0 16 16"><path fill="currentColor" d="M14.25 2.1a1.25 1.25 0 0 0-1.17-.1L6.91 4.43a1.2 1.2 0 0 1-.46.09H2.5a1.25 1.25 0 0 0-1.25 1.25v.1H0v3h1.25V9a1.25 1.25 0 0 0 1.25 1.22L4 13.4a1.26 1.26 0 0 0 1.13.72h.63A1.25 1.25 0 0 0 7 12.87v-2.53l6.08 2.43a1.3 1.3 0 0 0 .47.09a1.3 1.3 0 0 0 .7-.22a1.25 1.25 0 0 0 .55-1V3.13a1.25 1.25 0 0 0-.55-1.03m-8.5 3.67V9H2.5V5.77zm0 7.1h-.63l-1.23-2.65h1.86zm1.62-3.72A2.3 2.3 0 0 0 7 9V5.7a2.3 2.3 0 0 0 .37-.11l6.18-2.46v8.48zm7.46-3.03v2.5a1.25 1.25 0 0 0 0-2.5" /></svg>
            </>),
            title: "Digital Marketing Specialist",
            location: "Remote / Thane",
            experience: "2+ Years",
            desc: "Drive impactful digital campaigns to elevate Prosperaa's brand presence and reach. You'll lead strategy, analyze performance metrics, and bring creative ideas to life that resonate with our audience and generate growth.",
        }
    ]

    const handleChange = (id) => {
        const data = cardDetails.find((item) => item.id === id);

        setSelectedData(data);

        onOpen();
    }

    const handleSubmit = () => {

        console.log("Form submitted:", formValues, selectedData);

        const submitFxn = async () => {

            const { icon, ...rest } = selectedData;

            setIsLoading(true)


            const response1 = await fetch('/api/enquiries/jobenquiry', {

                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    operation: "jobContact",
                    formValues: formValues,
                    selectedData: rest
                }),
            });

            const result1 = await response1.json();

            console.log("REsult:::::::::::>", result1)

            const url = await handleUpload(result1.result._id);

            const response2 = await fetch('/api/enquiries/jobenquiry', {

                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    operation: "jobContactUpdate",
                    id: result1.result._id,
                    url: url
                }),
            });

            const result2 = await response2.json();

            const response = await fetch('/api/send-email', {

                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    operation: "jobContact",
                    formValues: formValues,
                    selectedData: rest,
                    url: url,
                }),
            });

            if (response.ok) {
                setIsLoading(false)
                Swal.fire({

                    title: "Form submitted successfully!",

                    text: "Team connect with you soon",

                    icon: "success"

                }).then((result) => {

                    setApplyClicked(false)

                    setSelectedData({})

                    setFormValues({
                        fullName: '',
                        email: '',
                        selectedState: '',
                        selectedCity: '',
                        phoneNumber: '',
                        resumeLink: '',
                    })

                });
            } else {

            }

        }
        submitFxn()
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormValues((prevValues) => ({
            ...prevValues,
            [name]: value,
        }));
    };

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleUpload = (id) => {
        return new Promise((resolve, reject) => {
            if (!file) {
                reject("No file to upload");
                return;
            }

            const storageRef = ref(storage, `resumes/${id}`);
            const uploadTask = uploadBytesResumable(storageRef, file);

            uploadTask.on(
                "state_changed",
                (snapshot) => {
                    // Optional: You can show upload progress here
                },
                (error) => {
                    console.error("Upload failed:", error);
                    reject(error);
                },
                () => {
                    // On successful upload, get the download URL
                    getDownloadURL(uploadTask.snapshot.ref)
                        .then((url) => {
                            setDownloadURL(url); // Optional: Save URL to state
                            resolve(url);        // Resolve the promise with the URL
                        })
                        .catch((error) => reject(error));
                }
            );
        });
    };


    useEffect(() => {
        console.log("downloadURL::::::>", downloadURL)
    }, [downloadURL])



    return (
        <div className="w-full flex justify-center items-center mt-20">
            <div className="flex flex-col justify-center items-center lg:w-[80%] w-[90%] gap-16">
    
                <div className="w-full flex justify-center items-center relative">
                    {/* Background Section */}
                    <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center gap-0 z-0">
                        <div className="bg-slate-100 w-[100%] md:w-[60%] sm:w-[50%] h-full"></div>
                        <div className="bg-white w-[0%] md:w-[40%] sm:w-[50%] h-full"></div>
                    </div>
    
                    {/* Foreground Section */}
                    <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-20 z-10 py-10 px-5 lg:pl-10">
    
                        {/* Text Section */}
                        <div className="flex flex-col md:w-[45%] w-full gap-4 md:pl-10">
                            <div className="flex flex-col gap-4">
                                <p className="font-bold text-3xl md:text-4xl text-[#800000]">Current Openings</p>
                                <p className="text-lg md:text-xl font-semibold">
                                    {"Shape the Future with Us – Explore Your Next Big Role"}
                                </p>
                            </div>
                            <div className="text-gray-600 text-sm md:text-md font-semibold">
                                At Prosperaa, we are always seeking talented individuals who are driven, passionate, and eager to grow. Explore opportunities that match your skills and aspirations, and become part of a team that values innovation, collaboration, and excellence.
                            </div>
                            <div className="flex flex-col gap-2">
                                <p className="text-md md:text-lg font-bold text-[#800000]">{"Don’t See a Role That Fits?"}</p>
                                <p className="text-gray-600 text-sm md:text-md font-semibold">
                                    {"We understand that talent comes in many forms, and even if there’s no exact match in our current openings, we’d love to hear from you! If you’re excited about joining Prosperaa and believe you can make a difference, please share your resume and a brief introduction about yourself at prosperaahospitality@gmail.com. Let us know how you can contribute to our vision, and we’ll keep you in mind for future opportunities."}
                                </p>
                            </div>
                        </div>
    
                        {/* Cards Section */}
                        <div className="flex w-full md:w-[55%]">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                                {cardDetails.map((item) => (
                                    <div key={item.id || index} className="border px-3 py-6 rounded-xl border-gray-300 bg-white hover:shadow-[rgba(0,0,0,0.15)_1.95px_1.95px_2.6px] hover:scale-105 transition-transform duration-300">
                                        <div className="flex flex-col justify-start gap-5 items-center">
                                            <div className="flex justify-center items-center text-[#800000]">
                                                {item.icon}
                                            </div>
                                            <div className="font-bold text-gray-600 text-md md:text-lg">
                                                <p>{item.title}</p>
                                            </div>
                                        </div>
                                        <div className="text-start text-gray-500 mt-3 px-3">
                                            <p>
                                                <span className="font-semibold">Location: </span>{item.location}
                                            </p>
                                            <p>
                                                <span className="font-semibold">Experience: </span>{item.experience}
                                            </p>
                                            <p className="line-clamp-3">
                                                <span className="font-semibold">Description: </span>{item.desc}
                                            </p>
                                            <div className="flex justify-center items-center w-full mt-4">
                                                <Button
                                                    className="bg-gray-400 text-white font-bold"
                                                    onPress={(e) => handleChange(item.id)}
                                                >
                                                    Know more / Apply
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
    
                    {/* Modal Section */}
                    <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                        <ModalContent>
                            {(onClose) => (
                                <>
                                    <ModalHeader className="flex flex-col gap-1">
                                        {applyClicked ? "Application Form" : "Job Details"}
                                    </ModalHeader>
                                    <ModalBody>
                                        {isLoading ? (
                                            <div className="flex justify-center items-center h-full">
                                                <Spinner />
                                            </div>
                                        ) : (
                                            <div>
                                                {applyClicked ? (
                                                    <div className="flex flex-col gap-4">
                                                        <Input
                                                            type="text"
                                                            placeholder="Enter Name"
                                                            name="fullName"
                                                            value={formValues.fullName}
                                                            onChange={handleInputChange}
                                                        />
                                                        <Input
                                                            type="text"
                                                            placeholder="Enter Number"
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
                                                        <div className="flex flex-col md:flex-row gap-5">
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
                                                                    <SelectItem key={state}>{state}</SelectItem>
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
                                                                    <SelectItem key={city}>{city}</SelectItem>
                                                                ))}
                                                            </Select>
                                                        </div>
                                                        <Input
                                                            type="file"
                                                            label="Attach Resume"
                                                            onChange={(e) => handleFileChange(e)}
                                                        />
                                                    </div>
                                                ) : (
                                                    <div className="flex flex-col gap-4">
                                                        <p className="text-md md:text-xl font-bold">
                                                            {selectedData.title}
                                                        </p>
                                                        <p>
                                                            <span className="font-semibold">Location: </span>{selectedData.location}
                                                        </p>
                                                        <p>
                                                            <span className="font-semibold">Experience: </span>{selectedData.experience}
                                                        </p>
                                                        <p>
                                                            <span className="font-semibold">Description: </span>{selectedData.desc}
                                                        </p>
                                                    </div>
                                                )}
                                            </div>
                                        )}
                                    </ModalBody>
                                    <ModalFooter>
                                        {applyClicked ? (
                                            <>
                                                <Button
                                                    color="danger"
                                                    variant="light"
                                                    onClick={(e) => setApplyClicked(false)}
                                                >
                                                    Back
                                                </Button>
                                                <Button
                                                    className="bg-[#800000] text-white"
                                                    onClick={(e) => handleSubmit()}
                                                >
                                                    Submit
                                                </Button>
                                            </>
                                        ) : (
                                            <>
                                                <Button color="danger" variant="light" onPress={onClose}>
                                                    Close
                                                </Button>
                                                <Button
                                                    className="bg-[#800000] text-white"
                                                    onClick={(e) => setApplyClicked(true)}
                                                >
                                                    Apply
                                                </Button>
                                            </>
                                        )}
                                    </ModalFooter>
                                </>
                            )}
                        </ModalContent>
                    </Modal>
                </div>
            </div>
        </div>
    );
    
}

export default Openings