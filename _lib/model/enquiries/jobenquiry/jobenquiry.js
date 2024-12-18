import mongoose from "mongoose";

const jobModel = new mongoose.Schema({
    fullname: String,
    email: String,
    state: String,
    city: String,
    phonenumber: String,
    resumeLink: String,
    jobtitle: String,
    joblocation: String,
    jobexperience: String,
});

export const JobEnquiries = mongoose.models.jobenquiries || mongoose.model("jobenquiries", jobModel);