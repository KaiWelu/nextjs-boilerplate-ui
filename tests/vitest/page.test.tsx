import { expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import Page from '../../app/playwright/page'

test('Page', () => {
    render(<Page />)
    expect(screen.getByText('This is for the playwright test')).toBeDefined()
})
