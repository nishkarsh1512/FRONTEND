import { Button, Space } from 'antd'
import { useNavigate } from 'react-router-dom'
const Home = () => {
  const navigate = useNavigate()
  return (
    <div>
      <h1>Video Streaming Site</h1>
      <Space>
        <Button type="primary" onClick={() => navigate('/show')}>
          Watch Videos
        </Button>
      </Space>
      <Space></Space>
      <Space>
        <Button type="primary" onClick={() => navigate('/history')}>
          Watch History
        </Button>
      </Space>
      <Space></Space>
      <Space>
        <Button type="primary" onClick={() => navigate('/edit')}>
          Edit Videos
        </Button>
      </Space>
      <Space></Space>
      <Space>
        <Button type="primary" onClick={() => navigate('/register')}>
          Upload A new Video
        </Button>
      </Space>
      <Space></Space>
    </div>
  )
}

export default Home

// const navigateHome = () => {
//   // 👇️ navigate to /
//   navigate('/')
// }
