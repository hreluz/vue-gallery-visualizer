import { StateInterface } from "@/store";
import { computed } from "vue";
import { useStore } from "vuex"

export const useGalleryStore = () => {

    const store = useStore<StateInterface>();

    return {
        //state
        isLoading: computed(() => store.state.gallery.isLoading),
        images: computed(() => store.state.gallery.images),
        currentImage: computed(() => store.state.gallery.currentImage),

        //getters
        showPreviousButton: computed<boolean>(() => store.getters['gallery/showPreviousButton']),
        showNextButton: computed<boolean>(() => store.getters['gallery/showNextButton']),

        //actions
        loadImages: () => store.dispatch('gallery/loadImages'),
        nextImage: () => store.dispatch('gallery/nextImage'),
        previousImage: () => store.dispatch('gallery/previousImage'),

        //mutations
    }
}