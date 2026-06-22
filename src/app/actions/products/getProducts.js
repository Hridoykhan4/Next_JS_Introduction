'use server'

import dbConnect from "@/lib/dbConnect"

export const getProducts = async () => {
    try{
        
        const data =  dbConnect('practice_data').find({}).sort({_id: -1}).toArray();
        return data
    }

    catch(err) {
        console.log(err);
        return []
    }
}