import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body style={{ backgroundImage: `url(https://imagedelivery.net/WuNJ9qXloNU2BNpKhSqjvQ/3b24d98c-b979-431e-6c9b-46a650b2ff00/public)`, zIndex: -1 }}>{children}</body>
    </html>
  )
}
