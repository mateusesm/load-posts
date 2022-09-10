import { render, screen } from '@testing-library/react'

import userEvent from '@testing-library/user-event'

import { SearchInput } from '.'

describe('<SearchInput />', () => {

    it('should have a value of searchValue', () => {

        const fn = jest.fn()

        render(<SearchInput handleChange={fn} searchValue={'Testando'} />)

        const searchInput = screen.getByPlaceholderText(/type your search/i)

        expect(searchInput.value).toBe('Testando')

    })

    it('should call handleChange function on each key press', async () => {

        const fn = jest.fn()

        const { debug } = render(<SearchInput handleChange={fn} />)

        const searchInput = screen.getByPlaceholderText(/type your search/i)

        const value = 'O valor'

        await userEvent.type(searchInput, value)

        expect(searchInput.value).toBe(value)

        expect(fn).toHaveBeenCalledTimes(value.length)

    })

    it('should match snapshot', () => {

        const fn = jest.fn()

        const { container } = render(<SearchInput handleChange={fn} />)

        expect(container).toMatchSnapshot()

    })

})