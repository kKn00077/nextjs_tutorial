import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/pages/api/auth/[...nextauth]'
import AuthInfo from './AuthInfo'
import { cookies } from 'next/headers'
import DarkMode from './DarkMode'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default async function RootLayout({ children }) {

  let session = await getServerSession(authOptions); // 로그인한 유저 정보 확인, 서버기능 내에서만 사용가능
  
  let res = cookies().get('mode');

  return (
    <html lang="en">
      <body className={inter.className + ' ' + (res != undefined && res.value == 'dark' ? 'dark-mode' : '') }>
        <div className="navbar"> 
          <Link href="/" className="logo">Appleforum</Link> 
          <Link href="/list">List</Link> 
          <AuthInfo session={session}/>
          <DarkMode/>
        </div>  
        {children}
      </body>
    </html>
  )
}
