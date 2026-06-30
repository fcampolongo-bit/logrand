// 1. Validamos de manera segura el proyecto según Airflow (defaultProject) o el entorno actual de Dataform
const projectFromConfig = dataform.projectConfig.defaultProject || "";

// 2. DETECCIÓN INTELIGENTE:
// Si Airflow nos manda 'prod' en las variables, es PROD.
// Si estamos parados en la interfaz web de PROD (logrand-computo-prod), también es PROD.
// En cualquier otro caso (como Airflow en dev o interfaz web de dev), asume 'dev'.
let environment = "dev";

if (dataform.projectConfig.vars.env === "prod" || projectFromConfig.includes("-prod")) {
    environment = "prod";
}

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