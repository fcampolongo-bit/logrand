// 1. Capturamos el proyecto por defecto base del repositorio
const defaultProj = dataform.projectConfig.defaultProject || "";

// 2. Lógica Inversa: Si dice explícitamente "-dev", es entorno de desarrollo.
// Si viene vacío o cambia debido a Airflow/Producción, asume "prod" como entorno seguro.
const environment = defaultProj.includes("-dev") ? "dev" : "prod";

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