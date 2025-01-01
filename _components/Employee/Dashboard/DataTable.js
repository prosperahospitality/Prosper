import React, { useState, useEffect, useRef } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Input,
  Button,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Chip,
  User,
  Pagination,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  useDisclosure,
  ModalFooter,
} from "@nextui-org/react";
import { Plus, Pencil } from "lucide-react"
import Swal from 'sweetalert2';

const statusOptions = [
  { name: "Active", uid: "active" },
  { name: "Inactive", uid: "inactive" },
  { name: "Inprocess", uid: "inprocess" },
];

const SearchIcon = (props) => (
  <svg
    aria-hidden="true"
    fill="none"
    focusable="false"
    height="1em"
    role="presentation"
    viewBox="0 0 24 24"
    width="1em"
    {...props}
  >
    <path
      d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
    <path
      d="M22 22L20 20"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
  </svg>
);


const ChevronDownIcon = ({ strokeWidth = 1.5, ...otherProps }) => (
  <svg
    aria-hidden="true"
    fill="none"
    focusable="false"
    height="1em"
    role="presentation"
    viewBox="0 0 24 24"
    width="1em"
    {...otherProps}
  >
    <path
      d="m19.92 8.95-6.52 6.52c-.77.77-2.03.77-2.8 0L4.08 8.95"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={strokeWidth}
    />
  </svg>
);

const statusColorMap = {
  paid: "success",
  unpaid: "danger",
  inprocess: "warning",
};

