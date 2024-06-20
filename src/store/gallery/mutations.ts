import { MutationTree } from 'vuex';
import { GalleryStateInterface } from './state';
import { Image } from '@/interfaces/images';

const mutation: MutationTree<GalleryStateInterface> = {
    setImages(state, images: Image[]) {
        state.images = images;
    },
    setIsLoading(state, isLoading:boolean) {
        state.isLoading = isLoading;
    },
    setCurrentImage(state, image: Image) {
        state.currentImage= image;
    },
    setCurrentIndex(state, index:number) {
        state.currentIndex = index;
    },
    setImagesLength(state, imagesLength:number) {
        state.imagesLength = imagesLength;
    }
}


export default mutation;