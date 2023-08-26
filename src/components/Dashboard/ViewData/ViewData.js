import { useEffect, useState } from 'react';
import axios from 'axios';
import { Table, Space, Typography, Button } from 'antd';
import styled from 'styled-components';
import './ViewData.css'
import ModalCreateUser from './Modal/ModalCreateUser';

const { Title } = Typography;

const TitleTable = styled.p`
    font-size: 30px;
    font-weight: 600;
    margin: 0 0 12px 0;
    padding: 0;
    text-align: center;
`;



const ViewData = ({ api, title }) => {

    const [data, setData] = useState([]);
    const [reRender, setReRender] = useState(false);

    const openModal = () => {
        const modal = document.querySelector('.modal');
        modal.classList.add('open');
    }


    useEffect(() => {
        axios.get(api)
            .then(res => {
                setData(res.data)
            })
    }, [api, reRender])

    const column = data.length && Object.keys(data[0]).map((item) => ({
        title: item.charAt(0).toUpperCase() + item.slice(1),
        dataIndex: item,
        key: item,
    }))


    const newColumn = column.length && [...column.map(item => ({
        ...item,
        title: item.title ==='id' ? 'STT' : item.title
    })), {
        title: 'Action',
        key: 'action',
        render: (_, record) => (
            <Space size="middle">
                <a href='/'>Detail</a>
                <a href='/'>Update</a>
                <a href='/'>Delete</a>
            </Space>
        )
    }]


    const newData = data.length && data.map((item, index) => ({
        ...item,
        key: item.id,
        id: index+1,
        completed: item.completed ? 'Finished' : 'Unfinished'

    }))



    return (
        <>
            <TitleTable>List {title}</TitleTable>
            <Button type="primary" onClick={() => openModal()}>
                Create new {title}
            </Button>
            {title === 'Users' ? <ModalCreateUser title={title} reRender={reRender} setReRender={setReRender}/> : ''}
            {data.length !== 0 ? <Table columns={newColumn} dataSource={newData} /> : <Title style={{ textAlign: 'center' }} level={5}>Hiện không có dữ liệu nào</Title>}
        </>
    )
};


export default ViewData;