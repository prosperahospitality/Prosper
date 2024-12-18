import db from "@/_lib/mongoDB";
import { User } from "@/_lib/model/user/user"
import { NextResponse } from "next/server";

export async function GET(req){
    let user_Id = req.nextUrl.searchParams.get('userID');
    console.log("UserId", user_Id);
    let data = [];
    let data_by_id = [];
    let success=true;
    try {
        db.connect()

        if(user_Id) {
            data_by_id = await User.findOne({user_Id : user_Id});
        }else {
            data = await User.find();
        }
    } catch (error) {
        data={result:"error"}
        success=false;
    }
    return NextResponse.json({result:data,data_by_id,success})
}

export async function POST(request){
    const payload = await request.json();
    console.log("Payload", payload);
    db.connect();

    if(payload.operation === "update") {

        const ress = await User.updateOne({ user_id: payload.user_id, mobile_number: payload.mobile_number }, {hashPassword: payload.password});

        return NextResponse.json({ress,success:true})
    }else if(payload.operation === "updatePropCode") {
        console.log("Payload", payload.userID);


    }else{
        const user = new User(payload);
        const result = await user.save();
        return NextResponse.json({result,success:true})
    }
}