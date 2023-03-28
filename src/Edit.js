import { useParams } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import { Card, Button, Space, message } from 'antd'
import { useNavigate } from 'react-router-dom'
import ReactPlayer from 'react-player'
import EditForm from './components/EditForm'
import axios from 'axios'
const Edit = () => {
  const [data, setData] = useState({})
  const params = useParams()
  const navigate = useNavigate()
  console.log(params.id)
  const b = params.id
  const sendId = async () => {
    await axios.post(`/edit/${b}`, {
      id: params.id,
    })
  }

  useEffect(() => {
    sendId()
  }, [])

  useEffect(() => {
    console.log('searching')
    const getAds = async () => {
      const res = await axios.get(`/edit/${b}`)
      console.log(res.data)
      setData(res.data)
    }
    getAds()
  }, [])

  const deleteCardHandler = async () => {
    await axios
      .post('/edit', {
        data,
      })
      .then(function (response) {
        console.log(response)
        if ((response.data = 'ok')) {
          message.success('Successfully deleted!')
          setTimeout(() => {
            // 👇 Redirects to about page, note the `replace: true`
            navigate('/edit', { replace: true })
          }, 3000)
        } else {
          message.error('Submit failed!')
        }
      })
      .catch(function (error) {
        console.log(error)
        message.error('Submit failed!')
      })
  }

  return (
    <div>
      <h1>Edit this card</h1>
      <EditForm
        name={data.name}
        category={data.category}
        url={data.url}
        lin={params.id}
      ></EditForm>
      <Space onClick={deleteCardHandler}>
        <Button type="link" danger>
          Delete
        </Button>
      </Space>
    </div>
  )
}
export default Edit
