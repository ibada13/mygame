

import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { Vag } from './Vag';


let Mod = (props1:any) => {





        return (
            <>


                <Modal show={props1.ta} >
                    <Modal.Header >
                        <Modal.Title>Welcome</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className='text-text-uppercase'>enter how many number you can memorise <span className='text-muted'> try to chose squeard numbers like 9 , 16 ,25 ,49 , 64 ,81</span> 90 is the max 
                        <Form.Control type='number' id='he' min={2} max={50} onKeyUp={() => Vag()} />
                    </Modal.Body>
              
                    <Modal.Footer>
                        <button className='btn btn-outline-danger disabled  text-uppercase' onClick={() => { props1.tb(false) } }>start</button>
                    </Modal.Footer>
                </Modal>
            </>
        );
    }


export default Mod