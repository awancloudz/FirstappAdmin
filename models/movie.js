import mongoose, {Schema} from "mongoose";

const movieSchema = new Schema(
    {
        title: String,
        description: String,
        slug: String,
        category: String,      
        square_image: String,
        portrait_image: String,
        landscape_image: String,
        url_streaming: String,
        url_download: String,
        tags: String,           
        duration: String,
        views: Number,
        vote: Number,           
        variable: String 
    },
    {
        timestamps: true,
    }
);

const Movie = mongoose.models.Movie || mongoose.model("Movie", movieSchema);

export default Movie;