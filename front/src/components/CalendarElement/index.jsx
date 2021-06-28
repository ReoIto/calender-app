// コンポーネントが少しごちゃついてきたから<CalendarElement>というコンポーネントとして切り出す
// CarendarElementの親コンポーネントはCalendarBoard

import React from "react";
import * as styles from "./style.css";
import { Typography } from "@material-ui/core";
import dayjs from "dayjs";

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
  // 各月の1日(ついたち)を取得
  const isFirstDay = day.date() === 1;
  // 各月の1日のみ月情報をつける。それ以外であれば日にちの数字だけを表示する
  const format = isFirstDay ? "M月D日" : "D"
  // 下３行： 当日の日にちにスタイルをつけるために当日かどうかを判断する
  // 文字列に変換した上で全く同じ文字列になっているか(=同じ日か)という判定をしている
  const today = dayjs();
  const compareFormat = "YYYYMMDD";
  const isToday = day.format(compareFormat) === today.format(compareFormat)

  return (
    <div className={styles.element}>
      <Typography
        className={styles.date}
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