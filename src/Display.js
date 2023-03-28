import { Card, Col, Row, Modal, message } from 'antd'
import React, { useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from '@ant-design/icons'
import ReactPlayer from 'react-player'
import { Avatar } from 'antd'
const { Meta } = Card

const Display = (props) => {
  const params = useParams()
  const [open, setOpen] = useState(false)
  const [datum, setDatum] = useState({})
  const date = new Date()
  const showTime =
    date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds()
  const setOp = async () => {
    setOpen(true)
    setDatum(props.data)
    console.log(showTime)
    const name = props.data.name
    const time = showTime.toString()
    //////////////////////////////////////////////////////////
    await axios
      .post('/history', {
        name,
        time,
      })
      .then(function (response) {
        console.log(response)
        if ((response.data = 'ok')) {
          message.success('History recorded!')
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
    <Col span={12}>
      <Card
        onClick={setOp}
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
          title={props.data.name}
          description={props.data.category}
        />
      </Card>
      <Modal
        title={props.data.name}
        centered
        open={open}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        width={1000}
      >
        <a href={`/edit/${props.data._id}`}>Edit</a>
        <ReactPlayer url={props.data.url} />
      </Modal>
    </Col>
  )
}

export default Display
