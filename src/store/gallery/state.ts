import { Image } from "@/interfaces/images";

const defaultImage = {
    id:      0,
    path:    '',
    watched: false
}

export interface GalleryStateInterface {
    isLoading: boolean;
    images: Image[],
    firstImage: Image,
    currentImage: Image,
    currentIndex: number,
    imagesLength: number
}

function state(): GalleryStateInterface {
    return {
        isLoading: true,
        images: [],
        firstImage: {...defaultImage},
        currentImage: {...defaultImage},
        currentIndex: -1,
        imagesLength: -1
    }
}

export default state;