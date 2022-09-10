import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { Button } from './index'

describe('<Button />', () => {

    it('should render the button with the text "Load more"', () => {

        render(<Button text='Load more' />)

        expect.assertions(1)

        const button  = screen.getByRole('button', { name: /load more/i })

        expect(button).toBeInTheDocument()

    })


    it('should call function on button click', async () => {

        const fn = jest.fn()

        render(<Button text='Load more' loadMorePosts={fn} />)

        const button  = screen.getByRole('button', { name: /load more/i })

        await userEvent.click(button)

        expect(fn).toHaveBeenCalled()

    })

    it('should be disabled when disabled is true', () => {

        render(<Button text='Load more' disabled={true} />)

        const button  = screen.getByRole('button', { name: /load more/i })

        expect(button).toBeDisabled()

    })

    it('should be enabled when disabled is false', () => {

        render(<Button text='Load more' disabled={false} />)

        const button  = screen.getByRole('button', { name: /load more/i })

        expect(button).toBeEnabled()

    })


    it('should match snapshot', () => {

        const { container } = render(<Button text='Load more' disabled={false} />)

        expect(container.firstChild).toMatchSnapshot()

    })
})
