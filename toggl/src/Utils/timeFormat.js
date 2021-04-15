export const getTime=(seconds)=>{
    const sec = seconds % 60;
    const min = Math.floor(seconds/60)%60;
    const hrs = Math.floor(seconds/(60*60))
    return `${hrs} : ${min>9?min:"0"+min} : ${sec>9?sec:"0"+sec}`
}