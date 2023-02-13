import React from 'react'
import { Button, Container } from 'react-bootstrap'

export default function CourseComponents() {
    return (
        <>
            <Container align="center" style={{marginTop: 40}}>
                <h1>Hey! what you study ?</h1>
            <Button variant="dark">CSE</Button>{' '}
            <Button variant="dark">IT</Button>{' '}
            <Button variant="dark">ECE</Button>{' '}
            <Button variant="dark">ME</Button>{' '}
            <Button variant="dark">CE</Button>{' '}
            <Button variant="dark">AEIE</Button>{' '}
            <Button variant="dark">MBA</Button>{' '}
            <Button variant="dark">MCA</Button>{' '}
            <Button variant="dark">BCA</Button>{' '}
            <Button variant="dark">BBA</Button>
            </Container>
        </>
    )
}
