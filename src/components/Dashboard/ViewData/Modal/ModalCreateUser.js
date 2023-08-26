import { useState } from 'react';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
import { Button, Form, Input } from 'antd';

const ModalCreateUser = ({ title, reRender, setReRender }) => {



    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [fullName, setFullName] = useState('');
    const [address, setAddress] = useState('');
    const [postCode, setPostCode] = useState('');

    const closeModal = () => {
        const modal = document.querySelector('.modal');
        modal.classList.remove('open');
    }

    console.log(userName);

    const handleCreate = () => {
        const data = { userName, password, email, phoneNumber, fullName, address, postCode };
        axios.post('https://localhost:7104/api/Users/Register', data)
            .then(res => {
                closeModal()
                setUserName('');
                setPassword('');
                setEmail('');
                setPhoneNumber('');
                setFullName('');
                setAddress('');
                setPostCode('');
                setReRender(!reRender);
            })
    }


    return (
        <div className='modal'>
            <div className='modal-container'>
                <div className="modal-title">
                    <h3>Create new {title}</h3>
                </div>
                <Form
                    name="basic"
                    labelCol={{
                        offset: 0,
                        span: 5,
                    }}
                    wrapperCol={{
                        offset: 0,
                        span: 19,
                    }}
                    style={{
                        maxWidth: 600,
                    }}
                    initialValues={{
                        remember: true,
                    }}
                    autoComplete="off"
                >
                    <Form.Item
                        label="Username"
                        name="userName"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your username!',
                            },
                        ]}
                    >
                        <Input value={userName} onChange={e => setUserName(e.target.value)} />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                        ]}
                    >
                        <Input.Password value={password} onChange={e => setPassword(e.target.value)} />
                    </Form.Item>

                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your email!',
                            },
                        ]}
                    >
                        <Input value={email} onChange={e => setEmail(e.target.value)} />
                    </Form.Item>

                    <Form.Item
                        label="Phone number"
                        name="phoneNumber"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your phone number!',
                            },
                        ]}
                    >
                        <Input value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} />
                    </Form.Item>

                    <Form.Item
                        label="Fullname"
                        name="fullName"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your fullname!',
                            },
                        ]}
                    >
                        <Input value={fullName} onChange={e => setFullName(e.target.value)} />
                    </Form.Item>

                    <Form.Item
                        label="Address"
                        name="address"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your address!',
                            },
                        ]}
                    >
                        <Input value={address} onChange={e => setAddress(e.target.value)} />
                    </Form.Item>

                    <Form.Item
                        label="Postcode"
                        name="postcode"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your postcode!',
                            },
                        ]}
                    >
                        <Input value={postCode} onChange={e => setPostCode(e.target.value)} />
                    </Form.Item>

                    <Form.Item
                        wrapperCol={{
                            offset: 16,
                            span: 16,
                        }}
                    >
                        <Button style={{ marginRight: '12px' }} onClick={() => closeModal()}>
                            Cancel
                        </Button>
                        <Button type="primary" htmlType="submit" onClick={handleCreate}>
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
}

export default ModalCreateUser;