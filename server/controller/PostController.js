
import Post from "../models/post.js"
import * as dotenv from 'dotenv'
import {v2 as cloudinary} from "cloudinary"

dotenv.config();

cloudinary.config({
    cloud_name:process.env.CLOUDINARY_CLOUD_NAME,
    api_key:process.env.CLOUDINARY_API_KEY,
    api_secret:process.env.CLOUDINARY_API_SECRET
})


const getAllPost =async(req,res)=>{
    try {
       const post=await Post.find({});
       res.status(200).json({success:true,data:post}) 
    } catch (error) {
        // res.status(500).json({success:false,message:error})
        console.log(error);
    }
}

const postAll=async(req,res)=>{
    try {
        const {name,prompt,photo}=req.body;
        const photoUrl=await cloudinary.uploader.upload(photo);


        // console.log(typeof(photoUrl));
       

        const newPost=await Post.create({
            name,
            prompt,
            photo:photoUrl.url
        })
        
        // console.log(newPost);
        res.status(201).json({success:true,data:newPost})
    } catch (error) {
        res.status(500).json({success:false,message:error})
    }
}

export {
    getAllPost,
    postAll
}