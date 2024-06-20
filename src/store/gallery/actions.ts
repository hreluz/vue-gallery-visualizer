import { ActionTree } from 'vuex';
import { GalleryStateInterface } from './state';
import { StateInterface } from '../index';
import { Image } from '@/interfaces/images';
import galleryAPi from '@/apis/galleryApi';

const actions: ActionTree<GalleryStateInterface, StateInterface> = {
    async loadImages({commit}) {
        commit('setIsLoading', true);

        const images = await galleryAPi.get<Image[]>('/images.json').then(r => Object.values(r.data));

        if (!images) {
            commit('setImages', []);
            return;
        }

        commit('setImages', images);
        commit('setCurrentIndex', 0);
        commit('setImagesLength', images.length - 1);
        commit('setCurrentImage', images[0]);
        commit('setIsLoading', false);
    },
    nextImage({commit, state}) {
        const {currentIndex, imagesLength, images} = state;
        
        if (imagesLength && (currentIndex+1) <= imagesLength ) {
            commit('setCurrentIndex', currentIndex+1);
            commit('setCurrentImage', images[currentIndex+1]);
        }
    },
    previousImage({commit, state}) {
        const {currentIndex, imagesLength, images} = state;
        
        if (imagesLength && (currentIndex-1) >= 0 ) {
            commit('setCurrentIndex', currentIndex-1);
            commit('setCurrentImage', images[currentIndex-1]);
        }
    }
}

export default actions;