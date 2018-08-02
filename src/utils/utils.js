
export function isEmpty(str){
  const emptyReg=/^\s*$/;
  if(emptyReg.test(str)){
    return true;
  }
  return false;
}