import { ArrowLeft, Beer, Check, Copy, Heart } from "lucide-react";
import { useState } from "react";

export default function DonationScreen({ onBack }) {
  const [copied, setCopied] = useState(false);
  const pixKey =
    "00020101021126580014br.gov.bcb.pix0136d5c8a37d-77c7-49e0-8925-694adcd79cf35204000053039865802BR5916JOELTON LINO LUZ6008VARGINHA62070503***63040D6C"; // Mock Pix key (developer's email)

  const handleCopy = () => {
    navigator.clipboard.writeText(pixKey);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="donation-container glass-panel">
      <header className="donation-header">
        <button
          className="btn-icon"
          onClick={onBack}
          aria-label="Voltar para calculadora"
        >
          <ArrowLeft size={24} />
        </button>
        <h2>Doe uma Cerveja</h2>
      </header>

      <main className="donation-body">
        <div className="heart-beer-icon">
          <Beer size={40} className="beer-glow" />
          <Heart size={20} className="heart-float" />
        </div>

        <h3>🍻 Pague uma rodada! 🍻</h3>
        <p className="motivation-text">
          Se a <strong>CalculaBreja</strong> te ajudou a economizar uma grana
          🤑, apoie o desenvolvedor pagando uma cerveja?
        </p>

        <div className="qr-container">
          <img
            src="./qr-code.png"
            alt="QR Code Pix"
            className="pix-qr-img"
            width="180"
            height="180"
          />
        </div>

        <div className="pix-id-box">
          <span className="pix-label">Chave Pix</span>
          <div className="pix-input-wrapper">
            <input
              type="text"
              readOnly
              value={pixKey}
              className="pix-key-input"
            />
            <button
              className={`btn-copy ${copied ? "copied" : ""}`}
              onClick={handleCopy}
            >
              {copied ? <Check size={18} /> : <Copy size={18} />}
              <span>{copied ? "Copiado!" : "Copiar"}</span>
            </button>
          </div>
        </div>

        <div className="community-box">
          <span className="pix-label">Comunidade</span>
          <a
            href="https://chat.whatsapp.com/HzgGW1xdWByHnbGkHHKRDn"
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-card"
          >
            <div className="whatsapp-info">
              <svg
                className="whatsapp-icon"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                fill="currentColor"
              >
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.966a9.9 9.9 0 0 0-6.98-2.879c-5.443 0-9.87 4.37-9.874 9.8-.001 2.02.535 3.997 1.549 5.728L1.9 21.087l4.747-1.933zm11.399-6.84c-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.15-.174.2-.298.3-.496.099-.198.05-.372-.025-.521-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347z" />
              </svg>
              <div>
                <h4>PromoBreja (Varginha)</h4>
                <p>Cerveja e Carne em Promoção!</p>
              </div>
            </div>
            <span className="btn-join">Entrar</span>
          </a>
        </div>

        <div className="developer-box">
          <span className="pix-label">Desenvolvedor</span>
          <a
            href="https://www.linkedin.com/in/joeltonluz"
            target="_blank"
            rel="noopener noreferrer"
            className="linkedin-card"
          >
            <div className="linkedin-info">
              <svg
                className="linkedin-icon"
                viewBox="0 0 24 24"
                width="22"
                height="22"
                fill="currentColor"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
              <div>
                <h4>LinkedIn</h4>
                <p>Conecte-se e mande um feedback!</p>
              </div>
            </div>
            <span className="btn-connect">Conectar</span>
          </a>
        </div>
      </main>

      <style>{`
        .donation-container {
          padding: 24px;
          max-width: 480px;
          margin: 20px auto;
          text-align: center;
          animation: fadeInUp 0.5s ease-out;
        }

        .donation-header {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 24px;
        }

        .donation-header h2 {
          font-size: 1.5rem;
          margin: 0;
        }

        .btn-icon {
          background: transparent;
          border: none;
          color: var(--text-primary);
          cursor: pointer;
          padding: 8px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background-color var(--transition-fast);
        }

        .btn-icon:hover {
          background-color: var(--primary-light);
        }

        .donation-body {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .heart-beer-icon {
          position: relative;
          margin-bottom: 16px;
          color: var(--primary);
        }

        .beer-glow {
          animation: float 3s infinite ease-in-out;
        }

        .heart-float {
          position: absolute;
          top: -8px;
          right: -8px;
          color: #ef4444;
          animation: float 2.5s infinite ease-in-out;
          animation-delay: 0.5s;
        }

        .donation-body h3 {
          font-size: 1.3rem;
          margin-bottom: 8px;
        }

        .motivation-text {
          font-size: 0.95rem;
          color: var(--text-secondary);
          margin-bottom: 24px;
          line-height: 1.5;
        }

        .qr-container {
          padding: 12px;
          background: #ffffff;
          border-radius: 20px;
          box-shadow: var(--shadow-sm);
          border: 1px solid var(--border);
          margin-bottom: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .pix-qr-img {
          display: block;
          max-width: 100%;
          height: auto;
        }

        .pix-id-box {
          width: 100%;
          text-align: left;
        }

        .pix-label {
          font-size: 0.8rem;
          color: var(--text-muted);
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 6px;
          display: block;
        }

        .pix-input-wrapper {
          display: flex;
          border: 1px solid var(--border);
          border-radius: 12px;
          overflow: hidden;
          background-color: var(--bg-primary);
        }

        .pix-key-input {
          flex: 1;
          border: none;
          background: transparent;
          padding: 12px;
          color: var(--text-primary);
          font-size: 0.9rem;
          font-family: var(--font-body);
        }

        .pix-key-input:focus {
          outline: none;
        }

        .btn-copy {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 0 16px;
          background-color: var(--primary);
          color: #ffffff;
          border: none;
          cursor: pointer;
          font-family: var(--font-heading);
          font-weight: 600;
          font-size: 0.85rem;
          transition: background-color var(--transition-fast);
        }

        .btn-copy:hover {
          background-color: var(--primary-hover);
        }

        .btn-copy.copied {
          background-color: var(--accent);
        }

        .community-box {
          width: 100%;
          text-align: left;
          margin-top: 24px;
        }

        .whatsapp-card {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 14px 18px;
          border: 1px solid rgba(37, 211, 102, 0.2);
          border-radius: 12px;
          background-color: var(--bg-primary);
          gap: 12px;
          text-decoration: none;
          transition: all var(--transition-fast) ease-out;
        }

        .whatsapp-card:hover {
          border-color: rgba(37, 211, 102, 0.5);
          background-color: rgba(37, 211, 102, 0.05);
          transform: translateY(-1px);
        }

        .whatsapp-info {
          display: flex;
          align-items: center;
          gap: 12px;
          text-align: left;
        }

        .whatsapp-icon {
          color: #25D366;
          flex-shrink: 0;
        }

        .whatsapp-info h4 {
          margin: 0 0 2px 0;
          font-size: 0.95rem;
          color: var(--text-primary);
          font-family: var(--font-heading);
          font-weight: 600;
        }

        .whatsapp-info p {
          margin: 0;
          font-size: 0.8rem;
          color: var(--text-secondary);
        }

        .btn-join {
          background-color: #25D366;
          color: #ffffff;
          padding: 6px 12px;
          border-radius: 8px;
          font-family: var(--font-heading);
          font-weight: 600;
          font-size: 0.8rem;
          transition: background-color var(--transition-fast);
        }

        .whatsapp-card:hover .btn-join {
          background-color: #20ba5a;
        }

        .developer-box {
          width: 100%;
          text-align: left;
          margin-top: 16px;
        }

        .linkedin-card {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 14px 18px;
          border: 1px solid rgba(0, 119, 181, 0.2);
          border-radius: 12px;
          background-color: var(--bg-primary);
          gap: 12px;
          text-decoration: none;
          transition: all var(--transition-fast) ease-out;
        }

        .linkedin-card:hover {
          border-color: rgba(0, 119, 181, 0.5);
          background-color: rgba(0, 119, 181, 0.05);
          transform: translateY(-1px);
        }

        .linkedin-info {
          display: flex;
          align-items: center;
          gap: 12px;
          text-align: left;
        }

        .linkedin-icon {
          color: #0077b5;
          flex-shrink: 0;
        }

        .linkedin-info h4 {
          margin: 0 0 2px 0;
          font-size: 0.95rem;
          color: var(--text-primary);
          font-family: var(--font-heading);
          font-weight: 600;
        }

        .linkedin-info p {
          margin: 0;
          font-size: 0.8rem;
          color: var(--text-secondary);
        }

        .btn-connect {
          background-color: #0077b5;
          color: #ffffff;
          padding: 6px 12px;
          border-radius: 8px;
          font-family: var(--font-heading);
          font-weight: 600;
          font-size: 0.8rem;
          transition: background-color var(--transition-fast);
        }

        .linkedin-card:hover .btn-connect {
          background-color: #005582;
        }
      `}</style>
    </div>
  );
}
