import MenuButtons from "@/components/MenuButtons.vue";
import { shallowMount, VueWrapper } from '@vue/test-utils'

describe('MenuButtons.vue', () => {

  let wrapper:VueWrapper;

  beforeEach(() => {
    wrapper = shallowMount(MenuButtons);
  });

  it('should match the snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should show the three buttons', () => {
    wrapper.find('.previous-button').exists();
    wrapper.find('.random-button').exists();
    wrapper.find('.next-button').exists();
  });

  it('should have the previous button disabled', () => {
    const previousButton = wrapper.find('.previous-button');
    const randomButton = wrapper.find('.random-button');

    expect(previousButton.attributes().disabled).toBeDefined();
    expect(randomButton.attributes().disabled).toBeUndefined();
  });
})
