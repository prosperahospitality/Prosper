import { NextResponse } from "next/server";
import { ServiceEnquiries } from "@/_lib/model/enquiries/serviceenquiry/serviceenquiry";
import db from "@/_lib/mongoDB";

export async function GET(req) {

    db.connect();

    await ServiceEnquiries.find();

    return NextResponse.json({ success: true })
}

export async function POST(request) {

    db.connect();

    const payload = await request.json();

    console.log("Payload:::::::>", payload)

    const formValues = payload.formValues;

    const data = {
        fullname: formValues.fullName,
        phonenumber: formValues.phoneNumber,
        email: formValues.email,
        state: formValues.selectedState,
        city: formValues.selectedCity,
        query: formValues.query,
        service: formValues.service,
    }

    const result = await ServiceEnquiries.create(data)

    return NextResponse.json({ result: result, success: true })






}
