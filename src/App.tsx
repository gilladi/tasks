import React from "react";
import "./App.css";
import { Button, Col, Container, Row } from "react-bootstrap";
import man from "/Users/adityagill/tasks/src/images/image-1.png";
function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
            <h1 style={{ backgroundColor: "#77b064" }}>
                The Greatest Header of All TIME
            </h1>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
            <div>Aditya Gill, Hello World</div>
            <div>
                <img
                    src={man}
                    alt="A picture of a man in DAYZ Namalsk"
                    style={{ height: "300px", width: "475px" }}
                />
            </div>
            <div>
                <ul>
                    <li>Welcome</li>
                    <li>To</li>
                    <li>Namalsk</li>
                </ul>
            </div>
            <div>
                <Button onClick={() => console.log("Hello World!")}>
                    Log Hello World
                </Button>
            </div>
            <div>
                <Container>
                    <Row>
                        <Col>
                            <div
                                style={{
                                    height: "500px",
                                    width: "300px",
                                    backgroundColor: "red"
                                }}
                            ></div>
                        </Col>
                        <Col>
                            <div
                                style={{
                                    height: "500px",
                                    width: "300px",
                                    backgroundColor: "red"
                                }}
                            ></div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default App;
