import './Footer.css'

export const Footer = () => {
  const anoAtual = new Date().getFullYear();
  return (
    <div className="footer-content">
      <p>© {anoAtual} Todos os direitos reservados.</p>
    </div>
  )
}