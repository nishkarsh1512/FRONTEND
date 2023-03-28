import { Card, Button, Space } from 'antd'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
const FullEdit = (props) => {
  const [data, setData] = useState([])
  useEffect(() => {
    const getAds = async () => {
      const res = await axios.get('/edit')
      console.log(res.data)
      setData(res.data)
    }
    getAds()
  }, [])

  return (
    <Card title="Cards uploaded by you">
      {data.map((dataPiece) => (
        <div>
          <Card
            type="inner"
            title={dataPiece.name}
            extra={<a href={`/edit/${dataPiece._id}`}>Edit</a>}
          >
            {`Category: ${dataPiece.category}`}
          </Card>
        </div>
      ))}
    </Card>
  )
}
export default FullEdit
