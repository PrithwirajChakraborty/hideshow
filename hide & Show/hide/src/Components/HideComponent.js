import React from 'react'
import { Button, Container } from 'react-bootstrap'

export default function HideComponent() {
    return (
        < >
            <Container align="center" style={{marginTop: 40}}>
                <h1>Which semester you are in?</h1>
                <Button variant="outline-secondary">Sem1</Button>{' '}
                <Button variant="outline-secondary">Sem2</Button>{' '}
                <Button variant="outline-secondary">Sem3</Button>{' '}
                <Button variant="outline-secondary">Sem4</Button>{' '}
                <Button variant="outline-secondary">Sem5</Button>{' '}
                <Button variant="outline-secondary">Sem6</Button>{' '}
                <Button variant="outline-secondary">Sem7</Button>{' '}
                <Button variant="outline-secondary">Sem8</Button>{' '}
            </Container>
        </>
    )
}