import db from "@/_lib/mongoDB";
import { prosperajob } from "@/_lib/model/job/job"
import { NextResponse } from "next/server";


export async function POST(request) {

    const payload = await request.json();

    await db.connect();

    if (payload.operation === "addjob") {
        try {

            const { jobtitle, location, jobtype, jobdescription, responsibilties, requirement, benefits, applicationprocess, status } = payload;
            console.log(payload, ":payload here");

            const newJob = new prosperajob({
                jobtitle: jobtitle,
                location: location,
                jobtype: jobtype,
                jobdescription: jobdescription,
                responsibilties: responsibilties,
                requirement: requirement,
                benefits: benefits,
                applicationprocess: applicationprocess,
                status:'Active'
            })
            console.log(newJob, "newJob");
            await newJob.save();

            return NextResponse.json({ status: 200, message: "job upload successfully", newJob })
        } catch (error) {
            console.error("Error during user registration:", error);
            return NextResponse.json({ status: 500, message: "An error occurred during registration" });
        }
    }
    else if (payload.operation === "fetchjob") {

        try {
            const fetchjob = await prosperajob.find({});
            console.log(fetchjob, "fetchjob");

            if (!fetchjob) {
                return NextResponse.json({ status: 401, message: "jobs not found" })
            }

            return NextResponse.json({ status: 200, message: "job fetch successfully", fetchjob })

        } catch (error) {
            console.error("Error during user registration:", error);
            return NextResponse.json({ status: 500, message: "An error occurred during registration" });
        }
    }
    else if (payload.operation === "fetchsinglejob") {
        try {

            const { _id } = payload;
            console.log(payload, "payload id");

            const findbyidjob = await prosperajob.findById(_id);
            console.log(findbyidjob, "findbyidjob");

            if (!findbyidjob) {
                return NextResponse.json({ status: 401, message: "job not found" })
            }

            return NextResponse.json({ status: 200, message: "job find sucessfully", findbyidjob })

        } catch (error) {
            console.error("Error during user registration:", error);
            return NextResponse.json({ status: 500, message: "An error occurred during registration" });
        }
    }
    else if (payload.operation === "editjob") {
        try {

            const { _id, jobtitle, location, jobtype, jobdescription, responsibilties, requirement, benefits, applicationprocess, status } = payload;
            console.log(payload, ":payload here");

            const findjobdetail = await prosperajob.findByIdAndUpdate(_id, {
                jobtitle: jobtitle,
                location: location,
                jobtype: jobtype,
                jobdescription: jobdescription,
                responsibilties: responsibilties,
                requirement: requirement,
                benefits: benefits,
                applicationprocess: applicationprocess,
                status:status,
            });
            console.log(findjobdetail, "findjobdetail");

            if (!findjobdetail) {
                return NextResponse.json({ status: 401, message: "jobdetails not found" })
            }

            return NextResponse.json({ status: 200, message: "jobdata updated successfully", findjobdetail })

        } catch (error) {
            console.error("Error during user registration:", error);
            return NextResponse.json({ status: 500, message: "An error occurred during registration" });
        }
    }
    else if (payload.operation === "deletejobdata") {
        try {

            const { _id } = payload;
            console.log(payload, "payload check");

            const deletejobdata = await prosperajob.findByIdAndDelete(_id);
            console.log(deletejobdata, "deletejobdata");

            if (!deletejobdata) {
                return NextResponse.json({ status: 401, message: "job not found" })
            }

            return NextResponse.json({ status: 200, message: "job delete successfully" })

        } catch (error) {
            console.error("Error during user registration:", error);
            return NextResponse.json({ status: 500, message: "An error occurred during registration" });
        }
    }
}