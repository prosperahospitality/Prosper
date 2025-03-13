'use client';
import React, { useState, useEffect, useRef } from "react";
import { Button, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure, Spinner, Select, SelectItem, Autocomplete, AutocompleteItem, select } from "@nextui-org/react";
import NewDataTable from '@/_components/Employee/Dashboard/DataTable'
import { useSearchParams } from 'next/navigation'
import InvoicePage from "@/_components/Employee/Invoice/Invoice";

const EmployeePage = () => {
  const { isOpen, onOpenChange } = useDisclosure();

  const [users, setUsers] = useState([]);
  const [isClient, setIsClient] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const [columns, setColumns] = useState([]);

  const searchParams = useSearchParams();

  const page = searchParams.get('page');

  const [value, setValue] = React.useState(new Set([]));

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedItems, setSelectedItems] = useState([]);
  const [isOpenn, setIsOpenn] = useState(false);
  const dropdownRef = useRef(null);

  const items = [
    "Apple", "Banana", "Cherry", "Date", "Grape", "Mango", "Orange", "Pineapple", "Strawberry", "Watermelon",
  ];

  const filteredItems = [...new Set(users?.map((item) => item.bookingNo))].filter((item) =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleSelection = (item) => {
    setSelectedItems((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
    );
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpenn(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // function toCamelCase(str) {
  //   const abc = str
  //     .replace(/^(.)/, (match, group1) => group1.toUpperCase())
  //     .replace(/\s(.)/g, (match, group1) => group1.toLowerCase())

  //   console.log("columns::::::>", abc.split("")
  //     .map(char => char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase())
  //     .join(""))

  //   return abc.split("")
  //     .map(char => char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase())
  //     .join("");
  // }

  function convertToCamelCase(data) {
    return data.map(item => {
      const newItem = {};
      for (const key in item) {
        if (item.hasOwnProperty(key)) {
          if (key === "rowIndex") {
            newItem[key] = item[key];
          } else {
            const camelCaseKey = key
              .replace(/^(.)/, (match, group1) => group1.toUpperCase())
              .replace(/\s(.)/g, (match, group1) => group1.toLowerCase())

            const camelCaseKeyy = camelCaseKey.split("")
              .map(char => char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase())
              .join("");

            newItem[camelCaseKeyy] = item[key];
          }
        }
      }
      return newItem;
    });
  }

  function formatKeyToTitle(key) {
    const formatted = key
      .replace(/([a-z])([A-Z])/g, '$1 $2')
      .toUpperCase();

    return formatted;
  }

  const initialFxn = async () => {
    try {
      const apiKey = "GAzqfx03aAhwBr0fwWnZoExB1SNxVWX8cJ8vx7nueonCRhp1TH858bu2ESE";
      const spreadsheetId = "1qYWoO37kNdvimNit4R2_lSmkxiZgyf8Vmtbm8RUApDQ";
      const limit = 100;
      let allData = [];
      let skip = 0;
      let hasMoreData = true;

      if (page === "invoice") {
        try {
          while (hasMoreData) {
            const params = {
              limit,
              skip,
              apiKey,
              spreadsheetId,
            };

            const url = new URL("https://api.sheetson.com/v2/sheets/Invoice");
            Object.keys(params).forEach((key) =>
              url.searchParams.append(key, encodeURIComponent(params[key]))
            );
            url.searchParams.append("t", new Date().getTime());

            const response = await fetch(url);
            const data = await response.json();

            if (data.results && data.results.length > 0) {
              allData = [...allData, ...data.results];
              skip += limit;
            } else {
              hasMoreData = false;
            }
          }
          const finalData = convertToCamelCase(allData);

          setUsers(finalData);

          const uniqueColumns = Object.keys(finalData[0]).map((key) => {
            return { name: formatKeyToTitle(key), uid: key, sortable: true };
          });

          uniqueColumns.push({ name: "ACTIONS", uid: "actions", sortable: false });

          setColumns(uniqueColumns);

        } catch (error) {
          console.error("Error fetching data:", error);
        }
      } else if (page === "pinvoice") {
        try {
          while (hasMoreData) {
            const params = {
              limit,
              skip,
              apiKey,
              spreadsheetId,
            };

            const url = new URL("https://api.sheetson.com/v2/sheets/ProsperaInvoice");
            Object.keys(params).forEach((key) =>
              url.searchParams.append(key, encodeURIComponent(params[key]))
            );
            url.searchParams.append("t", new Date().getTime());

            const response = await fetch(url);
            const data = await response.json();

            if (data.results && data.results.length > 0) {
              allData = [...allData, ...data.results];
              skip += limit;
            } else {
              hasMoreData = false;
            }
          }
          const finalData = convertToCamelCase(allData);

          setUsers(finalData);

          const uniqueColumns = Object.keys(finalData[0]).map((key) => {
            return { name: formatKeyToTitle(key), uid: key, sortable: true };
          });

          uniqueColumns.push({ name: "ACTIONS", uid: "actions", sortable: false });

          setColumns(uniqueColumns);

        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }
    } catch (error) {
      console.error("Error::::::>", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    setIsClient(true);
    initialFxn();
  }, []);

  useEffect(() => {
    if (users.length > 0 && columns.length > 0) {
      console.log("ABC:::::>", users, columns, page);
    }
  }, [users, columns, page]);


  const handleInvoiceDownload = async () => {

    const filteredUsers = users?.filter((item) => [...value].includes(item.bookingNo))

    const url = `http://localhost:3000/invoice?users=${encodeURIComponent(
      JSON.stringify(filteredUsers)
    )}&columns=${encodeURIComponent(JSON.stringify(columns))}&page=${page}`;
    window.open(url, "_blank");

  }

  const handleSelectionChange = (item) => {
    setSelectedItems((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
    );
  
    setValue((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(item)) {
        newSet.delete(item);
      } else {
        newSet.add(item);
      }
      return newSet;
    });
  };
  

  useEffect(() => {
    console.log("Items:::::::>", value, selectedItems)
  }, [value, selectedItems])
  



  return (
    <>
      {!isClient ? (
        <div className="flex justify-center items-center h-screen">
          <Spinner size="lg" />
        </div>
      ) : isLoading ? (
        <div className="flex justify-center items-center h-screen">
          <Spinner size="lg" />
        </div>
      ) : (
        <>
          <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="5xl" className="h-[90%] overflow-y-scroll">
            <ModalContent>
              {(onClose) => (
                <div className="flex justify-center items-center">
                  <ModalHeader className="flex flex-col gap-1">Booking Details</ModalHeader>
                  <ModalBody>
                    {/* Add modal content here */}
                  </ModalBody>
                  <ModalFooter>
                    <Button color="primary" onPress={() => console.log('Submit')}>
                      Submit
                    </Button>
                    <Button color="danger" variant="light" onPress={onClose}>
                      Cancel
                    </Button>
                  </ModalFooter>
                </div>
              )}
            </ModalContent>
          </Modal>
          <div className="lg:ml-2 lg:mr-2">
            <NewDataTable userss={users} columns={columns} pagee={page} />
          </div>
          {/* <div className="flex flex-col gap-2 ml-2">
            <div>
              <Select
                selectionMode="multiple"
                className="max-w-xs"
                placeholder="Select Booking Number"
                selectedKeys={value}
                variant="bordered"
                onChange={handleSelectionChange}
              >
                {[...new Set(users?.map((item) => item.bookingNo))]?.map((uniqueBookingNo) => (
                  <SelectItem key={uniqueBookingNo}>{uniqueBookingNo}</SelectItem>
                ))}
              </Select>
            </div>
            <Button onClick={(e) => handleInvoiceDownload()} className="w-36 bg-red-100 text-black rounded-2xl">Download Invoice</Button>
          </div> */}



<div ref={dropdownRef} className="flex flex-col gap-2 p-4 ml-2 max-w-md mx-auto">
  {/* Search Input & Dropdown Container */}
  <div className="relative">
    <input
      type="text"
      placeholder="Search..."
      className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      onClick={() => setIsOpenn(true)}
    />

    {/* Dropdown List (Now inside a properly positioned container) */}
    {isOpenn && (
      <div
        className="absolute top-full left-0 w-full bg-white border rounded-lg shadow-md transition-opacity duration-300 z-10  custom-scrollbar mb-4"
        style={{ maxHeight: "160px", overflowY: "auto" }}
      >
        <ul>
          {filteredItems.length > 0 ? (
            filteredItems.map((item) => (
              <li
                key={item}
                className={`p-3 cursor-pointer transition-colors duration-200 ${
                  selectedItems.includes(item) ? "bg-blue-500 text-white" : "hover:bg-gray-100"
                }`}
                onClick={() => handleSelectionChange(item)}
              >
                {item}
              </li>
            ))
          ) : (
            <li className="p-2 text-gray-500">No results found</li>
          )}
        </ul>
      </div>
    )}
  </div>

  {/* Selected Items */}
  {selectedItems.length > 0 && (
    <div className="mt-3 p-2 border rounded-lg">
      <h3 className="font-semibold">Selected Items:</h3>
      <div className="flex flex-wrap gap-2 mt-2">
        {selectedItems.map((item) => (
          <span key={item} className="px-3 py-1 bg-blue-500 text-white rounded-full text-sm">
            {item}
          </span>
        ))}
      </div>
    </div>
  )}

  {/* Fixed Position Button */}
  <Button onClick={handleInvoiceDownload} className="w-36 bg-red-100 text-black rounded-2xl mt-4">
    Download Invoice
  </Button>
</div>

        </>
      )}
    </>
  );
};

export default EmployeePage;
