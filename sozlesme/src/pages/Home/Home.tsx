import { Link } from 'react-router-dom'
import './Home.css'

function Home() {
    return (
        <div className="home-container">
            <div className="home-card">
                <h1 className="home-title">Denge Emlak</h1>
                <p className="home-subtitle">Lütfen düzenlemek istediğiniz sözleşme türünü seçin</p>

                <div className="btn-group">
                    <Link to="/kira-sozlesmesi" className="btn">
                        Kira Sözleşmesi
                    </Link>
                    <Link to="/alim-satim-sozlesmesi" className="btn">
                        Alım - Satım Sözleşmesi
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Home
