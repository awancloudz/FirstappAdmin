import connectMongoDB from "@/libs/mongodb";
import Movie from "@/models/movie";
import { NextResponse } from "next/server";

export async function GET(){
    await connectMongoDB();
    const movies = await Movie.find();
    return NextResponse.json({movies});
}

export async function POST(request){
    const{title, description, slug, category, square_image, portrait_image, landscape_image, url_streaming, url_download, tags, duration, views, vote, variable} = await request.json();
    await connectMongoDB();
    await Movie.create({title, description, slug, category, square_image, portrait_image, landscape_image, url_streaming, url_download, tags, duration, views, vote, variable});
    return NextResponse.json({message:"Movie Created"},{status:201});
}