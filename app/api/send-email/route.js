import { NextResponse } from "next/server";
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  host: 'smtp.gmail.com',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  },
});

export async function POST(request) {

  const payload = await request.json();

  console.log("Payload:::::::>", payload)

  if (payload.operation === "homeContact") {
    try {

      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER,
        subject: 'You received an enquiry from Prospera Hospitality',
        html: `
          <h2>Contact Form Details</h2>
          <ul>
            <li><strong>Full Name:</strong> ${payload.formValues.fullName}</li>
            <li><strong>Email:</strong> ${payload.formValues.email}</li>
            <li><strong>Company Name:</strong> ${payload.formValues.companyName}</li>
            <li><strong>State:</strong> ${payload.formValues.selectedState}</li>
            <li><strong>City:</strong> ${payload.formValues.selectedCity}</li>
            <li><strong>Country:</strong> ${payload.formValues.selectedCode}</li>
            <li><strong>Code:</strong> ${payload.formValues.selectedCodeDial}</li>
            <li><strong>Phone Number:</strong> ${payload.formValues.phoneNumber}</li>
          </ul>
        `,
      });


      return NextResponse.json({ status: 200, message: "Email sent and enquiry saved successfully" });

    } catch (error) {
      return NextResponse.json({ success: true, message: 'Error sending email or saving enquiry' }, { status: 500 });
    }
  } else if (payload.operation === "footercontact") {
    try {

      const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
      };

      if (!validateEmail(payload.email)) {
        return NextResponse.json({ status: 401, message: 'Invalid email address' });
      }

      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER,
        subject: 'You received an enquiry from Prospera Hospitality',
        html: `
          <h2>Contact Form Details</h2>
          <ul>
            <li><strong>Full Name:</strong> ${payload.name}</li>
            <li><strong>Email:</strong> ${payload.email}</li>
            <li><strong>Phone Number:</strong> ${payload.number}</li>
          </ul>
        `,
      });

      return NextResponse.json({ status: 200, message: "Email sent and enquiry saved successfully" });

    } catch (error) {
      console.error("Error::::::>", error);
      return NextResponse.json({ success: true, message: 'Error sending email or saving enquiry' }, { status: 500 });
    }
  } else if (payload.operation === "contactUs") {
    try {

      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER,
        subject: 'You received an enquiry from Prospera Hospitality',
        html: `
          <h2>Contact Form Details</h2>
          <ul>
            <li><strong>Full Name:</strong> ${payload.formValues.name}</li>
            <li><strong>Email:</strong> ${payload.formValues.email}</li>
            <li><strong>Phone Number:</strong> ${payload.formValues.number}</li>
            <li><strong>Company Name:</strong> ${payload.formValues.organization}</li>
          </ul>
        `,
      });


      return NextResponse.json({ status: 200, message: "Email sent and enquiry saved successfully" });

    } catch (error) {
      console.error("Error::::::>", error);
      return NextResponse.json({ success: true, message: 'Error sending email or saving enquiry' }, { status: 500 });
    }
  } else if (payload.operation === "jobContact") {
    try {

      const jobdetails = payload.selectedData;

      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER,
        subject: 'You received an job enquiry from Prospera Hospitality',
        html: `
          <h2>Contact Form Details</h2>
          <ul>
            <li><strong>Full Name:</strong> ${payload.formValues.fullName}</li>
            <li><strong>Email:</strong> ${payload.formValues.email}</li>
            <li><strong>State:</strong> ${payload.formValues.selectedState}</li>
            <li><strong>City:</strong> ${payload.formValues.selectedCity}</li>
            <li><strong>Phone Number:</strong> ${payload.formValues.phoneNumber}</li>
            <li><strong>Resume:</strong> ${payload.url}</li>
            <li><strong>Job Title:</strong> ${jobdetails.title}</li>
            <li><strong>Job Location:</strong> ${jobdetails.location}</li>
            <li><strong>Job experience:</strong> ${jobdetails.experience}</li>
          </ul>
        `,
      });


      return NextResponse.json({ status: 200, message: "Email sent and enquiry saved successfully" });

    } catch (error) {
      return NextResponse.json({ success: true, message: 'Error sending email or saving enquiry' }, { status: 500 });
    }
  } else if (payload.operation === "serviceContact") {
    try {

      const formdetails = payload.formValues;

      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER,
        subject: 'You received an service enquiry from Prospera Hospitality',
        html: `
          <h2>Contact Form Details</h2>
          <ul>
            <li><strong>Full Name:</strong> ${formdetails.fullName}</li>
            <li><strong>Phone Number:</strong> ${formdetails.phoneNumber}</li>
            <li><strong>Email:</strong> ${formdetails.email}</li>
            <li><strong>State:</strong> ${formdetails.selectedState}</li>
            <li><strong>City:</strong> ${formdetails.selectedCity}</li>
            <li><strong>Query:</strong> ${formdetails.query}</li>
            <li><strong>Service applied for:</strong> ${formdetails.service}</li>
          </ul>
        `,
      });


      return NextResponse.json({ status: 200, message: "Email sent and enquiry saved successfully" });

    } catch (error) {
      return NextResponse.json({ success: true, message: 'Error sending email or saving enquiry' }, { status: 500 });
    }
  }
}
