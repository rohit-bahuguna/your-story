import axios from "axios";
import { toast } from "react-toastify";


function useMedia() {
    const uploadMedia = async (media) => {
        const mediaType = media.type.split("/")[0];
        if (mediaType === "video" && Math.round(media.size / 1024000) > 10)
            toast.error("Video size should be less than 10MB");
        else if (Math.round(media.size / 1024000) > 4)
            toast.error("Image size should be less than 4MB");
        else {
            const data = new FormData();
            data.append("file", media);
            console.log(process.env.REACT_APP_CLOUDINARY_API_KEY)
            data.append("upload_preset", process.env.REACT_APP_CLOUDINARY_API_KEY);
            const requestOptions = {
                method: "POST",
                body: data,
            };
            const url =
                mediaType === "video"
                    ? `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUDINARY_CLOUD_NAME}/video/upload`
                    : `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUDINARY_CLOUD_NAME}/image/upload`;
            try {
                const response = await fetch(url, requestOptions)
                const result = await response.json()
                return { secure_url: result.secure_url, delete_token: result.delete_token }


            } catch (error) {
                console.error(error);
                toast.error("Media Uploading failed")
            }

        }
    };

    const deleteMedia = async (deleteToken) => {
        try {
            const formData = new FormData();
            formData.append(
                "upload_preset",
                process.env.REACT_APP_CLOUDINARY_API_KEY
            );
            formData.append("token", deleteToken);
            await fetch(`https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUDINARY_CLOUD_NAME}/delete_by_token`, {
                method: "POST",
                body: formData,
            });

            return true

        } catch (error) {
            console.error("deleteMedia: Error In deleting Media", error);

            return true

        }
    };



    return { uploadMedia, deleteMedia };
}

export { useMedia };
