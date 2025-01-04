'use client';
import React, { useState, useEffect } from "react";
import { Button, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure, Spinner } from "@nextui-org/react";
import NewDataTable from '@/_components/Employee/Dashboard/DataTable'
import axios from "axios";
import * as XLSX from "xlsx";
import { useSearchParams } from 'next/navigation'

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
    // Convert camelCase to words with spaces
    const formatted = key
      .replace(/([a-z])([A-Z])/g, '$1 $2') // Insert a space before uppercase letters
      .toUpperCase(); // Convert to uppercase

    return formatted;
  }



  // const initialFxn = async () => {
  //   try {

  //     const fetchData = async () => {
  //       const urll = 'https://api.sheety.co/25d87b389c572febe4901f70270cfa06/test/checkIn';

  //       try {
  //         const response = await fetch(urll);
  //         if (!response.ok) {
  //           throw new Error('Network response was not ok');
  //         }
  //         const json = await response.json();
  //         console.log("dataaaaaaaaaaaa",json, json.checkIn);
  //       } catch (error) {
  //         console.log(error.message);
  //       } finally {
  //         // setLoading(false);
  //       }
  //     };

  //     fetchData();

  //     let url =
  //       "https://docs.google.com/spreadsheets/d/1qYWoO37kNdvimNit4R2_lSmkxiZgyf8Vmtbm8RUApDQ/edit?usp=sharing";

  //     if (page === "checkin") {

  //     } else if (page === "refunded") {
  //       url = "https://docs.google.com/spreadsheets/d/1qYWoO37kNdvimNit4R2_lSmkxiZgyf8Vmtbm8RUApDQ/edit?gid=630449#gid=630449"
  //     } else if (page === "advanced") {
  //       url = "https://docs.google.com/spreadsheets/d/1qYWoO37kNdvimNit4R2_lSmkxiZgyf8Vmtbm8RUApDQ/edit?gid=1547654062#gid=1547654062"
  //     }



  //     const options = {
  //       url,
  //       responseType: "arraybuffer",
  //     };

  //     let axiosResponse = await axios(options);
  //     const workbook = XLSX.read(axiosResponse.data, { type: 'array' });

  //     const worksheets = workbook.SheetNames.map(sheetName => {
  //       const sheet = workbook.Sheets[sheetName];
  //       let data = XLSX.utils.sheet_to_json(sheet, { header: 1 }); // Read data as a 2D array

  //       // Extract headers (first row of data)
  //       const headers = data[0];

  //       console.log("sheet Headers:::::>", headers)

  //       // Clean up the data
  //       const cleanedData = data.slice(1)
  //         .map(row => {
  //           let cleanedRow = {};

  //           // Ensure every header has a corresponding value (or "null" if empty)
  //           headers.forEach((header, index) => {
  //             if (header) {
  //               cleanedRow[header] = row[index] !== undefined && row[index] !== "" ? row[index] : "null";
  //             }
  //           });

  //           return cleanedRow;
  //         })
  //         .filter(row => {
  //           // Remove rows where all values are "null"
  //           return Object.values(row).some(value => value !== "null");
  //         });

  //       return {
  //         sheetName,
  //         data: cleanedData,
  //       };
  //     });

  //     console.log("Sheet Names and Data:", worksheets);

  //     const cleanData = (worksheets) => {
  //       return worksheets.map((sheet) => {
  //         if (sheet.data.length > 1) {
  //           const headers = Object.keys(sheet.data[0] || {})
  //             .filter((key) => key !== "__EMPTY")
  //             .map((header) => sheet.data[0][header]);

  //           return {
  //             sheetName: sheet.sheetName,
  //             data: {
  //               headers,
  //               rows: sheet.data
  //                 .map((row, rowIndex) => {
  //                   if (rowIndex > 0) {

  //                     const mappedRow = {};

  //                     headers.forEach((header, cellIndex) => {
  //                       const value = row[Object.keys(row)[cellIndex]];
  //                       mappedRow[header] = value !== undefined && value !== "" ? value : "N/A";
  //                     });

  //                     return mappedRow;
  //                   }
  //                   return null;
  //                 })
  //                 .filter((row) => {
  //                   return (
  //                     row &&
  //                     Object.values(row).some((value) => value !== "N/A")
  //                   );
  //                 }),
  //             },
  //           };
  //         }
  //         return null;
  //       });
  //     };

  //     console.log("cleanData(worksheets):", cleanData(worksheets));


  //     const columns = cleanData(worksheets)
  //       ?.map((item) => {
  //         return item?.data?.headers.map((header) => {
  //           return { name: header, uid: toCamelCase(header), sortable: true };
  //           // return { name: header, uid: header.replace(/\s+/g, '').toLowerCase(), sortable: true };
  //         });
  //       })
  //       .flat()
  //       .filter(Boolean)
  //       .filter((column) => column.name.toLowerCase() !== "null" && column.uid.toLowerCase() !== "null");

  //     columns?.push({ name: "ACTIONS", uid: "actions" });

  //     // Filter unique objects based on `name` and `uid`
  //     const uniqueColumns = Array.from(
  //       new Map(columns.map((item) => [item.uid, item])).values()
  //     );

  //     console.log("uniqueColumns::::::::>", uniqueColumns)

  //     // Update state
  //     setColumns(uniqueColumns);


  //     const formattedSheet = cleanData(worksheets)[0].data.rows.map(obj => {
  //       const newObj = {};
  //       for (const key in obj) {
  //         // const formattedKey = key.replace(/\s+/g, '').toLowerCase();
  //         const formattedKey = toCamelCase(key);
  //         newObj[formattedKey] = obj[key];
  //       }
  //       return newObj;
  //     });
  //     console.log("Sheet 1:", formattedSheet, uniqueColumns);
  //     setUsers(formattedSheet)
  //     console.log("json:\n", JSON.stringify(cleanData(worksheets)), "\n\n");


  //   } catch (error) {
  //     console.error("Error::::::>", error);
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };

  // const initialFxn = async () => {
  //   try {

  //     console.log("PAge:::::::>", page)

  //     if (page === "checkin" || page === "" || page === null) {
  //       let url =
  //         "https://api.sheety.co/25d87b389c572febe4901f70270cfa06/test/checkIn";
  //       const response = await fetch(url);
  //       const json = await response.json();


  //       setUsers(json.checkIn);

  //       const uniqueColumns = Object.keys(json.checkIn[0]).map((key) => {
  //         return { name: formatKeyToTitle(key), uid: key, sortable: true };
  //       });
  //       uniqueColumns.push({ name: "ACTIONS", uid: "actions", sortable: false });

  //       console.log("Sheet 1: ", json.checkIn, uniqueColumns);
  //       setColumns(uniqueColumns);

  //     } else if (page === "refunded") {
  //       let url =
  //         "https://api.sheety.co/25d87b389c572febe4901f70270cfa06/test/refunded";

  //       const response = await fetch(url);
  //       const json = await response.json();

  //       setUsers(json.refunded);

  //       const uniqueColumns = Object.keys(json.refunded[0]).map((key) => {
  //         return { name: formatKeyToTitle(key), uid: key, sortable: true };
  //       });
  //       uniqueColumns.push({ name: "ACTIONS", uid: "actions", sortable: false });

  //       console.log("Sheet 1: ", json.refunded, uniqueColumns);
  //       setColumns(uniqueColumns);

  //     } else if (page === "advanced") {
  //       let url =
  //         "https://api.sheety.co/25d87b389c572febe4901f70270cfa06/test/advancedReceived";

  //       const response = await fetch(url);
  //       const json = await response.json();

  //       setUsers(json?.advancedReceived);

  //       const uniqueColumns = Object.keys(json?.advancedReceived[0]).map((key) => {
  //         return { name: formatKeyToTitle(key), uid: key, sortable: true };
  //       });
  //       uniqueColumns.push({ name: "ACTIONS", uid: "actions", sortable: false });

  //       console.log("Sheet 1: ", json.advancedReceived, uniqueColumns);
  //       setColumns(uniqueColumns);
  //     }


  //   } catch (error) {
  //     console.error("Error::::::>", error);
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };



  const initialFxn = async () => {
    try {

      const apiKey = "GAzqfx03aAhwBr0fwWnZoExB1SNxVWX8cJ8vx7nueonCRhp1TH858bu2ESE";
      const spreadsheetId = "1qYWoO37kNdvimNit4R2_lSmkxiZgyf8Vmtbm8RUApDQ";
      const limit = 100;
      let allData = [];
      let skip = 0;
      let hasMoreData = true;

      if (page === "checkin" || page === "" || page === null) {

        // const params = {
        //   limit: 100,
        //   apiKey: "GAzqfx03aAhwBr0fwWnZoExB1SNxVWX8cJ8vx7nueonCRhp1TH858bu2ESE",
        //   spreadsheetId: "1qYWoO37kNdvimNit4R2_lSmkxiZgyf8Vmtbm8RUApDQ"
        // };
        // const urll = new URL("https://api.sheetson.com/v2/sheets/Checkin");

        // Object.keys(params).forEach(key => urll.searchParams.append(key, encodeURIComponent(params[key])));

        // urll.searchParams.append('t', new Date().getTime());

        // const responsee = await fetch(urll);
        // const dataa = await responsee.json();
        // const data = convertToCamelCase(dataa.results);

        // setUsers(data);

        // const uniqueColumns = Object.keys(data[0]).map((key) => {
        //   return { name: formatKeyToTitle(key), uid: key, sortable: true };
        // });
        // uniqueColumns.push({ name: "ACTIONS", uid: "actions", sortable: false });

        // console.log("Sheet 1: ", data, uniqueColumns);
        // setColumns(uniqueColumns);

        try {
          while (hasMoreData) {
            const params = {
              limit,
              skip,
              apiKey,
              spreadsheetId,
            };

            const url = new URL("https://api.sheetson.com/v2/sheets/Checkin");
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
          console.log("All Data:", finalData);

          setUsers(finalData);

          const uniqueColumns = Object.keys(finalData[0]).map((key) => {
            return { name: formatKeyToTitle(key), uid: key, sortable: true };
          });
          uniqueColumns.push({ name: "ACTIONS", uid: "actions", sortable: false });

          console.log("Sheet 1: ", finalData, uniqueColumns);
          setColumns(uniqueColumns);

        } catch (error) {
          console.error("Error fetching data:", error);
        }

      } else if (page === "refunded") {
        try {
          while (hasMoreData) {
            const params = {
              limit,
              skip,
              apiKey,
              spreadsheetId,
            };

            const url = new URL("https://api.sheetson.com/v2/sheets/Refunded");
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
          console.log("All Data:", finalData);

          setUsers(finalData);

          const uniqueColumns = Object.keys(finalData[0]).map((key) => {
            return { name: formatKeyToTitle(key), uid: key, sortable: true };
          });
          uniqueColumns.push({ name: "ACTIONS", uid: "actions", sortable: false });

          console.log("Sheet 1: ", finalData, uniqueColumns);
          setColumns(uniqueColumns);

        } catch (error) {
          console.error("Error fetching data:", error);
        }

      } else if (page === "advanced") {
        try {
          while (hasMoreData) {
            const params = {
              limit,
              skip,
              apiKey,
              spreadsheetId,
            };

            const url = new URL("https://api.sheetson.com/v2/sheets/AdvancedReceived");
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
          console.log("All Data:", finalData);

          setUsers(finalData);

          const uniqueColumns = Object.keys(finalData[0]).map((key) => {
            return { name: formatKeyToTitle(key), uid: key, sortable: true };
          });
          uniqueColumns.push({ name: "ACTIONS", uid: "actions", sortable: false });

          console.log("Sheet 1: ", finalData, uniqueColumns);
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

  // First useEffect: Initialize data

  useEffect(() => {
    setIsClient(true);
    initialFxn();
  }, []);

  // Second useEffect: Log state changes
  useEffect(() => {
    if (users.length > 0 && columns.length > 0) {
      console.log("ABC:::::>", users, columns);
    }
  }, [users, columns]);



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
        </>
      )}
    </>
  );
};

export default EmployeePage;
