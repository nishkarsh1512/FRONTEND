import { Card, Col, Row } from 'antd'
import React, { useState, useEffect } from 'react'
import ReactPlayer from 'react-player'
import VideoThumbnail from 'react-video-thumbnail'
import axios from 'axios'
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from '@ant-design/icons'
import { Avatar } from 'antd'
import Display from './Display'
const { Meta } = Card
const Show = () => {
  ///////////////////////////////////////////////////////////////
  const [data, setData] = useState([])
  useEffect(() => {
    const getAds = async () => {
      const res = await axios.get('/show')
      console.log(res.data)
      setData(res.data)
    }
    getAds()
  }, [])
  return (
    <div>
      <Row gutter={16}>
        {data.map((dataPiece) => (
          <Display data={dataPiece}></Display>
        ))}
      </Row>
    </div>
  )
  ///////////////////////////////////////////////////////////////

  return (
    <Row gutter={16}>
      <Col span={12}>
        <Card
          style={{
            width: 300,
            height: 200,
          }}
          cover={
            <img
              alt="example"
              src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
            />
          }
          actions={[
            <SettingOutlined key="setting" />,
            <EditOutlined key="edit" />,
            <EllipsisOutlined key="ellipsis" />,
          ]}
        >
          <Meta
            avatar={<Avatar src="https://joesch.moe/api/v1/random" />}
            title="Card title"
            description="This is the description"
          />
        </Card>
      </Col>
      <Col span={8}>
        <Card
          style={{
            width: 300,
          }}
          cover={
            <img
              alt="example"
              src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
            />
          }
          actions={[
            <SettingOutlined key="setting" />,
            <EditOutlined key="edit" />,
            <EllipsisOutlined key="ellipsis" />,
          ]}
        >
          <Meta
            avatar={<Avatar src="https://joesch.moe/api/v1/random" />}
            title="Card title"
            description="This is the description"
          />
        </Card>
      </Col>
      <Col span={12}>
        <Card
          style={{
            width: 300,
          }}
          cover={
            <img
              alt="example"
              src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
            />
          }
          actions={[
            <SettingOutlined key="setting" />,
            <EditOutlined key="edit" />,
            <EllipsisOutlined key="ellipsis" />,
          ]}
        >
          <Meta
            avatar={<Avatar src="https://joesch.moe/api/v1/random" />}
            title="Card title"
            description="This is the description"
          />
        </Card>
      </Col>
    </Row>
  )
}
export default Show

// import axios from 'axios'
// import { useEffect, useState } from 'react'
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
// import Card from './Card.js'

// const Show = () => {
//   const [data, setData] = useState([])
//   useEffect(() => {
//     const getAds = async () => {
//       const res = await axios.get('/show')
//       console.log(res.data)
//       setData(res.data)
//     }
//     getAds()
//   }, [])
//   return (
//     <div>
//       {data.map((dataPiece) => (
//         <Card data={dataPiece}></Card>
//       ))}
//     </div>
//   )
// }

// export default Show
