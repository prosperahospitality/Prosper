'use client'
import React, { useEffect } from 'react';
import axios from 'axios';
import '@/public/css/styles.css'
import { useSearchParams } from 'next/navigation'
import ReactDOMServer from 'react-dom/server';

const InvoicePage = () => {

  const searchParams = useSearchParams();

  const users = JSON.parse(searchParams.get('users'));
  const columns = JSON.parse(searchParams.get('columns'));
  const page = searchParams.get('page');

  const groupedData = users.reduce((acc, item) => {
    const { bookingNo } = item;
    if (!acc[bookingNo]) {
      acc[bookingNo] = [];
    }
    acc[bookingNo].push(item);
    return acc;
  }, {});

  console.log("Data:::::::>", users, columns, page, groupedData)

  const handleGeneratePdf = async () => {
    // const htmlContent = document.documentElement.outerHTML;
    const pdfRequests = Object.entries(groupedData).map(([bookingNo, items], index) => {

      console.log("Items::::>", bookingNo, items, items.length)

      const reactElement = generateHtmlContent(bookingNo, items);
      const htmlContent = ReactDOMServer.renderToStaticMarkup(reactElement);

      return {
        rowCount: items.length,
        htmlContent,
        outputPath: `C:/Users/Admin/Downloads/${items[0]?.guestName}-${bookingNo}.pdf`,
      };
    });

    console.log("pdfRequests::::::>", pdfRequests)


    const response = await axios.post('/api/downloadInvoice', { pdfRequests: pdfRequests });

    if (response.data?.path) {
      const link = document.createElement('a');
      link.href = response.data.path;
      link.target = '_blank';
      link.download = 'invoice.pdf';
      link.click();
    }
  };

  useEffect(() => {
    handleGeneratePdf()
  }, [])

  function numberToWords(num) {
    const ones = [
      '', 'ONE', 'TWO', 'THREE', 'FOUR', 'FIVE', 'SIX', 'SEVEN', 'EIGHT', 'NINE', 'TEN',
      'ELEVEN', 'TWELVE', 'THIRTEEN', 'FOURTEEN', 'FIFTEEN', 'SIXTEEN', 'SEVENTEEN', 'EIGHTEEN', 'NINETEEN'
    ];

    const tens = [
      '', '', 'TWENTY', 'THIRTY', 'FORTY', 'FIFTY', 'SIXTY', 'SEVENTY', 'EIGHTY', 'NINETY'
    ];

    const thousands = [
      '', 'THOUSAND', 'MILLION', 'BILLION', 'TRILLION'
    ];

    const convertHundreds = (n) => {
      let str = '';
      if (n > 99) {
        str += ones[Math.floor(n / 100)] + ' HUNDRED ';
        n %= 100;
      }
      if (n > 19) {
        str += tens[Math.floor(n / 10)] + ' ';
        n %= 10;
      }
      if (n > 0) {
        str += ones[n] + ' ';
      }
      return str;
    };

    let result = '';
    let group = 0;

    while (num > 0) {
      let n = num % 1000;
      if (n !== 0) {
        result = convertHundreds(n) + thousands[group] + ' ' + result;
      }
      num = Math.floor(num / 1000);
      group++;
    }

    result = result.trim() + ' ONLY';
    return result;
  }


  const generateHtmlContent = (bookingNo, data) => {
    return (
      <div className="container">
        <div className="card">
          <div className="header">
            <div className="logo-container">
              <img
                src="http://localhost:3000/img/krafitechlogo.png"
                className="logo"
                alt="logo"
              />
            </div>
            <div className="contact-img-container">
              <img
                src={`http://localhost:3000/img/krafitechcontact.jpg`}
                className="contact-img"
                alt="contact"
              />
            </div>
          </div>

          <div className="row">
            <div className="column">
              <div className="quotation">
                <div className="label">
                  <span className="">Quotation No:</span>
                </div>
                <div className="value">
                  <span className="">{data[0].quotationNo}</span>
                </div>
              </div>
            </div>
            <div className="column">
              <div className="date">
                <div className="label">
                  <span className="font-bold">Date:</span>
                </div>
                <div className="value">
                  <span className="">{data[0].date}</span>
                </div>
              </div>
            </div>
          </div>


          <div className="second-section">
            <div className="payment-details">
              <div className="subsection">
                <h2 className="text-xs mb-1">Payment Details:</h2>
                <p className="text-xs">Bank Transfer: Krafitech Hospitality</p>
                <p className="text-xs">Account No: 922020052530879, Branch Code: 001965</p>
                <p className="text-xs">Customer ID: 944820751</p>
                <p className="text-xs">IFSC Code: UTIB0001965, MICR Code: 400211127</p>
                <p className="text-xs">SWIFT Code: AXISINBB</p>
                <p className="text-xs">GST NO: 27KOPPS9115M1ZS</p>
              </div>
            </div>
            <div className="hotel-details">
              <div className="subsection">
                <p className="text-xs">
                  Hotel Name: <span>{data[0].hotelName}</span>
                </p>
                <p className="text-xs">
                  Hotel Address:
                  <span
                    style={
                      (data[0].hotelAddress.toLowerCase() === "booking cancelled")
                        ? { color: "red" }
                        : {}
                    }
                  >
                    {data[0].hotelAddress}
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="column">
              <div className="guest-name">
                <span className="label">Guest Name:</span>
                <span className="value">{data[0].guestName}</span>
              </div>
            </div>
            <div className="column">
              <div className="booking-no">
                <span className="label">Booking No:</span>
                <span className="value">{bookingNo}</span>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="column">
              <div className="check-in">
                <span className="label">Check-In Date:</span>
                <span className="value">{data[0].checkinDate}</span>
              </div>
            </div>
            <div className="column">
              <div className="check-out">
                <span className="label">Check-Out Date:</span>
                <span className="value">{data[0].checkoutDate}</span>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="column">
              <div className="total-guests">
                <span className="label">Total Guest: </span>
                <span className="value">{data[0].totalGuest}</span>
              </div>
            </div>
            <div className="column">
              <div className="stay-length">
                <span className="label">Length Of Stay</span>
                <span className="value">{data[0].lengthOfStay}</span>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="column">
              <div className="total-bill">
                <span className="label">Total Bill Amount:</span>
                <span className="value">{data[0].totalBillAmount}</span>
              </div>
            </div>
            <div className="column">
              <div className="advance-payment">
                <span className="label">Advance Payment:</span>
                <span className="value">{data[0].advance1}</span>
              </div>
            </div>
          </div>

          <table className="invoice-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Room Type</th>
                <th>Occupancy</th>
                <th>Rate</th>
                <th>Price per Night</th>
                <th>Total Stay (Nights)</th>
                <th>Total Rooms</th>
                <th>Total Price</th>
                <th>GST 12%</th>
                <th>GST 18%</th>
                <th>Total Amount</th>
              </tr>
            </thead>
            <tbody>
              {data?.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{item.tabDate}</td>
                    <td style={
                      (data[0].hotelAddress.toLowerCase() === "booking cancelled")
                        ? { color: "red" }
                        : {}
                    }>{item.tabRoomType}</td>
                    <td>{item.tabOccupancy}</td>
                    <td>{item.tabRate}</td>
                    <td>{item.tabPricePerNight}</td>
                    <td>{item.tabTotalStayNights}</td>
                    <td>{item.tabTotalRooms}</td>
                    <td>{item.tabTotalPrice}</td>
                    <td>{item.tabGst12per}</td>
                    <td>{item.tabGst18per}</td>
                    <td>{item.tabTotalAmount}</td>
                  </tr>
                )
              })}
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td colSpan="2">Total Bill: </td>
                <td>{data[0].tabTotalAmount}</td>
              </tr>
            </tbody>
          </table>


          <div className="total-in-words">
            <span>IN WORDS: {numberToWords(parseInt(data[0].totalBillAmount.replace(/,/g, ''), 10))}</span>
          </div>

          <div className="footer">
            <div className="signature">
              <div className="authorised-signatory">
                <span>For Krafitech Hospitality</span>
              </div>
              <div className="signature-img-container">
                <img
                  src={`http://localhost:3000/img/krafitechsign.png`}
                  className="signature-img"
                  alt="signature"
                />
              </div>
              <div className="authorised-signatory">
                <span>Authorised Signatory</span>
              </div>
            </div>
          </div>
        </div>
      </div>

    );
  }
  return (
    <div>
      Invoice Generated Successfully!
    </div>
  );
};

export default InvoicePage;
