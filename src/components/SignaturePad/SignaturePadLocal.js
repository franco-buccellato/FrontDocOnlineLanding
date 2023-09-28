import React, { Component } from "react";
import SignaturePad from "react-signature-canvas";
import styles from './SignaturePadLocal.css';
import Button from 'react-bootstrap/Button';

class SignaturePadLocal extends Component {
    state = { trimmedDataURL: null };
    sigPad = {};
    clear = () => {
        this.sigPad.clear();
    };
    trim = () => {
        this.setState(
            {
                trimmedDataURL: this.sigPad.getTrimmedCanvas().toDataURL("image/png"),
            }
        );
    };
    render() {
        let { trimmedDataURL } = this.state;
        return (
            <div className='canva-container'>
                <div className='canva'>
                    <SignaturePad
                        canvasProps={{ className: styles.sigPad }}
                        ref={(ref) => {
                            this.sigPad = ref;
                        }}
                    />
                </div>
                <div>
                    <Button variant="light w-50 canva-botones" onClick={this.clear}>Limpiar</Button>
                    <Button variant="light w-50 canva-botones" onClick={this.trim}>Aceptar</Button>
                </div>
                {trimmedDataURL ? (
                    <div className="canva-imagen">
                        <img alt='firmas' src={trimmedDataURL}/>
                    </div>
                ) : null}
            </div>
        );
    }
}

export default SignaturePadLocal;
