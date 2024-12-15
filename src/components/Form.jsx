import "./Form.css";
import React, { useState } from "react";

function FormCotizacion() {
  const [tipoDocumento, setTipoDocumento] = useState("");
  const [numeroDocumento, setNumeroDocumento] = useState("");
  const [nombrePropietario, setNombrePropietario] = useState("");
  const [telefono, setTelefono] = useState("");
  const [placa, setPlaca] = useState("");
  const [modelo, setModelo] = useState("");
  const [cilindraje, setCilindraje] = useState("");
  const [siniestro, setSiniestro] = useState("");
  const [ciudad, setCiudad] = useState("");
  const [aceptaTerminos, setAceptaTerminos] = useState(false);
  const [cotizacionPrevia, setCotizacionPrevia] = useState(null);

  return (
    <div>
      <form className="container">
        <h1 style={{ textAlign: "center", color: "#333" }}>
          ¡Cotiza fácil el seguro de tu AUTO!
        </h1>
        <br />
        <p style={{ textAlign: "center", color: "#666" }}>
          En Sura no comercializamos el SOAT, pero sí el seguro todo riesgo para
          tu auto.
        </p>
        <br />
        <h3>Identificación propietario del vehículo</h3>
        <br />
        <label className="label">Tipo de documento</label>
        <select
          name="tipoDocumento"
          value={tipoDocumento}
          onChange={(e) => setTipoDocumento(e.target.value)}
          className="input"
        >
          <option value="">Seleccionar</option>
          <option value="CC">Cédula de Ciudadanía</option>
          <option value="TI">Tarjeta de Identidad</option>
          <option value="PAS">Pasaporte</option>
        </select>

        <label className="label">Número de documento</label>
        <input
          type="number"
          name="numeroDocumento"
          value={numeroDocumento}
          onChange={(e) => setNumeroDocumento(e.target.value)}
          className="input"
        />
        <label className="label">Nombre del propietario</label>
        <input
          type="text"
          name="nombrePropietario"
          value={nombrePropietario}
          onChange={(e) => setNombrePropietario(e.target.value)}
          className="input"
        />

        <label className="label">Telefono</label>
        <input
          type="number"
          name="telefono"
          value={telefono}
          onChange={(e) => setTelefono(e.target.value)}
          className="input"
        />

        <label className="label">Placa del vehículo</label>
        <input
          type="text"
          name="placa"
          value={placa}
          onChange={(e) => setPlaca(e.target.value)}
          className="input"
        />

        <label className="label">Modelo del Vehiculo</label>
        <input
          type="text"
          name="modelo"
          value={modelo}
          onChange={(e) => setModelo(e.target.value)}
          className="input"
        />

        <label className="label">Cilindraje</label>
        <input
          type="text"
          name="cilindraje"
          value={cilindraje}
          onChange={(e) => setCilindraje(e.target.value)}
          className="input"
        />

        <label className="label">Siniestros</label>
        <input
          type="number"
          name="siniestro"
          value={siniestro}
          onChange={(e) => setSiniestro(e.target.value)}
          className="input"
        />

        <label className="label">Ciudad de circulación del vehículo</label>
        <input
          type="text"
          name="ciudad"
          value={ciudad}
          onChange={(e) => setCiudad(e.target.value)}
          className="input"
        />

        <label>
          <input
            type="checkbox"
            name="aceptaTerminos"
            checked={aceptaTerminos}
            onChange={(e) => setAceptaTerminos(e.target.checked)}
            className="checkbox"
          />
          Acepto los términos de uso y políticas de privacidad.
        </label>

        <label><br/><br/>
          <input
            type="checkbox"
            name="cotizacionPrevia"
            checked={cotizacionPrevia}
            onChange={(e) => setCotizacionPrevia(e.target.checked)}
            className="checkbox"
          />
          ¿He realizado cotizaciones con anterioridad?
        </label>
        <br/><br/>
        <button type="submit" onClick={Cotizacion} className="button">
        
          Quiero Cotizar
        </button>
      </form>
    </div>
  );
}

export default FormCotizacion;
