function calcularCotizacion() {
    const preciosBase = {
        disenoArquitectonico: {
            residencial: 50000,
            industrialBodegas: 70000,
            hospitalario: 80000,
            industrial: 75000
        },
        disenoEstructural: 15000,
        imagenesRealistas: 400000,
        levantamientoTopografico: 15000,
        estudioSuelos: 800000,
        vueloDrone: 250000
    };

    let resultadoHTML = '<h2>Resultado de la Cotización</h2>';
    let precioTotalGeneral = 0;
    let serviciosCotizados = 0;

    // Diseño Arquitectónico
    const m2Arquitectonico = parseFloat(document.getElementById('m2Arquitectonico').value) || 0;
    if (m2Arquitectonico > 0) {
        const tipoArquitectonico = document.getElementById('tipoArquitectonico').value;
        const precioBase = preciosBase.disenoArquitectonico[tipoArquitectonico];
        const precioServicio = precioBase * m2Arquitectonico;
        precioTotalGeneral += precioServicio;
        serviciosCotizados++;

        const tipoProyectoTexto = {
            residencial: "Residencial",
            industrialBodegas: "Industrial Bodegas",
            hospitalario: "Hospitalario",
            industrial: "Industrial"
        };

        resultadoHTML += `
          <div>
              <p><strong>Diseño Arquitectónico</strong></p>
              <p>Área: ${m2Arquitectonico} m²</p>
              <p>Tipo de Proyecto: ${tipoProyectoTexto[tipoArquitectonico]}</p>
              <p>Precio: ${(precioServicio)}</p>
          </div>
      `;
    }

    // Diseño Estructural
    const m2Estructural = parseFloat(document.getElementById('m2Estructural').value) || 0;
    if (m2Estructural > 0) {
        const precioServicio = preciosBase.disenoEstructural * m2Estructural;
        precioTotalGeneral += precioServicio;
        serviciosCotizados++;

        resultadoHTML += `
          <div>
              <p><strong>Diseño Estructural</strong></p>
              <p>Área: ${m2Estructural} m²</p>
              <p>Precio: ${(precioServicio)}</p>
          </div>
      `;
    }

    // Imágenes Realistas
    const cantidadImagenes = parseInt(document.getElementById('cantidadImagenes').value) || 0;
    if (cantidadImagenes > 0) {
        const precioServicio = preciosBase.imagenesRealistas * cantidadImagenes;
        precioTotalGeneral += precioServicio;
        serviciosCotizados++;

        resultadoHTML += `
          <div>
              <p><strong>Elaboración de Imágenes Realistas</strong></p>
              <p>Cantidad: ${cantidadImagenes} unidad(es)</p>
              <p>Precio: ${(precioServicio)}</p>
          </div>
      `;
    }

    // Levantamiento Topográfico
    const m2Topografico = parseFloat(document.getElementById('m2Topografico').value) || 0;
    if (m2Topografico > 0) {
        const precioServicio = preciosBase.levantamientoTopografico * m2Topografico;
        precioTotalGeneral += precioServicio;
        serviciosCotizados++;

        resultadoHTML += `
          <div>
              <p><strong>Levantamiento Topográfico</strong></p>
              <p>Área: ${m2Topografico} m²</p>
              <p>Precio: ${(precioServicio)}</p>
          </div>
      `;
    }

    // Estudio de Suelos
    const cantidadEstudios = parseInt(document.getElementById('cantidadEstudios').value) || 0;
    if (cantidadEstudios > 0) {
        const precioServicio = preciosBase.estudioSuelos * cantidadEstudios;
        precioTotalGeneral += precioServicio;
        serviciosCotizados++;

        resultadoHTML += `
          <div>
              <p><strong>Estudio de Suelos</strong></p>
              <p>Cantidad: ${cantidadEstudios} unidad(es)</p>
              <p>Precio: ${(precioServicio)}</p>
          </div>
      `;
    }

    // Vuelo de Drone
    const horasDrone = parseInt(document.getElementById('horasDrone').value) || 0;
    if (horasDrone > 0) {
        const precioServicio = preciosBase.vueloDrone * horasDrone;
        precioTotalGeneral += precioServicio;
        serviciosCotizados++;

        resultadoHTML += `
          <div>
              <p><strong>Vuelo de Drone</strong></p>
              <p>Horas: ${horasDrone} hora(s)</p>
              <p>Precio: ${(precioServicio)}</p>
          </div>
      `;
    }

    // Verificar si se cotizó al menos un servicio
    if (serviciosCotizados === 0) {
        Swal.fire("Inserta los datos para realizar la cotización");
        return;
    }

    // Agregar el precio total general
    resultadoHTML += `      <div>
          <h3>Precio Total: ${(precioTotalGeneral)}</h3>
          <p><em>Nota: Esta cotización es un estimado y puede variar según requerimientos específicos del proyecto.</em></p>
      </div>
  `;

    // Mostrar el resultado
    document.getElementById('resultado').innerHTML = resultadoHTML;
}

// Función para resetear todos los valores del formulario
function resetearFormulario() {
    document.getElementById('m2Arquitectonico').value = 0;
    document.getElementById('m2Estructural').value = 0;
    document.getElementById('cantidadImagenes').value = 0;
    document.getElementById('m2Topografico').value = 0;
    document.getElementById('cantidadEstudios').value = 0;
    document.getElementById('horasDrone').value = 0;
    document.getElementById('resultado').innerHTML = '';
}

const boton_volver_cotizar = document.getElementById("volver_cotizar");
boton_volver_cotizar.addEventListener("click", resetearFormulario);
