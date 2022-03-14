import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helper'
import Logo from '.'

describe('<Logo />', () => {
  it('should render a normal logo when size is default', () => {
    renderWithTheme(<Logo />)
    expect(screen.getByLabelText(/cash manager/i).parentElement).toHaveStyle({
      width: '20rem'
    })
  })

  it('should render a bigger logo', () => {
    renderWithTheme(<Logo size="large" />)
    expect(screen.getByLabelText(/cash manager/i).parentElement).toHaveStyle({
      width: '30rem'
    })
  })

  it('should render a bigger logo without text if hideOnMobile', () => {
    renderWithTheme(<Logo hideOnMobile />)
    expect(
      screen.getByLabelText(/cash manager/i).parentElement
    ).toHaveStyleRule('width', '5.8rem', {
      media: '(max-width: 768px)'
    })
  })
})
