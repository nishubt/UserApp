import React,{Component} from 'react';
import { Button, Modal, ModalHeader, ModalBody, Row, Label, Col } from 'reactstrap';
import { LocalForm, Control, Errors } from 'react-redux-form';

const emailPattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
const namePattern = new RegExp(/^[a-zA-Z]+$/);
const required = (val) => {
   return( val && val.length );
}
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);

const validateEmail = () => (val) => val && emailPattern.test(val);
const validateNameField = () => (val) => val && namePattern.test(val);


class NewUser extends Component{

    constructor(props){
        super(props);
        this.state = {
            isModalOpen: false
        }
        this.toggleModal = this.toggleModal.bind(this);
        this.handleCommentSubmit =  this.handleCommentSubmit.bind(this);
    }

    toggleModal() {
        this.setState({
          isModalOpen: !this.state.isModalOpen
        });
    }

    handleCommentSubmit(values) {
        this.toggleModal();
        this.props.addUser(values.firstName,values.lastName,values.email);
    }

    render(){
        return(
            <div >
                <div className="create-btn" onClick={this.toggleModal}>Create
                       <img className="create-btn-icon"  src="assets/images/create-btn-img.svg" alt="Create"/> 
                </div>
                <Modal  size="lg" isOpen={this.state.isModalOpen} toggle={() => this.toggleModal()} >
                    <ModalHeader toggle={() => this.toggleModal()}>Create User</ModalHeader>
                        <ModalBody>
                            <LocalForm onSubmit={(values) => this.handleCommentSubmit(values)}> 
                                <Row className="form-group">
                                    <Label htmlFor="firstName" md={10}>First Name</Label>
                                </Row>
                                <Row className="form-group">
                                    <Col md={{size: 10, offset: 0}}>
                                        <Control.text model=".firstName" name="firstName" id="firstName"
                                            className="form-control"
                                            placeholder="First Name"
                                            validators={{
                                                required, minLength: minLength(3), maxLength: maxLength(100),validateNameField:validateNameField()
                                            }}>
                                        </Control.text>
                                        <Errors className="text-danger"
                                                model=".firstName"
                                                show="touched"
                                                messages={{
                                                    required: 'Required,',
                                                    minLength: 'Must be greater than 2 characters,',
                                                    maxLength: 'Must be 100 characters or less,',
                                                    validateNameField:"Only characters allowed"
                                                }}
                                        >
                                        </Errors>
                                    </Col>
                                </Row>
                                <Row className="form-group">
                                    <Label htmlFor="lastName" md={10}>Last Name</Label>
                                </Row>
                                <Row className="form-group">
                                    <Col md={{size: 10, offset: 0}}>
                                        <Control.text model=".lastName" name="lastName" id="lastName"
                                            className="form-control"
                                            placeholder="Last Name"
                                            validators={{
                                                required, minLength: minLength(3), maxLength: maxLength(100),validateNameField:validateNameField()
                                            }}>
                                        </Control.text>
                                        <Errors className="text-danger"
                                                model=".lastName"
                                                show="touched"
                                                messages={{
                                                    required: 'Required,',
                                                    minLength: 'Must be greater than 2 characters,',
                                                    maxLength: 'Must be 100 characters or less',
                                                    validateNameField:"Only characters allowed"
                                                }}
                                        >
                                        </Errors>
                                    </Col>
                                </Row>
                                <Row className="form-group">
                                    <Label htmlFor="email" md={10}>Email</Label>
                                </Row>
                                <Row className="form-group">
                                    <Col md={{size: 10, offset: 0}}>
                                        <Control.text model=".email" name="email" id="email"
                                            className="form-control"
                                            placeholder="Email"
                                            validators={{
                                                required,validateEmail:validateEmail()
                                            }}>
                                        </Control.text>                              
                                        <Errors className="text-danger"
                                                model=".email"
                                                show="touched"
                                                messages={{
                                                    required: 'Required,',
                                                    validateEmail:'Please enter valid email address.'
                                                }}
                                        >
                                        </Errors>
                                    </Col>
                                </Row>
                                <Row className="form-group">
                                    <Col className="save-btn-div">
                                        <Button type="submit" color="primary">
                                        Save
                                        </Button>
                                    </Col>
                                </Row>
                        </LocalForm>
                    </ModalBody>                
                </Modal>
            </div>
        )
    }
}
export default NewUser;