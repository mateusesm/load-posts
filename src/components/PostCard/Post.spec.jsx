import { render, screen } from '@testing-library/react'

import { PostCard } from './index'
import mock from './mock'

const props = mock

describe('<PostCard />', () => {

    it('should render PostCard correctly', () => {

        render(<PostCard {...props} />)

        expect(screen.getByRole('img', { name: 'title 1'})).toHaveAttribute('src', props.cover)

        expect(screen.getByRole('heading', { name: /title 1/i })).toBeInTheDocument()

        expect(screen.getByText('body 1')).toBeInTheDocument()


    })

    it('should match snapshot', () => {

        const { container } = render(<PostCard {...props} />)

        expect(container.firstChild).toMatchSnapshot()

    }) 

})