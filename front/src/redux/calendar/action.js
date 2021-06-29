// どのaction typeに対してどのような値を(payload)を渡すかを定義する

export const CALENDAR_SET_MONTH = "CARENDAR_SET_MONTH";

//action
export const calendarSetMonth = payload => ({
  type: CALENDAR_SET_MONTH,
  payload  //中身はstateと同じ構造の年と月のオブジェクト 
});