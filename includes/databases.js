// =========================================================================
// CÓDIGO ANTERIOR 
// =========================================================================
/*
module.exports = {
    raw: "logrand-storage-raw-dev",  // Solo el nombre de la base de datos
    stage: "logrand-storage-staging-dev",
    golden: "logrand-storage-golden-dev",
    computo: "logrand-computo-dev"
}
*/
// =========================================================================


// =========================================================================
// NUEVO CÓDIGO DINÁMICO PARA MULTI-ENTORNO (DEV / PROD)
// =========================================================================

// 1. Capturamos la variable 'env' desde la configuración de Dataform (Release Configurations).
// Si la variable no viene definida (como en tu Workspace de desarrollo), toma "dev" por defecto.
const environment = dataform.projectConfig.vars.env || "dev";

// 2. Exportamos el objeto con los nombres de los proyectos modificados dinámicamente.
module.exports = {
    // Apunta a logrand-storage-raw-dev o logrand-storage-raw-prod según el entorno
    raw: `logrand-storage-raw-${environment}`,  
    
    // Apunta a logrand-storage-staging-dev o logrand-storage-staging-prod
    stage: `logrand-storage-staging-${environment}`,
    
    // Apunta a logrand-storage-golden-dev o logrand-storage-golden-prod
    golden: `logrand-storage-golden-${environment}`,
    
    // Apunta a logrand-computo-dev o logrand-computo-prod
    computo: `logrand-computo-${environment}`
};