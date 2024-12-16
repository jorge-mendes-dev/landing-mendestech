import { render, screen, waitFor } from '@testing-library/react'
import { expect, it } from 'vitest'
import Counter from '/src/components/Counter/index.jsx'
import CounterItem from '/src/components/Counter/CounterItem.jsx'
import { random } from 'utils/generic'

describe('Counter', () => {
  it('Should render Counter', async () => {
    render(<Counter />)

    expect(
      await waitFor(() => screen.getByText(/Years of experience/i))
    ).toBeInTheDocument()
    expect(
      await waitFor(() => screen.getByText(/Positive feedbacks/i))
    ).toBeInTheDocument()
    expect(
      await waitFor(() => screen.getByText(/Completed Projects/i))
    ).toBeInTheDocument()
    expect(
      await waitFor(() => screen.getByText(/Repositories on GitHub/i))
    ).toBeInTheDocument()
  })

  it('Should render Counter item', async () => {
    const { container } = render(
      <CounterItem
        key={random()}
        title={'Years of experience'}
        reference={'experience'}
        measurement={'%'}
        level={8}
      />
    )

    expect(
      await waitFor(() => screen.getByText(/Years of experience/i))
    ).toBeInTheDocument()
    expect(
      await waitFor(() => container.querySelector('#experience'))
    ).toBeInTheDocument()
  })

  it('renders correctly Counter', () => {
    const result = render()
    expect(result).toMatchSnapshot()
  })
})
