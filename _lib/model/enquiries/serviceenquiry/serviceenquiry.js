import mongoose from "mongoose";

const serviceenquiriesModel = new mongoose.Schema({
    fullname: String,
    phonenumber: String,
    email: String,
    state: String,
    city: String,
    query: String,
    service: String,
});

export const ServiceEnquiries = mongoose.models.serviceenquiries || mongoose.model("serviceenquiries", serviceenquiriesModel);