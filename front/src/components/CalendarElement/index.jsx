// コンポーネントが少しごちゃついてきたから<CalendarElement>というコンポーネントとして切り出す
// CarendarElementの親コンポーネントはCalendarBoard

import React from "react";
import * as styles from "./style.css";
import { Typography } from "@material-ui/core";
import dayjs from "dayjs";
import { isSameMonth, isSameDay, isFirstDay } from "../../services/calendar";

// props.childrenをそのまま表示しているだけ
//
// const CalendarElement = ({ children }) => {
//   //.....
// };
//
// 上記の書き方は引数を分割して代入する方法で、この場合はchildrenという変数にprops.childrenが代入される
// だからなんどもpropsと書かなくて済む 
// const CalendarElement = ({ children }) => {
//   return (
//     <div className={styles.element}>
//       <div className={styles.date}>{ children }</div>
//     </div>
//   );
// };

// const CalendarElement = ({ day }) => {
//   return (
//     <div className={ styles.element }>
//       <Typography
//         className={ styles.date }
//         align="center"
//         variant="caption"
//         component="div"
//       >
//         { day.format("D")}
//       </Typography>
//     </div>
//   );
// };

const CalendarElement = ({ day }) => {
  const today = dayjs();
  // 今月以外のときグレーダウン(textPrimary: 黒, textSecondary: グレー)
  const isCurrentMonth = isSameMonth(day, today);
  const textColor = isCurrentMonth ? "textPrimary" : "textSecondary";
  const format = isFirstDay(day) ? "M月D日" : "D";
  const isToday = isSameDay(day, today);

  return (
    <div className={styles.element}>
      <Typography
        className={styles.date}
        color={textColor} 
        align="center"
        variant="caption"
        component="div"
      >
        {/* isTodayがtrueの場合のみ新たにスタイルを適用 */}
        <span className={ isToday ? styles.today : "" }>
        {day.format(format)}
        </span>
      </Typography>
    </div>
  );
};

export default CalendarElement; 