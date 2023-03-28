import { Card } from 'antd'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

const History = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    const getAds = async () => {
      const res = await axios.get('/history')
      console.log(res.data)
      setData(res.data)
    }
    getAds()
  }, [])
  return (
    <div>
      {data.map((dataPiece) => (
        <Card
          style={{
            width: 300,
          }}
        >
          <p>{dataPiece.name}</p>
          <p>{dataPiece.time}</p>
        </Card>
      ))}
    </div>
  )
}
export default History

// useEffect(() => {
//     const getAds = async () => {
//       const res = await axios.get('/show')
//       console.log(res.data)
//       setData(res.data)
//     }
//     getAds()
//   }, [])
