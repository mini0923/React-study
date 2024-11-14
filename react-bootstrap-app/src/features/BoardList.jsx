import React from 'react'
import { CustomCard, CustomContainer } from '../components/Styles'
import { Link } from 'react-router-dom';
import { Button, Table } from 'react-bootstrap';


const BoardList = () => {
  return (
    <CustomCard>
      <CustomContainer>
        <Row>
          <h3>게시물 목록</h3>
          <Button variant="primary" onClick={() => {
            navigate('/board/register');
          }}>게시물 등록</Button>
        </Row>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>제목</th>
              <th>작성자</th>
            </tr>
          </thead>
          <tbody>
            {
              data.map((board) => {
                return <tr>
                  <td><Link to={'/board/read/' + board.no}>{board.no}</Link></td>
                  <td>{board.title}</td>
                  <td>{board.writer}</td>
                </tr>
              })
            }
          </tbody>
        </Table>
      </CustomContainer>
    </CustomCard>
  )
}

export default BoardList