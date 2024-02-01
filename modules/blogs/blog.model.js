

// schema=>model => controller=>api()
const mongoose =require("mongoose");

const BlogSchema = new mongoose.Schema({
    title: {type: string},
    author: {},
    publishedDate:{},
    categories:{},
    wordCount: {},
    time:{},
    featuredImages:{},
});