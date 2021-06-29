// このファイルは、コンポーネントのロジック部分をCalendarBoard/index.jsxから切り分ける目的で作成した
// カレンダーを作成するロジック部分
import dayjs from "dayjs";

// exportが必要になったことに注意する
// これがないと別のファイルからこのコンポーネントを呼び出すことができない
export const createCalendar = month => {
  // 今月の最初の日を取
  const firstDay = getMonth(month);
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

export const getMonth = ({ year, month }) => {
  return dayjs(`${year}-${month}`);
};

// コンポーネント内でこれらを記述していたからこのファイルに切り離す
// 当日のスタイルを付けるため、当日がどうかを判定
// 文字列に変換した上で全く同じ文字列になっているか(=同じ日か)という判定をしている
export const isSameDay = (day, today) => {
  const format = "YYYYMMDD";
  return day.format(format) === today.format(format);
};
// 今月を取得
export const isSameMonth = (m1, m2) => {
  const format = "YYYYMM";
  return m1.format(format) === m2.format(format);
};
// 各月の1日(ついたち)を取得
export const isFirstDay = day => day.date() === 1;

export const getNextMonth = month => {
  const day = getMonth(month).add(1, "month");
  return formatMonth(day);
};

export const getPreviousMonth = month => {
  const day = getMonth(month).add(-1, "month");
  return formatMonth(day);
};

export const formatMonth = day => ({
  month: day.month() + 1,
  year: day.year()
});