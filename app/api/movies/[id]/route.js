import connectMongoDB from "@/libs/mongodb";
import Movie from "@/models/movie";
import { NextResponse } from "next/server";

export async function GET(request, {params}){
    const type = params.id;
    // await connectMongoDB();
    // const movie = await Movie.find({type: type});
    // return NextResponse.json({movie}, {status: 200});
    const movies = await fetch('https://doodapi.com/api/folder/list?key=339596z2p4etizfcyrqvj6&fld_id='+`${type}`, {
        cache: "force-cache",
        headers: {
          'Content-Type': 'application/json',
        },
    })
    const doodmovies = await movies.json();
    return NextResponse.json({doodmovies});
}