import React, { useState } from 'react'
import { Button, Form, Input, Divider } from 'antd'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { getStore, setStore } from '../utiles'

const Login = () => {
  let currentUser = getStore('currentUser')
  let navigate = useNavigate()
  let UserData = getStore('user')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isUser, setIsUser] = useState('')

  React.useEffect(() => {
    if (isUser) {
      navigate('/')
    }
  }, [isUser, navigate])

  const onFinish = values => {
    if (email === '' || password === '') {
      return alert('All fields are required')
    }
    let exists = UserData.find(item => item.email === email)
    if (
      exists === undefined ||
      exists.email !== email ||
      exists.password !== password
    ) {
      return toast.error('Invalid Credentials', {
        toastId: 'error3'
      })
    }
    setIsUser(true)
    currentUser = {
      email
    }
    setStore('currentUser', currentUser)
    console.log(values)
  }

  return (
    <div style={{ overflowY: 'hidden' }}>
      <Divider dashed>
        <h1
          direction='horizontal'
          style={{ width: '100%', justifyContent: 'center' }}
        >
          LOGIN
        </h1>
      </Divider>

      <div className='input-container'>
        <Form
          name='basic'
          labelCol={{
            span: 8
          }}
          wrapperCol={{
            span: 50
          }}
          autoComplete='off'
          onFinish={onFinish}
        >
          <Form.Item label='Email' name='email'>
            <Input
              name='email'
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </Form.Item>

          <Form.Item label='Password' name='password'>
            <Input.Password
              value={password}
              name='password'
              onChange={e => setPassword(e.target.value)}
            />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 10
            }}
          >
            <Button type='primary' htmlType='submit'>
              Submit
            </Button>
            <h4 align='center'>
              Don't Have account <Link to='/register'>login</Link>
            </h4>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}

export default Login
