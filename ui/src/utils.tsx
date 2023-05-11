export const formatDate = (date: string) => {
    const d = new Date(date);
    const year = d.getFullYear();
    const month = ("0" + (d.getMonth() + 1)).slice(-2);
    const day = ("0" + d.getDate()).slice(-2);
    return `${year}-${month}-${day}`;
  };
  
export const formatTime = (time: string) => {
    const d = new Date(`2000-01-01T${time}`);
    const hours = ("0" + d.getHours()).slice(-2);
    const minutes = ("0" + d.getMinutes()).slice(-2);
    const seconds = ("0" + d.getSeconds()).slice(-2);
    return `${hours}:${minutes}:${seconds}`;
};
  