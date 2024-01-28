"use server"
import cloudinary from 'cloudinary';
import { revalidatePath } from 'next/cache';


export async function setAsFavorite(pubicId: string, isFavorite:boolean) {
    if(isFavorite){
        await cloudinary.v2.uploader.add_tag("favorites", [pubicId]);
    }else{
        await cloudinary.v2.uploader.remove_tag("favorites", [pubicId]);
    }
    revalidatePath('/gallery');

}