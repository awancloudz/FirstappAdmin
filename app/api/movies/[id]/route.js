import connectMongoDB from "@/libs/mongodb";
import Movie from "@/models/movie";
import { NextResponse } from "next/server";

export async function GET(request, {params}){
    const type = params.id;
    await connectMongoDB();
    const movie = await Movie.find({type: type});
    return NextResponse.json({movie}, {status: 200});
}