import React from 'react';
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import SearchIcon from '@mui/icons-material/Search';
import './style.css';

const SearchBar = ({ value, changeInput }) => (
    <div className='searchBar-wrap'>
        <Row>
            <Col sm={12}>
                <Form className="d-flex">
                    <Form.Control
                        type="search"
                        placeholder="Search"
                        className="me-2 rounded-pill py-2 px-4"
                        aria-label="Search"
                        value={value}
                        onChange={changeInput}
                    />
                    <div className='search-icon'>
                        {/* <Button className="rounded-pill" variant="outline-primary"> */}
                            <SearchIcon className='searchBar-icon'  />
                        {/* </Button> */}
                    </div>
                </Form>
            </Col>
        </Row>
    </div>
);

export default SearchBar;
