/***
 * Add leading zeros to date string
 * */
const dateWithLeadingZeros = (date) => {
    return new Date(date).toLocaleDateString("en-US", { // you can use undefined as first argument
        year: "numeric", month: "2-digit", day: "2-digit",
    })
}

export function DateFormat(date) {
    let newDate = dateWithLeadingZeros(date).split('/');
    let formateDate = `${newDate[2]}-${newDate[0]}-${newDate[1]} 00:00:00`
    return formateDate
}
export function FormatDate(date) {
    let newDate = dateWithLeadingZeros(date).split('/');
    let formateDate = `${newDate[2]}-${newDate[0]}-${newDate[1]} 00:00:00`
    return formateDate
}

export function AddDays(date) {
    Date.prototype.addDays = function (days) {
        this.setDate(this.getDate() + parseInt(days));
        return this;
    };
    let newDate = dateWithLeadingZeros(new Date(date).addDays(20)).split('/');
    let formateDate = `${newDate[2]}-${newDate[0]}-${newDate[1]} 00:00:00`
    return formateDate

}

export function GetFormattedDateDMY(date) {
    //It converts timestamps as well as dates provided in format (Year-Month-Day) into format Day/Month/Year
    //const DateAndTimeArr=date.split("T");
    //const DateArr=DateAndTimeArr.split("-");

    //item.joining_date.split("-")[2]+"/"+item.joining_date.split("-")[1]+"/"+item.joining_date.split("-")[0]   ---- Example
    
    let datetext="";
    if(date){
        const DateAndTimeArr=date.split("T")[0];
        const DateArr=DateAndTimeArr.split("-");
         datetext=DateArr[2]+"/"+DateArr[1]+"/"+DateArr[0];
    
    }
    
    
        
      

    return datetext;

}

export default GetFormattedDateDMY;