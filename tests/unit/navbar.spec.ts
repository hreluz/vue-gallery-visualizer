import NavBar from '@/components/NavBar.vue';
import { shallowMount } from '@vue/test-utils'

describe('NavBar.vue', () => {
  it('should match the snapshot', () => {
    const wrapper = shallowMount(NavBar);
    expect(wrapper.html()).toMatchSnapshot();
  })
})