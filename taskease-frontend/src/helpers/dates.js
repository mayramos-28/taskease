export const getLimitDate = (date) => {
  const now = new Date();
 const limitDate = new Date(date);
 if(limitDate < now){
   return 'Fuera de plazo'
 }
 if(limitDate.getDate() === now.getDate()){
   return 'El plazo vence hoy'
 }
 if(limitDate.getDate() === now.getDate() + 1){
   return 'El plazo vence mañana'
 }if(limitDate > now){
   return `El plazo vence en ${limitDate.getDate() - now.getDate()} días`
 }
};