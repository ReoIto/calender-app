// このファイルは、コンポーネントのロジック部分をCalendarBoard/index.jsxから切り分ける目的で作成した
// ロジック = カレンダーを作成する部分

import dayjs from "dayjs";
// exportが必要になったことに注意する
// これがないと別のファイルからこのコンポーネントを呼び出すことができない
export const createCalendar = () => {
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