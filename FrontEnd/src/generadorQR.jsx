import QRCode from "qrcode.react";

export function generarQR(ticketsComprados, ciudad, pais, descripccionTicket, genero, motivo, precioTicket, precioTotal) {
  const qrData = `${ticketsComprados} ${ciudad} ${pais} ${descripccionTicket} ${genero} ${motivo} ${precioTicket} ${precioTotal}`
  return (
    <>
      <QRCode value={qrData} size={200} />
    </>
  )
}