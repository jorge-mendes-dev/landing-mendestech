import { render, screen, fireEvent } from '@testing-library/react'
import { expect, it } from 'vitest'
import CreateQRCode from '/src/components/CreateQRCode/index.jsx'

describe('CreateQRCode', () => {
  it('Should render CreateQRCode', () => {
    render(<CreateQRCode />)

    expect(screen.getByText(/Gere QR Codes com links/i)).toBeInTheDocument()
    expect(
      screen.getByText(/Gere QR Codes baseado em qualquer link./i)
    ).toBeInTheDocument()
  })

  it('Should render CreateQRCode with value', () => {
    render(<CreateQRCode />)

    const urlInput = screen.getByPlaceholderText('www.jorgemendes.com.br')
    fireEvent.change(urlInput, { target: { value: 'www.google.com' } })
    expect(urlInput.value).toBe('www.google.com')

    screen.getByRole('button', { name: 'Gerar QR Code' }).click()
  })

  it('renders correctly CreateQRCode', () => {
    const result = render()
    expect(result).toMatchSnapshot()
  })
})
