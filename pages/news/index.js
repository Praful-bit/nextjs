import Link from 'next/link'
import React from 'react'

const index = () => {
  return (
    <div>
      <h1>index</h1>
      <p><Link href="/news/newsid">hey</Link></p>
    </div>
  )
}

export default index