const INITIAL_VISIBLE_COLUMNS = ["serialNo",
  "date",
  "bookingDate",
  "guestName",
  "reservationNumber",
  "propertyName",
  "alternativeProperty", "checkinDate", "status", "actions"];

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export default function NewDataTable({ users, columns, pagee }) {
  console.log("Data:::::>", users, columns, pagee)
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();


  const [bookingID, setBookingID] = React.useState("");
  const [selectedBooking, setSelectedBooking] = React.useState({});
  const [imagesCloud, setImagesCloud] = React.useState([]);
  const [headerClicked, setHeaderClicked] = React.useState('');
  const [finalCols, setFinalCols] = React.useState(columns);
  const inputRef = useRef(null);
  const [inputValue, setInputValue] = React.useState('');
  const [selectedRowData, setSelectedRowData] = React.useState({});

  const [sortedItemsNew, setSortedItemsNew] = React.useState(users);
  const [actionClicked, setActionClicked] = React.useState('');

  const [filterValue, setFilterValue] = React.useState("");
  const [selectedKeys, setSelectedKeys] = React.useState(new Set([]));
  const [visibleColumns, setVisibleColumns] = React.useState(new Set(INITIAL_VISIBLE_COLUMNS));
  const [statusFilter, setStatusFilter] = React.useState("all");
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [sortDescriptor, setSortDescriptor] = React.useState({
    column: "serialNo",
    direction: "ascending",
  });
  const [page, setPage] = React.useState(1);

  const hasSearchFilter = Boolean(filterValue);

  const headerColumns = React.useMemo(() => {
    if (visibleColumns === "all") return columns;

    setFinalCols(columns.filter((column) => Array.from(visibleColumns).includes(column.uid)))
    return columns.filter((column) => Array.from(visibleColumns).includes(column.uid));
  }, [visibleColumns]);

  const filteredItems = React.useMemo(() => {
    let filteredUsers = [...users];

    filteredUsers = filteredUsers.filter((item) => {
      return item[headerClicked] && item[headerClicked].toString().toLowerCase().includes(inputValue.toLowerCase())
    });

    if (filteredUsers.length === 0) {
      filteredUsers = [...users];
    }

    if (hasSearchFilter) {
      filteredUsers = filteredUsers.filter((user) =>
        user.guestname.toLowerCase().includes(filterValue.toLowerCase()),
      );
    }
    if (statusFilter !== "all" && Array.from(statusFilter).length !== statusOptions.length) {
      filteredUsers = filteredUsers.filter((user) =>
        Array.from(statusFilter).includes(user.status),
      );
    }

    return filteredUsers;
  }, [users, filterValue, statusFilter, inputValue, headerClicked]);

  const pages = Math.ceil(filteredItems.length / rowsPerPage);

  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return filteredItems.slice(start, end);
  }, [page, filteredItems, rowsPerPage]);

  const sortedItems = React.useMemo(() => {
    return [...items].sort((a, b) => {
      const first = a[sortDescriptor.column];
      const second = b[sortDescriptor.column];
      const cmp = first < second ? -1 : first > second ? 1 : 0;

      setSortedItemsNew(sortDescriptor.direction === "descending" ? -cmp : cmp)
      return sortDescriptor.direction === "descending" ? -cmp : cmp;
    });
  }, [sortDescriptor, items]);

  // const sortedItems = React.useMemo(() => {
  //   // Filter the items based on inputValue and headerClicke

  //   // Sort the filtered items based on sortDescriptor
  //   return filteredItems.sort((a, b) => {
  //     const first = a[sortDescriptor.column];
  //     const second = b[sortDescriptor.column];
  //     const cmp = first < second ? -1 : first > second ? 1 : 0;

  //     return sortDescriptor.direction === "descending" ? -cmp : cmp;
  //   });
  // }, [sortDescriptor, items, inputValue, headerClicked]);


  const renderCell = React.useCallback((user, columnKey) => {
    const cellValue = user[columnKey];

    switch (columnKey) {
      case "name":
        return (
          <User
            avatarProps={{ radius: "lg", src: user.avatar }}
            description={user.email}
            name={cellValue}
          >
            {user.email}
          </User>
        );
      case "role":
        return (
          <div className="flex flex-col">
            <p className="text-bold text-small capitalize">{cellValue}</p>
            <p className="text-bold text-tiny capitalize text-default-400">{user.team}</p>
          </div>
        );
      case "status":
        return (
          <Chip className="capitalize" color={statusColorMap[user.status]} size="sm" variant="flat">
            {cellValue}
          </Chip>
        );
      case "actions":
        return (
          <div className="relative flex justify-end items-center gap-2 z-10">
            <button onClick={(e) => handleInfo(user.reservationNumber, "edit")}><Pencil className="size-5" /></button>
            <button onClick={(e) => handleInfo(user.reservationNumber, "view")}>
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-info"><circle cx="12" cy="12" r="10" /><path d="M12 16v-4" /><path d="M12 8h.01" /></svg>
            </button>
          </div>
        );
      default:
        return cellValue;
    }
  }, []);

  const onNextPage = React.useCallback(() => {
    if (page < pages) {
      setPage(page + 1);
    }
  }, [page, pages]);

  const onPreviousPage = React.useCallback(() => {
    if (page > 1) {
      setPage(page - 1);
    }
  }, [page]);

  const onRowsPerPageChange = React.useCallback((e) => {
    setRowsPerPage(Number(e.target.value));
    setPage(1);
  }, []);

  const onSearchChange = React.useCallback((value) => {
    if (value) {
      setFilterValue(value);
      setPage(1);
    } else {
      setFilterValue("");
    }
  }, []);

  const onClear = React.useCallback(() => {
    setFilterValue("")
    setPage(1)
  }, [])

  const topContent = React.useMemo(() => {
    return (
      <div className="flex flex-col gap-4">
        <div className="flex justify-between gap-3 items-end">
          <Input
            isClearable
            className="w-full sm:max-w-[44%]"
            placeholder="Search by name..."
            startContent={<SearchIcon />}
            value={filterValue}
            onClear={() => onClear()}
            onValueChange={onSearchChange}
          />
          <div className="flex gap-3">
            <Dropdown>
              <DropdownTrigger className="hidden sm:flex">
                <Button endContent={<ChevronDownIcon className="text-small" />} variant="flat">
                  Status
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                disallowEmptySelection
                aria-label="Table Columns"
                closeOnSelect={false}
                selectedKeys={statusFilter}
                selectionMode="multiple"
                onSelectionChange={setStatusFilter}
              >
                {statusOptions.map((status) => (
                  <DropdownItem key={status.uid} className="capitalize">
                    {capitalize(status.name)}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>
            <Dropdown>
              <DropdownTrigger className="hidden sm:flex">
                <Button endContent={<ChevronDownIcon className="text-small" />} variant="flat">
                  Columns
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                disallowEmptySelection
                aria-label="Table Columns"
                closeOnSelect={false}
                selectedKeys={visibleColumns}
                selectionMode="multiple"
                onSelectionChange={setVisibleColumns}
              >
                {columns.map((column) => (
                  <DropdownItem key={column.uid} className="capitalize">
                    {capitalize(column.name)}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>
            <Button className="bg-[#800000] text-white" onClick={(e) => handleInfo("", "add")}>
              <Plus className="text-white size-4" />Add Row
            </Button>

          </div>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-default-400 text-small">Total {users.length} users</span>
          <label className="flex items-center text-default-400 text-small">
            Rows per page:
            <select
              className="bg-transparent outline-none text-default-400 text-small"
              onChange={onRowsPerPageChange}
              defaultValue={10}
            >
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="15">15</option>
            </select>
          </label>
        </div>
      </div>
    );
  }, [
    filterValue,
    statusFilter,
    visibleColumns,
    onRowsPerPageChange,
    users.length,
    onSearchChange,
    hasSearchFilter,
  ]);

  const bottomContent = React.useMemo(() => {
    return (
      <div className="py-2 px-2 flex justify-between items-center">
        <span className="w-[30%] text-small text-default-400">
          {selectedKeys === "all"
            ? "All items selected"
            : `${selectedKeys.size} of ${filteredItems.length} selected`}
        </span>
        <Pagination
          isCompact
          showControls
          showShadow
          color="primary"
          page={page}
          total={pages}
          onChange={setPage}
        />
        <div className="hidden sm:flex w-[30%] justify-end gap-2">
          <Button isDisabled={pages === 1} size="sm" variant="flat" onPress={onPreviousPage}>
            Previous
          </Button>
          <Button isDisabled={pages === 1} size="sm" variant="flat" onPress={onNextPage}>
            Next
          </Button>
        </div>
      </div>
    );
  }, [selectedKeys, items.length, page, pages, hasSearchFilter]);

  const handleInfo = (id, action) => {

    if (action === "view") {

      console.log("sheet Id:::::::>", id, filteredItems, filteredItems.find((item) => item.reservationNumber === id))
      setActionClicked("view")
      setBookingID(id)
      if (id) {
        setSelectedRowData(filteredItems.find((item) => item.reservationNumber === id))
      } else {
        setSelectedRowData({})
      }
      onOpen()

    } else if (action === "add") {
      setActionClicked("add")
      onOpen()
    } else if (action === "edit") {
      setActionClicked("edit")
      setBookingID(id)
      if (id) {
        setSelectedRowData(filteredItems.find((item) => item.reservationNumber === id))
      } else {
        setSelectedRowData({})
      }
      onOpen()
    }

  }

  useEffect(() => {
    console.log("Header clicked:::::::>", headerClicked, finalCols);

    // Update finalCols when a header is clicked
    setFinalCols((prevCols) => {
      return prevCols.map((col) => {
        if (col.uid === headerClicked) {
          // console.log("Col:::::>", col)
          return {
            ...col,
            name: (
              <input
                type="text"
                id="headerInput"
                ref={inputRef}
                defaultValue={col.name}
                className="border rounded px-2 py-1 z-50"
                onClick={(e) => e.stopPropagation()}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => e.stopPropagation()}
                onBlur={(e) => {
                  e.stopPropagation()
                  setHeaderClicked('')
                }}
                autoFocus
              />
            ),
          };
        } else {
          console.log("Col:::::>", col, typeof col.name)
          if (typeof col.name !== "string") {
            return {
              ...col,
              name: col.name.props.defaultValue,
            };
          } else {
            return {
              ...col,
              name: col.name,
            };
          }

        }
      });
    });

  }, [headerClicked]);

  useEffect(() => {
    console.log("finalCols::::::>", finalCols)
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [finalCols])

  useEffect(() => {
    console.log("Value::::::>", inputValue, headerClicked, sortedItems);

    // Filter the sortedItems array where the column value matches the inputValue
    const filteredItems = sortedItems.filter((item) => {
      // Assuming `item.value` is the field you want to check against
      return item[headerClicked] && item[headerClicked].toString().includes(inputValue);
    });

    console.log("Filtered Items::::::>", filteredItems);
  }, [inputValue, headerClicked, sortedItems]);



  function toTitleCase(input) {
    return input
      .toLowerCase() // Convert the entire string to lowercase
      .split(' ') // Split the string into an array of words
      .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize the first letter of each word
      .join(' '); // Join the array back into a string
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Submit:::::::>", columns, e.target.serialNo.value)

    let url = 'https://api.sheety.co/25d87b389c572febe4901f70270cfa06/test/checkIn';
    let body;

    if (pagee === "checkin") {

      const checkIn = columns?.reduce((acc, column) => {
        const fieldName = column.uid;

        // Skip the field with the name 'actions'
        if (fieldName !== "actions") {
          acc[fieldName] = e.target[fieldName]?.value || "";
        }
        return acc;
      }, {});

      url = 'https://api.sheety.co/25d87b389c572febe4901f70270cfa06/test/checkIn';
      body = {
        checkIn
      }

    } else if (pagee === "refunded") {

      const refunded = columns?.reduce((acc, column) => {
        const fieldName = column.uid;

        if (fieldName !== "actions") {
          acc[fieldName] = e.target[fieldName]?.value || "";
        }
        return acc;
      }, {});

      url = 'https://api.sheety.co/25d87b389c572febe4901f70270cfa06/test/refunded';
      body = {
        refunded
      }

    } else if (pagee === "advanced") {

      const refunded = columns?.reduce((acc, column) => {
        const fieldName = column.uid;

        if (fieldName !== "actions") {
          acc[fieldName] = e.target[fieldName]?.value || "";
        }
        return acc;
      }, {});

      url = 'https://api.sheety.co/25d87b389c572febe4901f70270cfa06/test/advancedReceived';
      body = {
        advancedReceived
      }

    } else {
      const checkIn = columns?.reduce((acc, column) => {
        const fieldName = column.uid;

        // Skip the field with the name 'actions'
        if (fieldName !== "actions") {
          acc[fieldName] = e.target[fieldName]?.value || "";
        }
        return acc;
      }, {});

      url = 'https://api.sheety.co/25d87b389c572febe4901f70270cfa06/test/checkIn';
      body = {
        checkIn
      }
    }




    console.log("Payload:::::::>", JSON.stringify(body));
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    })
      .then((response) => response.json())
      .then(json => {

        console.log(json.checkIn);

        Swal.fire({

          title: "Added",

          text: "Data Added to Excel!",

          icon: "success"

        }).then((result) => {

          onClose()

          window.location.reload()

        });

      });


  }

  return (
    <><Table
      aria-label="Example table with custom cells, pagination and sorting"
      isHeaderSticky
      bottomContent={bottomContent}
      bottomContentPlacement="outside"
      classNames={{
        wrapper: "max-h-[69vh] custom-scrollbar",
        th: [],
      }}
      selectedKeys={selectedKeys}
      // selectionMode="multiple"
      sortDescriptor={sortDescriptor}
      topContent={topContent}
      topContentPlacement="outside"
      onSelectionChange={setSelectedKeys}
      onSortChange={(e) => console.log("")}
    >
      <TableHeader columns={finalCols}>
        {(column) => (
          <TableColumn
            key={column.uid}
            align={column.uid === "actions" ? "center" : "start"}
            allowsSorting={column.sortable}
            onClick={(e) => {
              setHeaderClicked(column.uid)
            }}
          >
            {
              <div
                className="inline-flex"
              >
                {column.name}
              </div>
            }
          </TableColumn>
        )}
      </TableHeader>
      <TableBody emptyContent={"No users found"} items={sortedItems}>
        {(item) => (
          <TableRow key={item.serialNo}>
            {(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
          </TableRow>
        )}
      </TableBody>
    </Table>

      <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="lg" className='h-auto overflow-y-scroll'>
        <ModalContent>
          {(onClose) => (
            <div className="">
              <ModalHeader className="">Check In Details</ModalHeader>
              <ModalBody>
                {console.log("selectedRowData::::::::>", selectedRowData)}

                {
                  actionClicked === "add"
                    ?
                    <form onSubmit={handleSubmit}>
                      <div className="grid grid-cols-2 gap-2 max-h-[32rem] custom-scrollbar">
                        {columns?.map((item, index) => {

                          if (item.uid === "actions") {

                          } else {
                            return (
                              <div key={item.uid || index} className="flex flex-col gap-2">
                                <div className="font-medium pl-1">{toTitleCase(item.name)}:</div>
                                <div>
                                  <Input id={item.uid} name={item.uid} className="" placeholder={`Enter ${toTitleCase(item.name)}`} />
                                </div>
                              </div>
                            );
                          }

                        })}
                        <div className="w-full col-span-2 flex justify-center items-center pt-4">
                          <Button type="submit">Submit</Button>
                        </div>
                      </div>
                    </form>
                    : actionClicked === "view"
                      ? <div className="grid grid-cols-2 gap-2 max-h-[32rem] custom-scrollbar">

                        {columns?.map((item, index) => {
                          if (selectedRowData[item.uid]) {
                            return (
                              <div key={item.uid || index} className="flex flex-col gap-2">
                                <div className="font-semibold">{toTitleCase(item.name)}:</div>
                                <div>
                                  {selectedRowData[item.uid]}
                                </div>
                              </div>
                            );
                          }
                          return null; // Ensure no undefined elements are returned
                        })}
                      </div>
                      : <form onSubmit={handleSubmit}>
                        <div className="grid grid-cols-2 gap-2 max-h-[32rem] custom-scrollbar">
                          {columns?.map((item, index) => {

                            if (item.uid === "actions") {

                            } else {
                              const isMatch = Object.keys(selectedRowData).find(key => key === item.uid);
                              console.log("isMatch::::::>", selectedRowData[isMatch])

                              if (isMatch) {
                                return (
                                  <div key={item.uid || index} className="flex flex-col gap-2">
                                    <div className="font-medium pl-1">{toTitleCase(item.name)}:</div>
                                    <div>
                                      <Input id={item.uid} name={item.uid} className="" defaultValue={selectedRowData[isMatch]} placeholder={`Enter ${toTitleCase(item.name)}`} />
                                    </div>
                                  </div>
                                );
                              } else {
                                console.log("UID does not match any key in selectedRowData");
                              }
                            }

                          })}
                          <div className="w-full col-span-2 flex justify-center items-center pt-4">
                            <Button type="submit">Update</Button>
                          </div>
                        </div>
                      </form>
                }

              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Cancel
                </Button>
              </ModalFooter>
            </div>
          )}
        </ModalContent>
      </Modal></>

  );
}
