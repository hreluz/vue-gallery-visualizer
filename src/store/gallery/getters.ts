
import { GetterTree } from 'vuex';
import { GalleryStateInterface } from './state';
import { StateInterface } from '../index';

const getters: GetterTree<GalleryStateInterface, StateInterface> = {
    showPreviousButton(state) {
        return state.imagesLength > 0 && state.currentIndex > 0;
    },
    showNextButton(state) {
        return state.imagesLength > 0 && state.currentIndex < state.imagesLength;
    }
}

export default getters;