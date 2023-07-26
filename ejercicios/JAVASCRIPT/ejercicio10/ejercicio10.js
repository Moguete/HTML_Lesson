const firstYearCompleted = true;
const yearsCompleted = 1;

yearsCompleted == firstYearCompleted
yearsCompleted === firstYearCompleted

// el doble igual hace una conversión de tipo devolviendo Nan, -0 y +0 en los casos que no se pueda convertir.

// el triple igual en cambio no hace la conversión en esos casos y devuelve "false" en caso de no ser una comparación del mismo tipo.