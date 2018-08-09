
export function isEmpty(str){
  const emptyReg=/^\s*$/;
  if(emptyReg.test(str)){
    return true;
  }
  return false;
}


export function wrapperFunc(payload,func,dispatch){
   if(typeof func=='function'){
     return func && func(payload)(dispatch);
   }
}

//获取数组的最大ID+1 返回
export function FilterMaxId(list,columnName){
    const temp=list && list[list.length-1];
    if(temp==undefined)return 1;
    if(columnName in temp)
      return parseInt(temp[columnName])+1;
    return 1;
}


export function getTime(format){
   const Time=new Date();
   const year=Time.getFullYear();
   const month=Time.getMonth() + 1;
   const monthStr=month<10 ? '0'+month : month;

   const day=Time.getDate();
   const dayStr=day<10? '0'+day : day;

   const hour=Time.getHours();
   const hourStr=hour<10 ? '0'+hour : hour;

   const minutes=Time.getMinutes();
   const minutesStr=minutes<10 ? '0'+minutes : minutes;

   const seconds=Time.getSeconds();
   const secondsStr=seconds < 10 ? '0'+seconds : seconds;
   switch(format){
   	  case 'yyyy-MM-dd HH:mm:ss':
          return year+'-'+monthStr+'-'+dayStr+" "+hourStr+":"+minutesStr+":"+secondsStr;
   	  break;
   	  case 'yyyy-MM-dd':
   	      console.log("result is "+format);
          return year+'-'+monthStr+'-'+dayStr; 
   	  break;
   	  case '年月日':
          return year+'年'+monthStr+'月'+dayStr+'日';
   	  break;
   }
}