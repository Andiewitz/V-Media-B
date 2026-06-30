'use server'

import { cookies } from 'next/headers'

export async function loginAction(password: string) {
  if (password === 'v-M3d12@') {
    const cookieStore = await cookies()
    cookieStore.set('admin_session', 'authenticated', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 60 * 60 * 24, // 1 day
      path: '/',
    })
    return { success: true }
  }
  return { success: false, error: 'Invalid password' }
}

export async function logoutAction() {
  const cookieStore = await cookies()
  cookieStore.delete('admin_session')
  return { success: true }
}
