// 1. Detectamos el entorno automáticamente leyendo el ID del proyecto por defecto de BigQuery
const currentProject = dataform.projectConfig.defaultProject || "";
const environment = currentProject.includes("-prod") ? "prod" : "dev";

// 2. Exportamos el objeto con los nombres de los proyectos modificados dinámicamente
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