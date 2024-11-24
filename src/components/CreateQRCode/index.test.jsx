import { render, screen, fireEvent, act } from '@testing-library/react'
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

  it('Should render CreateQRCode with value', async () => {
    render(<CreateQRCode />)

    const urlInput = screen.getByPlaceholderText('www.jorgemendes.com.br')
    fireEvent.change(urlInput, { target: { value: 'www.google.com' } })
    expect(urlInput.value).toBe('www.google.com')

    await act(async () => {
      const generateButton = screen.getByRole('button', {
        name: /Gerar QR Code/i
      })
      fireEvent.click(generateButton)
    })
  })

  it('Should clear CreateQRCode value', async () => {
    render(<CreateQRCode />)

    const urlInput = screen.getByPlaceholderText('www.jorgemendes.com.br')
    fireEvent.change(urlInput, { target: { value: 'www.google.com' } })
    expect(urlInput.value).toBe('www.google.com')

    await act(async () => {
      const generateButton = screen.getByRole('button', {
        name: /Gerar QR Code/i
      })
      fireEvent.click(generateButton)
    })

    await act(async () => {
      const clearButton = screen.getByRole('button', { name: /Limpar/i })
      fireEvent.click(clearButton)
    })
  })

  it('renders correctly CreateQRCode', () => {
    const result = render()
    expect(result).toMatchSnapshot()
  })
})
