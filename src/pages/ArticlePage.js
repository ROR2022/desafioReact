import React from 'react'
import useDevto from '../hooks/useDevto';
import { Link } from 'react-router-dom';
import { Table, TableRow, TableBody, TableContainer, Container } from '@mui/material'

const ArticlePage = () => {
    const [dataPosts]=useDevto();
    console.log('dataPosts:..',dataPosts);  
    return (
        <div>
            <Link to={'/'}>HOME</Link>
            <br />
            <h1>Article Page</h1>
            <TableContainer>
            <Table>
                <TableBody>
                    {dataPosts.map((post)=>(
                        <TableRow>
                            <td>{post.title}</td>
                            <td>prueba</td>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
        </div>
    )
}

export default ArticlePage