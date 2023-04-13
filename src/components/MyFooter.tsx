import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap-icons/font/bootstrap-icons.css';

const MyFooter =()=> {

            return (
        <Navbar className='footer text-light' collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container fluid className='justify-content-center'>
                <div className='d-flex flex-column '>
                    <div className='d-flex justify-content-between' >
                        <i className="bi bi-facebook fs-3"></i>
                        <i className="bi bi-instagram fs-3"></i>
                        <i className="bi bi-twitter fs-3"></i>
                    </div>
                    <div className='d-flex align-items-center'>
                        <ul className='list-unstyled'>
                            <li>Info</li>
                            <li>Support</li>
                            <li>Marketing</li>
                        </ul>
                    </div>
                    <div>
                        <i className="bi bi-c-circle "></i> 2023 Spaceflight
                    </div>



                </div>
            </Container>
        </Navbar>
    );
    

}

export default MyFooter;