import React from 'react';
import { Button, Modal, ModalBody, ModalFooter } from 'reactstrap';
import { setModal } from '../../redux/actions'
import { connect } from 'react-redux';

const ModalWarning = (props) => {
    const {
        className,
        isModal,
        setModal
    } = props;

    const toggle = () => setModal(!isModal);


    return (
        <div>
            <Modal isOpen={isModal} className={className}>
                <ModalBody style={{ textAlign: 'center', color: 'gray', fontWeight:'bold' }}>
                    Location not found, please try again
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={toggle}>OK</Button>{' '}
                </ModalFooter>
            </Modal>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        isModal: state.isModal
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setModal: (bool) => dispatch(setModal(bool))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalWarning);