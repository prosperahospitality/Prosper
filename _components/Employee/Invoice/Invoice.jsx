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
    // const htmlContent = document.documentElement.outerHTML;F
    const pdfRequests = Object.entries(groupedData).map(([bookingNo, items], index) => {

      console.log("Items::::>", bookingNo, items)
  
      const reactElement = generateHtmlContent(bookingNo, items);
      const htmlContent = ReactDOMServer.renderToStaticMarkup(reactElement);
      
      return {
        htmlContent,
        outputPath: `C:/Users/Admin/Downloads/invoice${index + 1}.pdf`,
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

const generateHtmlContent = (bookingNo, data) => {
  return (
    <div className="container">
      <div className="card">
        <div className="header">
          <div className="logo-container">
            <img
              src="https://www.prosperaahospitality.com/img/krafitechlogo.png"
              className="logo"
              alt="logo"
            />
          </div>
          <div className="contact-img-container">
            <img
              src={`https://www.prosperaahospitality.com/img/krafitechcontact.jpg`}
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
              <h2 className="text-sm mb-1">Payment Details:</h2>
              <p className="text-sm">Bank Transfer: Krafitech Hospitality</p>
              <p className="text-sm">Account No: 922020052530879</p>
              <p className="text-sm">Branch Code: 001965</p>
              {/* <p className="text-sm">IFSC Code: UTIB0001965</p>
                  <p className="text-sm">MICR Code: 400211127</p>
                  <p className="text-sm">SWIFT Code: AXISINBB</p>
                  <p className="text-sm">GST NO: 27KOPPS9115M1ZS</p> */}
            </div>
          </div>
          <div className="hotel-details">
            <div className="subsection">
              <p className="text-sm">
                Hotel Name: <span>Hotel Apple Tree Restaurant & Cafe Bhaderwah</span>
              </p>
              <p className="text-sm">
                Hotel Address: <span>Jai road, near Gupt Ganga, Bhaderwah, Jammu and Kashmir 182222.</span>
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
              <span className="value">MON,16-12-2024</span>
            </div>
          </div>
          <div className="column">
            <div className="check-out">
              <span className="label">Check-Out Date:</span>
              <span className="value">WED,18-12-2024</span>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="column">
            <div className="total-guests">
              <span className="label">Total Guest: </span>
              <span className="value">6 ADULTS</span>
            </div>
          </div>
          <div className="column">
            <div className="stay-length">
              <span className="label">Length Of Stay</span>
              <span className="value">2 NIGHT</span>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="column">
            <div className="total-bill">
              <span className="label">Total Bill Amount:</span>
              <span className="value">26,208/-</span>
            </div>
          </div>
          <div className="column">
            <div className="advance-payment">
              <span className="label">Advance Payment:</span>
              <span className="value">13,104/-</span>
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
              <th>GST 18%</th>
              <th>Total Amount</th>
            </tr>
          </thead>
          <tbody>
            {/* Example Rows */}
            <tr>
              <td>16-12-2024 TO 18-12-2024</td>
              <td>Deluxe Queen Room</td>
              <td>3</td>
              <td>3701.8</td>
              <td>3701.8</td>
              <td>2</td>
              <td>3</td>
              <td>22,210</td>
              <td>3,998</td>
              <td>26,208</td>
            </tr>

            <tr>
              <td>16-12-2024 TO 18-12-2024</td>
              <td>Deluxe Queen Room</td>
              <td>3</td>
              <td>3701.8</td>
              <td>3701.8</td>
              <td>2</td>
              <td>3</td>
              <td>22,210</td>
              <td>3,998</td>
              <td>26,208</td>
            </tr>

            <tr>
              <td>16-12-2024 TO 18-12-2024</td>
              <td>Deluxe Queen Room</td>
              <td>3</td>
              <td>3701.8</td>
              <td>3701.8</td>
              <td>2</td>
              <td>3</td>
              <td>22,210</td>
              <td>3,998</td>
              <td>26,208</td>
            </tr>

            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td colSpan="2">Total Bill: </td>
              <td>26,208/-</td>
            </tr>
          </tbody>
        </table>


        <div className="total-in-words">
          <span>TWENTY SIX THOUSAND TWO HUNDRED EIGHT ONLY</span>
        </div>

        <div className="footer">
          <div className="signature">
            <div className="authorised-signatory">
              <span>For Krafitech Hospitality</span>
            </div>
            <div className="signature-img-container">
              <img
                src={`https://www.prosperaahospitality.com/img/krafitechsign.png`}
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
