import * as dotenv from 'dotenv'
dotenv.config();

import { Configuration,OpenAIApi } from 'openai';

const configuration=new Configuration({
    apiKey:process.env.OPENAI_API_KEY
 })
const openai=new OpenAIApi(configuration)




const getDalleController=async(req,res)=>{
    res.send("hiiii")
}

const postDalleController=async(req,res)=>{
    try {
        const {prompt} =req.body;

        // console.log("prompt-> ",prompt)

        const aiResponse=await openai.createImage({
           prompt,
           n:1,
           size:'1024x1024',
           response_format:'b64_json'
        })

        const image=aiResponse.data.data[0].b64_json;

        // console.log("image-> ",image)

        res.status(200).send({photo:image})
    } catch (error) {
        console.log(error);
        res.status(500).send(error?.response.error.data.message)
    }
}

export {getDalleController,postDalleController}