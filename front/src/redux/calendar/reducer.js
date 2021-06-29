// reducerはactionが実行されたときにどのような状態になるかを定義するとこ
import dayjs from "dayjs";
import { CALENDAR_SET_MONTH } from "./action";
import { formatMonth } from "../../services/calendar";

const day = dayjs();
const init = formatMonth(day);

// 月と年の情報をcalendarというstateで管理する
// const init = { // 初期値：何年の何月かという情報があれば表示すべきカレンダーが決められる。
//   year: day.year(),
//   month: day.month() + 1 // +1について：day.month()は月情報のindexを渡すから0~11。+1で1~12になる
// };

const calendarReducer = (state = init, action) => {
  const { type, payload } = action;
  switch (type) {
    case CALENDAR_SET_MONTH:
      return payload;
    default:
      return state;
  }
};

export default calendarReducer;