import { useState } from "react";
import { QRCodeCanvas } from "qrcode.react";
import "./App.css";

function App() {
  const [texto, setTexto] = useState("");
  const [qrCode, setQrCode] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [mostrarPoupup, setMostrarPoupup] = useState(false);
  const [fechandoPoupup, setFechandoPoupup] = useState(false);

  function gerarQRCode() {
    setMensagem("");

    if (texto.trim() === "") {
      alert("Você precisa digitar algo");
      return;
    }

    setQrCode(texto);
    setMensagem("QR Code gerado com sucesso!");

    setTimeout(() => {
      setMensagem("");
    }, 3000);
  }

  function abrirPoupup() {
    setMostrarPoupup(true);
  }

  function fecharPoupup() {
    setFechandoPoupup(true);

    setTimeout(() => {
      setMostrarPoupup(false);
      setFechandoPoupup(false);
    }, 300);
  }

  function baixarQRCode() {
    const canvas = document.querySelector(".poupup canvas");

    const link = document.createElement("a");
    link.download = "qrcode.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
  }

  return (
    <div>
      <h1>Gerador de QR Code</h1>
      <p>Gere aqui seu QR Code Gratuitamente</p>

      <input
        type="text"
        placeholder="Digite uma URL ou um texto..."
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
      />
      <p>Você digitou: {texto}</p>

      <button onClick={gerarQRCode}>
        Gerar QR Code
      </button>

      <p>{mensagem}</p>

      {qrCode && (
        <>
          <QRCodeCanvas
            value={qrCode}
            size={200}
          />

          <br />

          <button onClick={abrirPoupup}>
            Baixar QR Code
          </button>
        </>
      )}

      {mostrarPoupup && (
        <div className={`poupup ${fechandoPoupup ? "fechando" : ""}`}>
          <div className="poupup-conteudo">

            <h2>Seu QR Code</h2>

            <QRCodeCanvas
              value={qrCode}
              size={200}
            />

            <button className="botao-download" onClick={baixarQRCode}>
              Baixar PNG
            </button>

            <button className="botao-fechar" onClick={fecharPoupup}>
              Fechar
            </button>

          </div>
        </div>
      )}
    </div>
  );
}

export default App;