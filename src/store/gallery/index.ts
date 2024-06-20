import { Module } from 'vuex';
import { StateInterface } from '../index';

import state, { GalleryStateInterface } from './state';
import actions from './actions';
import getters from './getters';
import mutations from './mutations';

const galleryModule: Module<GalleryStateInterface, StateInterface> = {
    namespaced: true,
    actions,
    getters,
    mutations,
    state
}


export default galleryModule;
