import React from "react";
import { GridList } from "@material-ui/core";
import * as styles from "./style.css";
import dayjs from "dayjs";
import "dayjs/locale/ja";
dayjs.locale("ja");

const createCalendar = () => {
  // 今月の最初の日を取
  const firstDay = dayjs().startOf("month");
  // 最初の日の曜日のindexを取得
  const firstDayIndex = firstDay.day();

  return Array(35)
  // Array(35)だけだと値を持たないから、全てを0で初期化している
  // 要は[0, 0, 0, ...]みたいな感じで35要素分作ってる
  .fill(0)
  // その配列をmapで1~35の連番を作ってる
  // map関数の第二引数にはindexが渡ってるから、それで連番を作ってる
  //  i - firstDayIndex は月の最初の日の値が0になるよう
  .map((_,i) => {
    // 
    const diffFromFirstDay = i - firstDayIndex;
    const day = firstDay.add(diffFromFirstDay, "day");

    return day;
  });
};

const calendar = createCalendar();
console.log(calendar);
const CalendarBoard = () => {
  return (
    <div className={styles.container}>
      <GridList className={styles.grid} cols={7} spacing={0} cellHeight="auto">
        {calendar.map(c => (
          <li key={c.toISOString()}>
            <div className={styles.element}>{c.format("D")}</div>
          </li>
        ))}
      </GridList>
    </div>
  );
};

export default CalendarBoard;