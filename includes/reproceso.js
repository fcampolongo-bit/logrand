// includes/reproceso.js

function filtroIncremental(colFecha, colSala = "sala") {
  const v = dataform.projectConfig.vars;
  const fechaInicio = (v.fecha_inicio || "").trim();
  const fechaFin = (v.fecha_fin || "").trim();
  const casino = (v.casino || "").trim().toUpperCase();

  // MODO REPROCESO ON-DEMAND: viene rango de fechas explícito desde Airflow
  if (fechaInicio && fechaFin) {
    let filtroCasino = "";
    if (casino) {
      // Traduce el esquema técnico (ej. GRANDLEON) al nombre homologado en Golden (ej. LEON)
      const salaObj = salas.lista_salas.find(
        (s) => s.esquema.toUpperCase() === `STG_WIGOS_${casino}`
      );
      const nombreSala = (salaObj ? salaObj.nombre : casino).toUpperCase();
      filtroCasino = ` AND UPPER(${colSala}) = '${nombreSala}'`;
    }

    return `AND ${colFecha} >= DATETIME('${fechaInicio} 00:00:00')
            AND ${colFecha} <= DATETIME('${fechaFin} 23:59:59')${filtroCasino}`;
  }

  // MODO CARGA DIARIA NORMAL: mantiene exactamente tu ventana actual de 14 días
  return `AND ${colFecha} >= DATETIME_SUB(CURRENT_DATETIME(), INTERVAL 14 DAY)`;
}

module.exports = {
  filtroIncremental
};