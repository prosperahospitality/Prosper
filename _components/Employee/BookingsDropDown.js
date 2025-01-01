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
    <Dropdown placement='right-bottom'>
      <DropdownTrigger>
        <Link
          href="#"
          className={`${buttonStyles({ color: "default", size: "md", radius: "full", variant: "light" })} ${isOpen ? 'hover:bg-lime-500 text-foreground-300 hover:text-black justify-between w-[90%]' : 'text-foreground-300'}`}
        >
          <div className='flex gap-2'>
            {isOpen ? <><CalendarCheck />Collection Team</> :
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
                  <CalendarCheck className='mr-10 hidden lg:flex' />
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
  )
}