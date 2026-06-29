// 1. Buscamos de manera ultra-segura el nombre del proyecto en todas las variables nativas del compilador
const currentProject = dataform.projectConfig.defaultProject || dataform.projectConfig.warehouse || "";

// 2. Si el proyecto contiene "-prod", usamos producción. De lo contrario, por defecto es dev.
const environment = currentProject.includes("-prod") ? "prod" : "dev";

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