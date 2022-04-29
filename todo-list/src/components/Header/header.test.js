import { render, screen } from "@testing-library/react"
import Header from './Header'

describe('Header', () => {
  it('should render the correct header', async () => {
    render(<Header />)
    const logo = await screen.findByAltText('logo com a imagem de um avião de papel escrito minha listinha')
    expect(logo).toBeInTheDocument()
  })
})