import { NextResponse } from "next/server";
import { JobEnquiries } from "@/_lib/model/enquiries/jobenquiry/jobenquiry";
import db from "@/_lib/mongoDB";

export async function GET(req) {

  db.connect();

  await JobEnquiries.find();

  return NextResponse.json({ success: true })
}

export async function POST(request) {

  db.connect();

  const payload = await request.json();

  console.log("Payload:::::::>", payload)

  if (payload.operation === "jobContactUpdate") {

    const result = await JobEnquiries.updateOne({ _id: payload.id }, { resumeLink: payload.url })

    return NextResponse.json({ result: result, success: true })

  } else {

    const formValues = payload.formValues;

    const jobInfo = payload.selectedData;

    const data = {
      fullname: formValues.fullName,
      email: formValues.email,
      state: formValues.selectedState,
      city: formValues.selectedCity,
      phonenumber: formValues.phoneNumber,
      resumeLink: formValues.resumeLink,
      jobtitle: jobInfo.title,
      joblocation: jobInfo.location,
      jobexperience: jobInfo.experience,
    }

    const result = await JobEnquiries.create(data)

    return NextResponse.json({ result: result, success: true })


  }



}
