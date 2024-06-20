import { createStore } from 'vuex';
import { GalleryStateInterface } from './gallery/state';
import galleryModule from './gallery';

export interface StateInterface {
  gallery: GalleryStateInterface
}

export default createStore<StateInterface>({
  modules: {
    gallery: galleryModule
  }
})