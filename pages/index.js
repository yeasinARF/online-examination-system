import Head from 'next/head';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import styles from '../styles/Home.module.css';
import image from '../public/Image/physics.png'
import hImage from '../public/Image/h-img.png'
import Image from "next/image";
import { useState } from 'react';

export default function Home() {
  const [checked, setChecked] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [press, setPress] = useState(false);
  const [tab, setTab] = useState(false);
  const [color, setColor] = useState('rgb(197, 197, 197)');

  const handleButton = () => {
    setColor(color === 'rgb(197, 197, 197)' ? 'green' : 'rgb(197, 197, 197)');

  };
  const handleReview = () => {
    setColor(color === 'rgb(197, 197, 197)' ? 'yellow' : 'rgb(197, 197, 197)');
  };
  const handleDump = () => {
    setColor(color === 'rgb(197, 197, 197)' ? 'white' : 'rgb(197, 197, 197)');
  };


  const handleClick = () => {
    setChecked(false);
    setClicked(false);
    setPress(false);
    setTab(false);

  };
  return (
    <div>
      <Head>
        <title>DEMO ONLINE TEST</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <Row g={5}>
          <Col xs={12} md={12} lg={8} xl={8} xxl={8}>
            <Card className={styles.questionCard}>
              <div className={styles.headerCard}>
                <h6>Q. No. : 1</h6>
                <div>
                  <span>View in:</span>
                  <select className="selectItem" style={{ marginLeft: '5px' }}>
                    <option>English</option>
                    <option>Spanish</option>
                  </select>
                </div>
              </div>
              <Card.Body>
                <Row g={5}>
                  <Col xs={12} md={12} lg={6} xl={5} xxl={7}>
                    <div className="content">
                      <p className={styles.qTitle}>QUESTION INSTRUCTION</p>
                      <hr className={styles.line}style={{ width: '367px', marginLeft: '-16px' }}></hr>
                      <Card.Text>
                        Passage You want to hit a small box on the floor with a
                        marble fired from a spring-loaded gun that is mounted
                        on a table. The target box is a distance R horizontally
                        from the edge of the table; see the figure to the right.
                        You compress the spring a distance r of the center of
                        the marble falls short by a distance r of the center of the
                        box. How far should you compress the spring to score a
                        direct hit (neglect friction)?
                      </Card.Text>

                    </div>
                  </Col>

                  <Col xs={12} md={12} lg={6} xl={7} xxl={7}>
                    <div className="content">
                      <p className={styles.qTitle}>QUESTION</p>
                      <hr style={{ marginRight: '-16px' }}></hr>
                      <Card.Text>
                        The 10kg block is resting on the horizontal surface when the force F is applied to it for 7s. The variation of F with time is shown. Calculate the maximum velocity reached by the block and the total time t during which the block is in motion. The coefficients of static and kinetic friction are both 0.60. (g=9.8m/s
                        2
                        )
                      </Card.Text>
                      <Image src={image} style={{ width: '140px' }}></Image>
                      <hr style={{ marginRight: '-16px' }}></hr>
                      <div className="my-2">
                        <input type="radio" id="css" name="fav_language" value="CSS" checked={checked} onChange={() => setChecked(true)} />
                        <label for="css" style={{ fontSize: '0.9rem' }}>(A).<span className="ps-2">3.38m/s, 5.79 s</span></label><br></br><hr style={{ marginRight: '-16px' }}></hr>
                        <input type="radio" id="cs" name="fav_language" value="CSS" checked={clicked} onChange={() => setClicked(true)} />
                        <label for="cs" style={{ fontSize: '0.9rem' }}>(B). <span className="ps-2">4.38m/s, 2.79 s</span></label><br></br><hr style={{ marginRight: '-16px' }}></hr>
                        <input type="radio" id="c" name="fav_language" value="CSS" checked={press} onChange={() => setPress(true)} />
                        <label for="c" style={{ fontSize: '0.9rem' }}>(C).<span className="ps-2">6.38m/s, 6 s</span></label><br></br><hr style={{ marginRight: '-16px' }}></hr>
                        <input type="radio" id="g" name="fav_language" value="CSS" checked={tab} onChange={() => setTab(true)} />
                        <label for="g" style={{ fontSize: '0.9rem' }}>(D).<span className="ps-2">8.38m/s, 5 s</span></label><br></br><hr style={{ marginRight: '-16px' }}></hr>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={12} lg={4} xl={4} xxl={4}>
            <Container>
              <Container>
                <Card className={styles.cardFirstProfile} style={{ backgroundColor: '#97D2EC', border: '2px solid rgb(214, 214, 214)' }}>
                  <div className='d-flex'>
                    <div className='me-4'>
                      <Image src={hImage} style={{ width: '100px', height: '110px', marginBottom: '10px', marginLeft: '4px', marginTop: '4px' }}></Image>
                    </div>
                    <div>
                      <p>Time Left: <span className='ps-2'>02:39:29 s</span></p>
                      <p>Yeasin Arafat</p>
                    </div>
                  </div>
                </Card>
                <Card className='my-2' style={{ height: '350px', backgroundColor: '#97D2EC' }}>
                  <Card.Header style={{ fontWeight: '500', color: 'white', backgroundColor: 'rgb(8, 117, 207)' }}>Question Palette</Card.Header>
                  <div style={{ padding: '3px' }}>
                    <div className={styles.Palette}>
                      <Button style={{ backgroundColor: color, width: '55px', height: '35px', color: 'black', border: 'none', lineHeight: '10px', borderRadius: '0px' }}>1</Button>
                      <Button style={{ backgroundColor: 'red', width: '55px', height: '35px', color: 'black', border: 'none', lineHeight: '10px', borderRadius: '0px' }}>2</Button>
                      <Button style={{ backgroundColor: 'green', width: '55px', height: '35px', color: 'black', border: 'none', lineHeight: '10px', borderRadius: '0px' }}>3</Button>
                      <Button style={{ backgroundColor: 'green', width: '55px', height: '35px', color: 'black', border: 'none', lineHeight: '10px', borderRadius: '0px' }}>4</Button>
                      <Button style={{ backgroundColor: 'red', width: '55px', height: '35px', color: 'black', border: 'none', lineHeight: '10px', borderRadius: '0px' }}>5</Button>
                    </div>
                    <div className={styles.Palette}>
                      <Button style={{ backgroundColor: 'yellow', width: '55px', height: '35px', color: 'black', border: 'none', lineHeight: '10px', borderRadius: '0px' }}>6</Button>
                      <Button style={{ backgroundColor: 'green', width: '55px', height: '35px', color: 'black', border: 'none', lineHeight: '10px', borderRadius: '0px' }}>7</Button>
                      <Button style={{ backgroundColor: 'white', width: '55px', height: '35px', color: 'black', border: 'none', lineHeight: '10px', borderRadius: '0px' }}>8</Button>
                      <Button style={{ backgroundColor: 'rgb(165, 61, 255)', width: '55px', height: '35px', color: 'black', border: 'none', lineHeight: '10px', borderRadius: '0px' }}>9</Button>
                      <Button style={{ backgroundColor: 'rgb(197, 197, 197)', width: '55px', height: '35px', color: 'black', border: 'none', lineHeight: '10px', borderRadius: '0px' }}>10</Button>
                    </div>
                  </div>
                </Card>
                <Card style={{ backgroundColor: '#97D2EC' }}>
                  <Card.Header style={{ fontWeight: '500', color: 'white', backgroundColor: 'rgb(8, 117, 207)' }}>Legend (Click to view)</Card.Header>
                  <div >
                    <div className={styles.legendView}>
                      <div className={styles.correct}>4 Answer</div>
                      <div className={styles.wrong}>2 No Answer</div>
                    </div>
                    <div className={styles.legendView2}>
                      <div className={styles.rvAns}>1 Review+Ans</div>
                      <div className={styles.rv}>1 Review-Ans</div>
                    </div>
                    <div className={styles.legendView3}>
                      <div className={styles.dump}>1 Dump</div>
                      <div className={styles.noVisit}>1 No Visit</div>
                    </div>
                    <div className={styles.qs}>10 All Questions</div>
                  </div>
                </Card>
                <Card style={{ backgroundColor: '#97D2EC', marginTop: '2px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', padding: '5px' }}>
                    <Button style={{ width: '142px', backgroundColor: 'rgb(8, 117, 207)' }}>Profile</Button>
                    <Button style={{ width: '142px', backgroundColor: 'rgb(8, 117, 207)' }}>Instr</Button>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '5px', paddingLeft: '5px', paddingRight: '5px' }}>
                    <Button style={{ width: '142px', backgroundColor: 'rgb(8, 117, 207)' }}>Questions</Button>
                    <Button style={{ width: '142px', backgroundColor: 'rgb(8, 117, 207)' }}>Submit</Button>
                  </div>
                </Card>
              </Container>
            </Container>
          </Col>
        </Row>
        <Container className={styles.allSection}>
          <Button type="button" className={styles.buttonClear} onClick={handleClick}>
            CLEAR RESPONSE
          </Button>
          <Button type="button" className={styles.buttonAll} onClick={handleReview} >
            REVIEW
          </Button>
          <Button type="button" className={styles.buttonAll} onClick={handleDump} >
            DUMP
          </Button>
          <Button type="button" className={styles.buttonAll} >
            PREVIOUS
          </Button>
          <Button type="button" className={styles.buttonAll} onClick={handleButton} >
            NEXT
          </Button>
        </Container>
      </Container>
    </div>
  )
}
