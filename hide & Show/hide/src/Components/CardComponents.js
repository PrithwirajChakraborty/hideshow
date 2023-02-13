import React, { useState } from 'react'
import { Card, Col, Container, Row, Button } from 'react-bootstrap'

export default function CardComponents() {
    const [active, setActive] = useState(false);
    const [auto, setAuto] = useState(false);

    return (
        <>
            <Container align="center" style={{ marginTop: 40 }}>
                <h1>Hey! what you study ?</h1>
                <Button onClick={() => setActive("First")} variant="dark">CSE</Button>{' '}
                <Button onClick={() => setActive("Second")} variant="dark">IT</Button>{' '}
                <Button onClick={() => setActive("First")} variant="dark">ECE</Button>{' '}
                <Button onClick={() => setActive("Second")} variant="dark">ME</Button>{' '}
                <Button onClick={() => setActive("First")} variant="dark">CE</Button>{' '}
                <Button onClick={() => setActive("Second")} variant="dark">AEIE</Button>{' '}
                <Button onClick={() => setActive("First")} variant="dark">MBA</Button>{' '}
                <Button onClick={() => setActive("Second")} variant="dark">MCA</Button>{' '}
                <Button onClick={() => setActive("First")} variant="dark">BCA</Button>{' '}
                <Button onClick={() => setActive("Second")} variant="dark">BBA</Button>
            </Container>
            {active === "First" &&
                <Container align="center" style={{ marginTop: 40 }}>

                    <h1>Which semester you are in?</h1>
                    <Button onClick={() => setAuto("Third")} variant="outline-secondary">Sem1</Button>{' '}
                    <Button onClick={() => setAuto("Forth")} variant="outline-secondary">Sem2</Button>{' '}
                    <Button onClick={() => setAuto("Fifth")} variant="outline-secondary">Sem3</Button>{' '}
                    <Button onClick={() => setAuto("Third")} variant="outline-secondary">Sem4</Button>{' '}
                    <Button onClick={() => setAuto("Forth")} variant="outline-secondary">Sem5</Button>{' '}
                    <Button onClick={() => setAuto("Fifth")} variant="outline-secondary">Sem6</Button>{' '}
                    <Button onClick={() => setAuto("Third")} variant="outline-secondary">Sem7</Button>{' '}
                    <Button onClick={() => setAuto("Forth")} variant="outline-secondary">Sem8</Button>{' '}

                </Container>}
            {active === "Second" &&
                <Container align="center" style={{ marginTop: 40 }}>

                    <h1>Which semester you are in?</h1>
                    <Button onClick={() => setAuto("Sixth")} variant="outline-secondary">Sem1</Button>{' '}
                    <Button onClick={() => setAuto("Seven")} variant="outline-secondary">Sem2</Button>{' '}
                    <Button onClick={() => setAuto("Sixth")} variant="outline-secondary">Sem3</Button>{' '}
                    <Button onClick={() => setAuto("Seven")} variant="outline-secondary">Sem4</Button>{' '}
                    <Button onClick={() => setAuto("Sixth")} variant="outline-secondary">Sem5</Button>{' '}
                    <Button onClick={() => setAuto("Seven")} variant="outline-secondary">Sem6</Button>{' '}

                </Container>}


            <Container style={{ marginTop: 40, paddingTop: 20 }}>
                <Row style={{ padding: 20 }}>
                    {auto === "Third" &&
                        <Col xs={6}
                        >
                            <Card ><center>
                                <Card.Header as="h5" style={{ backgroundColor: "skyblue" }}><center>Python Programming</center></Card.Header>
                                <Card.Body >
                                    <Card.Title>Special title treatment</Card.Title>
                                    <Card.Text>
                                        With supporting text content.
                                    </Card.Text>
                                    <Button variant="info" >Syllabus</Button>{' '}
                                    <Button variant="info">Study Notes</Button>{' '}
                                    <Button variant="primary">Quistion</Button>
                                </Card.Body>
                                <Card.Footer>
                                    <Button variant="light">Video Teotorial</Button>{' '}
                                    <Button variant="danger">Suggestion</Button>
                                </Card.Footer></center>
                            </Card>
                        </Col>}
                    {auto === "Forth" &&
                        <Col xs={6}
                        >
                            <Card ><center>
                                <Card.Header as="h5" style={{ backgroundColor: "skyblue" }}><center>Full Stack Developing</center></Card.Header>
                                <Card.Body >
                                    <Card.Title>Special title treatment</Card.Title>
                                    <Card.Text>
                                        With supporting text content.
                                    </Card.Text>
                                    <Button variant="info" >Syllabus</Button>{' '}
                                    <Button variant="info">Study Notes</Button>{' '}
                                    <Button variant="primary">Quistion</Button>
                                </Card.Body>
                                <Card.Footer>
                                    <Button variant="light">Video Teotorial</Button>{' '}
                                    <Button variant="danger">Suggestion</Button>
                                </Card.Footer></center>
                            </Card>
                        </Col>}
                    {auto === "Fifth" &&
                        <Col xs={6}
                        >
                            <Card ><center>
                                <Card.Header as="h5" style={{ backgroundColor: "skyblue" }}><center>C programming</center></Card.Header>
                                <Card.Body >
                                    <Card.Title>Special title treatment</Card.Title>
                                    <Card.Text>
                                        With supporting text content.
                                    </Card.Text>
                                    <Button variant="info" >Syllabus</Button>{' '}
                                    <Button variant="info">Study Notes</Button>{' '}
                                    <Button variant="primary">Quistion</Button>
                                </Card.Body>
                                <Card.Footer>
                                    <Button variant="light">Video Teotorial</Button>{' '}
                                    <Button variant="danger">Suggestion</Button>
                                </Card.Footer></center>
                            </Card>
                        </Col>}
                    {auto === "Third" &&

                        <Col xs={6}
                        >
                            <Card ><center>
                                <Card.Header as="h5" style={{ backgroundColor: "skyblue" }}><center>Mathamatics</center></Card.Header>
                                <Card.Body >
                                    <Card.Title>Special title treatment</Card.Title>
                                    <Card.Text>
                                        With supporting text content.
                                    </Card.Text>
                                    <Button variant="info" >Syllabus</Button>{' '}
                                    <Button variant="info">Study Notes</Button>{' '}
                                    <Button variant="primary">Quistion</Button>
                                </Card.Body>
                                <Card.Footer>
                                    <Button variant="light">Video Teotorial</Button>{' '}
                                    <Button variant="danger">Suggestion</Button>
                                </Card.Footer></center>
                            </Card>
                        </Col>}
                    {auto === "Sixth" &&
                        <Col xs={6}
                        >
                            <Card ><center>
                                <Card.Header as="h5" style={{ backgroundColor: "skyblue" }}><center>Java Programming</center></Card.Header>
                                <Card.Body >
                                    <Card.Title>Special title treatment</Card.Title>
                                    <Card.Text>
                                        With supporting text content.
                                    </Card.Text>
                                    <Button variant="info" >Syllabus</Button>{' '}
                                    <Button variant="info">Study Notes</Button>{' '}
                                    <Button variant="primary">Quistion</Button>
                                </Card.Body>
                                <Card.Footer>
                                    <Button variant="light">Video Teotorial</Button>{' '}
                                    <Button variant="danger">Suggestion</Button>
                                </Card.Footer></center>
                            </Card>
                        </Col>}
                    {auto === "Seven" &&
                        <Col xs={6}
                        >
                            <Card ><center>
                                <Card.Header as="h5" style={{ backgroundColor: "skyblue" }}><center>Angular Tranning</center></Card.Header>
                                <Card.Body >
                                    <Card.Title>Special title treatment</Card.Title>
                                    <Card.Text>
                                        With supporting text content.
                                    </Card.Text>
                                    <Button variant="info" >Syllabus</Button>{' '}
                                    <Button variant="info">Study Notes</Button>{' '}
                                    <Button variant="primary">Quistion</Button>
                                </Card.Body>
                                <Card.Footer>
                                    <Button variant="light">Video Teotorial</Button>{' '}
                                    <Button variant="danger">Suggestion</Button>
                                </Card.Footer></center>
                            </Card>
                        </Col>}
                </Row>
            </Container>

        </>
    )
}
