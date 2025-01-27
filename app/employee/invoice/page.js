'use client';
import React, { useState, useEffect } from "react";
import { Button, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure, Spinner } from "@nextui-org/react";
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
    const url = `https://www.prosperaahospitality.com/invoice?users=${encodeURIComponent(
      JSON.stringify(users)
    )}&columns=${encodeURIComponent(JSON.stringify(columns))}&page=${page}`;
    window.open(url, "_blank");
  }

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
          <div>
            <button onClick={(e) => handleInvoiceDownload()} className="p-4 bg-red-100 text-black rounded-2xl">Download Pdf</button>
          </div>
        </>
      )}
    </>
  );
};

export default EmployeePage;
