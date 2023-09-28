import "./Footer.css";

function Footer() {
    return (
        <footer className="footer-distributed">
            <div className="footer-left">
                <div className="icono-footer">
                    <ion-icon name="business-outline"></ion-icon>
                </div>
                <div className="nombre-footer">
                    <h6>Dirección</h6>
                    <span>Buenos Aires - Argentina</span>
                </div>
                <div className="nombre-footer">
                    <span>Santa Fe - Argentina</span>
                </div>
            </div>
            <div className="footer-center">
                <div className="icono-footer">
                    <ion-icon name="call-outline"></ion-icon>
                </div>
                <div className="nombre-footer">
                    <h6>Clínica</h6>
                    <span>+54 9 342 531-9488</span>
                </div>
                <div className="nombre-footer">
                    <h6>Adminitración</h6>
                    <span>+54 9 342 409-2375</span>
                </div>
            </div>
            <div className="footer-right">
                <div className="icono-footer">
                    <ion-icon name="mail-outline"></ion-icon>
                </div>
                <div className="nombre-footer">
                    <h6>Email</h6>
                    <span>info@doconline.com.ar</span>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
