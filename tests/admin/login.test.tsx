import React from 'react'
import { render, screen } from '@testing-library/react'
import AdminLogin from '@/app/admin/login/page'

// Mock useRouter
jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: jest.fn(),
  }),
}))

// Mock lucide-react icons
jest.mock('lucide-react', () => ({
  ArrowRight: () => <div data-testid="arrow-right-icon" />
}))

describe('AdminLogin Component', () => {
  it('renders the login heading', () => {
    render(<AdminLogin />)
    const heading = screen.getByRole('heading', { name: /Admin Access/i })
    expect(heading).toBeInTheDocument()
  })
})
