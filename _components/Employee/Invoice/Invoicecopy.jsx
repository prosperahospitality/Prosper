'use client'
import React from 'react';
import axios from 'axios';

const InvoicePage = () => {

  const handleGeneratePdf = async () => {
    const htmlContent = document.documentElement.outerHTML;
    const response = await axios.post('/api/downloadInvoice', { html: htmlContent });
  
    if (response.data?.path) {
      const link = document.createElement('a');
      link.href = response.data.path;
      link.target = '_blank';
      link.download = 'invoice.pdf';
      link.click();
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="bg-white shadow-md py-6 px-6 rounded-lg print:shadow-none print:p-0 print:rounded-none print:border print:border-black">
        <div className="divvv border border-black">
          <div>
            <div className="flex justify-between items-center text-center p-6 print:p-2">
              <div>
                <img
                  src={`http://localhost:3000/img/krafitechlogo.jpg`}
                  className="h-[10%] w-[80%] print:h-[10%] print:w-[75%]"
                  alt="logo"
                />
              </div>
              <div>
                <img
                  src={`http://localhost:3000/img/krafitechcontact.jpg`}
                  className="h-[7rem] w-[17rem] print:h-24 print:w-48"
                  alt="contact"
                />
              </div>
            </div>

            <div className="flex flex-row justify-between item-center border-none border-black">
              <div className="text-sm border-none border-black w-[50%]">
                <div className="flex flex-row justify-between">
                  <div className="text-sm border border-black w-[50%] flex justify-center items-center py-2">
                    <span className="font-bold">Quotation No:</span>
                  </div>
                  <div className="text-sm border border-black w-[50%] py-2">
                    <span className="ml-4">060724/Q006</span>
                  </div>
                </div>
              </div>
              <div className="text-sm border-none border-black w-[50%]">
                <div className="flex flex-row justify-between">
                  <div className="text-sm border border-black w-[50%] flex justify-center items-center py-2">
                    <span className="font-bold">Date:</span>
                  </div>
                  <div className="text-sm border border-black w-[50%] py-2">
                    <span className="ml-4">16-12-2024</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Payment Details */}
            <div className="flex flex-row justify-between item-center border-none border-black">
              <div className="text-sm border border-black w-[50%]">
                <div className="py-4 pl-2">
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
              <div className="text-sm border border-black w-[50%]">
                <div className="py-4 pl-2">
                  <p className="text-sm">
                    Hotel Name: <span>Hotel Apple Tree Restaurant & Cafe Bhaderwah</span>
                  </p>
                  <p className="text-sm">
                    Hotel Address: <span>Jai road, near Gupt Ganga, Bhaderwah, Jammu and Kashmir 182222.</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Other Details */}
            <div className="flex flex-row justify-between item-center border-none border-black my-2">
              <div className="text-sm border-none border-black w-[50%]">
                <div className="flex flex-row justify-between">
                  <div className="text-sm border border-black w-[50%] flex justify-center items-center py-2">
                    <span className="font-bold">Guest Name:</span>
                  </div>
                  <div className="text-sm border border-black w-[50%] py-2">
                    <span className="ml-4">Beerendra Rajput</span>
                  </div>
                </div>
              </div>
              <div className="text-sm border-none border-black w-[50%]">
                <div className="flex flex-row justify-between">
                  <div className="text-sm border border-black w-[50%] flex justify-center items-center py-2">
                    <span className="font-bold">Booking No:</span>
                  </div>
                  <div className="text-sm border border-black w-[50%] py-2">
                    <span className="ml-4">4980621682</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Check-in and Check-out */}
            <div className="flex flex-row justify-between item-center border-none border-black my-2">
              <div className="text-sm border-none border-black w-[50%]">
                <div className="flex flex-row justify-between">
                  <div className="text-sm border border-black w-[50%] flex justify-center items-center py-2">
                    <span className="font-bold">Check-In Date:</span>
                  </div>
                  <div className="text-sm border border-black w-[50%] py-2">
                    <span className="ml-4">MON,16-12-2024</span>
                  </div>
                </div>
              </div>
              <div className="text-sm border-none border-black w-[50%]">
                <div className="flex flex-row justify-between">
                  <div className="text-sm border border-black w-[50%] flex justify-center items-center py-2">
                    <span className="font-bold">Check-Out Date:</span>
                  </div>
                  <div className="text-sm border border-black w-[50%] py-2">
                    <span className="ml-4">WED,18-12-2024</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-row justify-between item-center border-none border-black my-2">
              <div className="text-sm border-none border-black w-[50%]">
                <div className='flex flex-row justify-between'>
                  <div className="text-sm border border-black w-[50%] flex justify-center items-center py-2">
                    <span className="font-bold">Total Guest: </span>
                  </div>
                  <div className="text-sm border border-black w-[50%] py-2">
                    <span className="ml-4">6 ADULTS</span>
                  </div>
                </div>
              </div>
              <div className="text-sm border-none border-black w-[50%]">
                <div className='flex flex-row justify-between'>
                  <div className="text-sm border border-black w-[50%] flex justify-center items-center py-2">
                    <span className="font-bold">Length Of Stay </span>
                  </div>
                  <div className="text-sm border border-black w-[50%] py-2">
                    <span className="ml-4">2 NIGHT</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bill Details */}
            <div className="flex flex-row justify-between item-center border-none border-black my-2">
              <div className="text-sm border-none border-black w-[50%]">
                <div className="flex flex-row justify-between">
                  <div className="text-sm border border-black w-[50%] flex justify-center items-center py-2">
                    <span className="font-bold">Total Bill Amount:</span>
                  </div>
                  <div className="text-sm border border-black w-[50%] py-2">
                    <span className="ml-4">26,208/-</span>
                  </div>
                </div>
              </div>
              <div className="text-sm border-none border-black w-[50%]">
                <div className="flex flex-row justify-between">
                  <div className="text-sm border border-black w-[50%] flex justify-center items-center py-2">
                    <span className="font-bold">Advance Payment:</span>
                  </div>
                  <div className="text-sm border border-black w-[50%] py-2">
                    <span className="ml-4">13,104/-</span>
                  </div>
                </div>
              </div>
            </div>


            <table className="w-full text-xs text-wrap my-4 border-black border-none">
              <thead>
                <tr className=" border-black border">
                  <th className=" border-black border px-2 py-1">Date</th>
                  <th className=" border-black border px-2 py-1">Room Type</th>
                  <th className=" border-black border px-2 py-1">Occupancy</th>
                  <th className=" border-black border px-2 py-1">Rate</th>
                  <th className=" border-black border px-2 py-1">Price per Night</th>
                  <th className=" border-black border px-2 py-1">Total Stay (Nights)</th>
                  <th className=" border-black border px-2 py-1">Total Rooms</th>
                  <th className=" border-black border px-2 py-1">Total Price</th>
                  <th className=" border-black border px-2 py-1">GST 18%</th>
                  <th className=" border-black border px-2 py-1">Total Amount</th>
                </tr>
              </thead>
              <tbody>
                {/* Example Rows */}
                <tr className=''>
                  <td className="border-black border px-2 py-1 text-ellipsis">16-12-2024 TO 18-12-2024</td>
                  <td className="border-black border px-2 py-1 text-ellipsis">Deluxe Queen Room</td>
                  <td className="border-black border px-2 py-1">3</td>
                  <td className="border-black border px-2 py-1">3701.8</td>
                  <td className="border-black border px-2 py-1">3701.8</td>
                  <td className="border-black border px-2 py-1">2</td>
                  <td className="border-black border px-2 py-1">3</td>
                  <td className="border-black border px-2 py-1">22,210</td>
                  <td className="border-black border px-2 py-1">3,998</td>
                  <td className="border-black border px-2 py-1">26,208</td>
                </tr>

                <tr>
                  <td className="border-black border px-2 py-1 text-ellipsis">16-12-2024 TO 18-12-2024</td>
                  <td className="border-black border px-2 py-1 text-ellipsis">Deluxe Queen Room</td>
                  <td className="border-black border px-2 py-1">3</td>
                  <td className="border-black border px-2 py-1">3701.8</td>
                  <td className="border-black border px-2 py-1">3701.8</td>
                  <td className="border-black border px-2 py-1">2</td>
                  <td className="border-black border px-2 py-1">3</td>
                  <td className="border-black border px-2 py-1">22,210</td>
                  <td className="border-black border px-2 py-1">3,998</td>
                  <td className="border-black border px-2 py-1">26,208</td>
                </tr>

                <tr>
                  <td className="border-black border px-2 py-1 text-ellipsis">16-12-2024 TO 18-12-2024</td>
                  <td className="border-black border px-2 py-1 text-ellipsis">Deluxe Queen Room</td>
                  <td className="border-black border px-2 py-1">3</td>
                  <td className="border-black border px-2 py-1">3701.8</td>
                  <td className="border-black border px-2 py-1">3701.8</td>
                  <td className="border-black border px-2 py-1">2</td>
                  <td className="border-black border px-2 py-1">3</td>
                  <td className="border-black border px-2 py-1">22,210</td>
                  <td className="border-black border px-2 py-1">3,998</td>
                  <td className="border-black border px-2 py-1">26,208</td>
                </tr>
                {/* Add more rows as necessary */}
                <tr>
                  <td className="border-black border px-2 py-1"></td>
                  <td className="border-black border px-2 py-1"></td>
                  <td className="border-black border px-2 py-1"></td>
                  <td className="border-black border px-2 py-1"></td>
                  <td className="border-black border px-2 py-1"></td>
                  <td className="border-black border px-2 py-1"></td>
                  <td className="border-black border px-2 py-1"></td>
                  <td className="border-black border px-2 py-1" colSpan="2">Total Bill: </td>
                  <td className="border-black border px-2 py-1">26,208/-</td>
                </tr>
              </tbody>
            </table>

            <style jsx global>{`
  @media print {
    table {
      width: 100%;
      table-layout: fixed;
    }
    th, td {
      font-size: 10px; /* Reduce font size */
      word-wrap: break-word; /* Enable text wrapping */
    }
    .text-wrap {
      overflow-wrap: break-word;
    }
  }
`}</style>


            <div className="flex flex-row justify-between item-center border border-black my-1">
              <span className="font-bold">TWENTY SIX THOUSAND TWO HUNDRED EIGHT ONLY</span>
            </div>


            {/* Footer */}
            <div className="w-full flex justify-end items-start mt-8 print:mt-4">
              <div className="border w-96 border-black mr-2">
                <div className="flex flex-col pl-2 py-2">
                  <div className="font-bold">From Krafitech Hospitality</div>
                  <div>
                    <img
                      src={`http://localhost:3000/img/krafitechsign.png`}
                      className="h-36 w-44 print:h-24 print:w-32"
                      alt="signature"
                    />
                  </div>
                  <div className="font-bold">Authorised Signatory</div>
                </div>
              </div>
            </div>


            <button
              className="bg-blue-500 text-white px-4 py-2 rounded"
              onClick={handleGeneratePdf}
            >
              Generate PDF
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvoicePage;
