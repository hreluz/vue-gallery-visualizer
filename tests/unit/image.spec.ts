import ImageComponent from '@/components/ImageComponent.vue';
import { shallowMount } from '@vue/test-utils'

describe('Image.vue', () => {
  it('should match the snapshot', () => {
    const wrapper = shallowMount(ImageComponent);
    expect(wrapper.html()).toMatchSnapshot();
  })
})