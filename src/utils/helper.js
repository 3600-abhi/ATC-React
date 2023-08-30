function formatDateInDDMMYYYY(inputDate) {
    const date = new Date(inputDate);

    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Month is zero-based
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
}


function formatDateInYYYYMMDD(date) {
    if(date === "DD-MM-YYYY") {
        date = new Date(date);;
    }

    date = new Date(date);
    
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    
    return `${year}-${month}-${day}`;
  }

export default {
    formatDateInDDMMYYYY,
    formatDateInYYYYMMDD
}