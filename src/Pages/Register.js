import React, { useState } from 'react'
import { Button, Form, Input, Divider } from 'antd'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { getStore, setStore } from '../utiles'

const Register = () => {
  let UserData = getStore('user')
  let navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isUser, setIsUser] = useState()

  React.useEffect(() => {
    if (isUser) {
      navigate('/login')
    }
  }, [isUser, navigate])

  const onFinish = values => {
    if (email === '' || password === '') {
      return toast.error('All fields are required', {
        toastId: 'error2'
      })
    }

    let exists = UserData.find(item => item.email === email)

    if (exists) {
      return toast.error('User already exists', {
        toastId: 'error1'
      })
    }
    console.log(values.email)

    UserData.push({
      email: values.email,
      password: values.password
    })

    setStore('user', UserData)
    setIsUser(true)
  }

  console.log(isUser, 'IsUser')
  console.log(UserData)
  return (
    <div style={{ overflowY: 'hidden' }}>
      <Divider dashed>
        <h1
          direction='horizontal'
          style={{ width: '100%', justifyContent: 'center' }}
        >
          REGISTER
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
          onFinish={onFinish}
          autoComplete='off'
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
              Have a account <Link to='/login'>login</Link>
            </h4>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}

export default Register
