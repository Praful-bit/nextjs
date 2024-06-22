/* eslint-disable react-hooks/rules-of-hooks */
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

const newsId = () => {
  // const data =  [
  //   { id: 1, name: 'Yash', role: 'Senior Developer' },
  //   { id: 2, name: 'Vaibhav', role: 'Backend Developer' },
  //   { id: 3, name: 'Suresh', role: 'Frontend Developer' }
  // ]

  const router = useRouter()
  const { newsId } = router.query

  return (
    <div>
      post : {newsId}
      <p><Link href="/news/something">hey</Link></p>
    </div>
  )
}

export default newsId