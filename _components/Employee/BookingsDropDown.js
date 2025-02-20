'use client'
import React from 'react'
import { CalendarCheck, ChevronDown } from 'lucide-react'
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Tooltip } from "@nextui-org/react";
import { button as buttonStyles } from "@nextui-org/theme";
import Link from 'next/link'
import { ClockCounterClockwise } from "@/_components/Icons"
import { useSearchParams } from 'next/navigation'

export default function BookingsDropDown({ isOpen, toggleSidebar }) {
  const handleItemClick = () => {

    if (toggleSidebar) toggleSidebar();
  };

  const searchParams = useSearchParams();

  return (
    <div>
      <Dropdown placement='right-bottom'>
        <DropdownTrigger>
          <Link
            href="#"
            className={`${buttonStyles({ color: "default", size: "md", radius: "full", variant: "light" })} ${isOpen ? 'hover:bg-lime-500 text-foreground-300 hover:text-black justify-between w-[90%]' : 'text-foreground-300'}`}
          >
            <div className='flex gap-2'>
              {isOpen ? <><svg xmlns="http://www.w3.org/2000/svg" width={25} height={25} viewBox="0 0 32 32"><path fill="currentColor" d="M10 18h8v2h-8zm0-5h12v2H10zm0 10h5v2h-5z"></path><path fill="currentColor" d="M25 5h-3V4a2 2 0 0 0-2-2h-8a2 2 0 0 0-2 2v1H7a2 2 0 0 0-2 2v21a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2M12 4h8v4h-8Zm13 24H7V7h3v3h12V7h3Z"></path></svg>Collection Team</> :
                <>
                  <Tooltip
                    showArrow
                    placement="right"
                    content="Bookings"
                    classNames={{
                      base: [
                        // arrow color
                        "before:bg-primary-300 dark:before:bg-primary",
                      ],
                      content: [
                        "py-2 px-4 shadow-xl",
                        "text-white bg-primary-300 from-primary-300 to-primary-300",
                      ],
                    }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width={25} height={25} className='mr-10 hidden lg:flex' viewBox="0 0 32 32"><path fill="currentColor" d="M10 18h8v2h-8zm0-5h12v2H10zm0 10h5v2h-5z"></path><path fill="currentColor" d="M25 5h-3V4a2 2 0 0 0-2-2h-8a2 2 0 0 0-2 2v1H7a2 2 0 0 0-2 2v21a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2M12 4h8v4h-8Zm13 24H7V7h3v3h12V7h3Z"></path></svg>
                  </Tooltip>
                </>
              }
            </div>
            {isOpen ? <ChevronDown aria-hidden="true" /> : ''}
          </Link>
        </DropdownTrigger>
        <DropdownMenu
          aria-label="Dropdown Variants"
          color="primary"
          variant="flat"
        >
          <DropdownItem
            onClick={() => window.location.href = '/employee/dashboard?page=checkin'}
            className="text-foreground-600 hover:text-primary"
            startContent={<ClockCounterClockwise aria-hidden="true" className="text-foreground" />}
            key="new"
          >
            Check In
          </DropdownItem>

          <DropdownItem
            onClick={() => window.location.href = '/employee/dashboard?page=refunded'}
            className="text-foreground-600 hover:text-primary"
            startContent={<ClockCounterClockwise aria-hidden="true" className="text-foreground" />}
            key="new1"
          >
            Refunded
          </DropdownItem>

          <DropdownItem
            onClick={() => window.location.href = '/employee/dashboard?page=advanced'}
            className="text-foreground-600 hover:text-primary"
            startContent={<ClockCounterClockwise aria-hidden="true" className="text-foreground" />}
            key="new2"
          >
            Advanced Received
          </DropdownItem>

        </DropdownMenu>
      </Dropdown>


      <Dropdown placement='right-bottom'>
        <DropdownTrigger>
          <Link
            href="#"
            className={`${buttonStyles({ color: "default", size: "md", radius: "full", variant: "light" })} ${isOpen ? 'hover:bg-lime-500 text-foreground-300 hover:text-black justify-between w-[90%]' : 'text-foreground-300'}`}
          >
            <div className='flex gap-2'>
              {isOpen ? <><svg xmlns="http://www.w3.org/2000/svg" width={25} height={25} viewBox="0 0 24 24"><path fill="currentColor" d="M3.25 5A2.75 2.75 0 0 1 6 2.25h10A2.75 2.75 0 0 1 18.75 5v5.5a.75.75 0 0 1-1.5 0V5c0-.69-.56-1.25-1.25-1.25H6c-.69 0-1.25.56-1.25 1.25v14.382a.25.25 0 0 0 .362.224l1-.5a1.75 1.75 0 0 1 1.832.165l.906.679a.25.25 0 0 0 .3 0l.862-.647a1.75 1.75 0 0 1 1.95-.1l.674.404a.75.75 0 1 1-.772 1.286l-.673-.404a.25.25 0 0 0-.279.014l-.862.647a1.75 1.75 0 0 1-2.1 0l-.906-.68a.25.25 0 0 0-.261-.023l-1 .5a1.75 1.75 0 0 1-2.533-1.565z"></path><path fill="currentColor" d="M17.5 14.75a2.75 2.75 0 1 0 0 5.5a2.75 2.75 0 0 0 0-5.5m-4.25 2.75a4.25 4.25 0 1 1 8.5 0a4.25 4.25 0 0 1-8.5 0m6.093-1.405a.75.75 0 0 1 0 1.06l-2.28 2.28l-1.406-1.405a.75.75 0 1 1 1.06-1.06l.346.344l1.22-1.22a.75.75 0 0 1 1.06 0M6.25 7A.75.75 0 0 1 7 6.25h6.5a.75.75 0 0 1 0 1.5H7A.75.75 0 0 1 6.25 7m0 3A.75.75 0 0 1 7 9.25h8a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1-.75-.75m0 3a.75.75 0 0 1 .75-.75h3.5a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1-.75-.75m0 3a.75.75 0 0 1 .75-.75h3.5a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1-.75-.75"></path></svg>Generate Invoice</> :
                <>
                  <Tooltip
                    showArrow
                    placement="right"
                    content="Bookings"
                    classNames={{
                      base: [
                        // arrow color
                        "before:bg-primary-300 dark:before:bg-primary",
                      ],
                      content: [
                        "py-2 px-4 shadow-xl",
                        "text-white bg-primary-300 from-primary-300 to-primary-300",
                      ],
                    }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width={25} height={25} className='mr-10 hidden lg:flex' viewBox="0 0 24 24"><path fill="currentColor" d="M3.25 5A2.75 2.75 0 0 1 6 2.25h10A2.75 2.75 0 0 1 18.75 5v5.5a.75.75 0 0 1-1.5 0V5c0-.69-.56-1.25-1.25-1.25H6c-.69 0-1.25.56-1.25 1.25v14.382a.25.25 0 0 0 .362.224l1-.5a1.75 1.75 0 0 1 1.832.165l.906.679a.25.25 0 0 0 .3 0l.862-.647a1.75 1.75 0 0 1 1.95-.1l.674.404a.75.75 0 1 1-.772 1.286l-.673-.404a.25.25 0 0 0-.279.014l-.862.647a1.75 1.75 0 0 1-2.1 0l-.906-.68a.25.25 0 0 0-.261-.023l-1 .5a1.75 1.75 0 0 1-2.533-1.565z"></path><path fill="currentColor" d="M17.5 14.75a2.75 2.75 0 1 0 0 5.5a2.75 2.75 0 0 0 0-5.5m-4.25 2.75a4.25 4.25 0 1 1 8.5 0a4.25 4.25 0 0 1-8.5 0m6.093-1.405a.75.75 0 0 1 0 1.06l-2.28 2.28l-1.406-1.405a.75.75 0 1 1 1.06-1.06l.346.344l1.22-1.22a.75.75 0 0 1 1.06 0M6.25 7A.75.75 0 0 1 7 6.25h6.5a.75.75 0 0 1 0 1.5H7A.75.75 0 0 1 6.25 7m0 3A.75.75 0 0 1 7 9.25h8a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1-.75-.75m0 3a.75.75 0 0 1 .75-.75h3.5a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1-.75-.75m0 3a.75.75 0 0 1 .75-.75h3.5a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1-.75-.75"></path></svg>
                  </Tooltip>
                </>
              }
            </div>
            {isOpen ? <ChevronDown aria-hidden="true" /> : ''}
          </Link>
        </DropdownTrigger>
        <DropdownMenu
          aria-label="Dropdown Variants"
          color="primary"
          variant="flat"
        >
          <DropdownItem
            onClick={() => window.location.href = '/employee/invoice?page=pinvoice'}
            className="text-foreground-600 hover:text-primary"
            startContent={<ClockCounterClockwise aria-hidden="true" className="text-foreground" />}
            key="new"
          >
            Prospera
          </DropdownItem>

          <DropdownItem
            onClick={() => window.location.href = '/employee/invoice?page=invoice'}
            className="text-foreground-600 hover:text-primary"
            startContent={<ClockCounterClockwise aria-hidden="true" className="text-foreground" />}
            key="new1"
          >
            Krafitech
          </DropdownItem>

        </DropdownMenu>
      </Dropdown>
    </div>



  )
}