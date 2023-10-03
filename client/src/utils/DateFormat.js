export default function DateFormat(){
    const currentDate = new Date();

    // Get the year, month, and day
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Month is zero-based, so add 1
    const day = String(currentDate.getDate()).padStart(2, '0');
    
    // Create the formatted date string
    return `${year}-${month}-${day}`;
}