import React from "react";
import {
  GridList,
  Typography
} from "@material-ui/core";
import * as styles from "./style.css";
import CalendarElement from "../CalendarElement";

const days = ["日", "月", "火", "水", "木", "金", "土"];

const CalendarBoard = ({ calendar, month, openAddScheduleDialog }) => {
  console.log(calendar);
  return (
    <div className={styles.container}>
      <GridList className={styles.grid} cols={7} spacing={0} cellHeight="auto">
        { days.map(day =>
          <li key={ day }>
            <Typography
              // 中央揃えの色はグレー(textSecondary)で見た目が<caption>で実態が<div>のコンポーネント
              className={styles.days}
              color="textSecondary"
              align="center"
              variant="caption"
              component="div"
            >
              { day }
            </Typography>
          </li>
        )}
        { calendar.map(c => (
          <li key={c.toISOString()} onClick={() => openAddScheduleDialog()}>
            <CalendarElement day={c} month={month} />
          </li>
        ))}
      </GridList>
    </div>
  );
};

export default CalendarBoard;