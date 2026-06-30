// 1. Validamos de manera segura el proyecto según Airflow o el compilador web de BigQuery (warehouse)
const projectFromConfig = dataform.projectConfig.defaultProject || dataform.projectConfig.warehouse || "";

// 2. DETECCIÓN INTELIGENTE:
// Si Airflow nos manda 'prod' en las variables o el proyecto contiene "-prod", es PROD.
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