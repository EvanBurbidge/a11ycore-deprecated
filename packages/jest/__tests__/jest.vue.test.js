const {runA11yJest} = require("..");

const Image = {
  data: () => ({ src: '#' }),
  template: '<img id="test-image" :src="src" />'
}

describe('Vue', () => {
  it('renders correctly', async () => {
    const { mount } = require('@vue/test-utils')
    const wrapper = mount(Image)
    const results = await runA11yJest(wrapper.element)
    expect(results.violations.length).toBeGreaterThan(1);
  })

  it('renders a vue testing library container correctly', async () => {
    const { render } = require('@testing-library/vue')
    const { container } = render(Image)
    const results = await runA11yJest(container)
    expect(results.violations.length).toEqual(1);
  })

})
