import React from "react";
import {
  GridList,
  Typography
} from "@material-ui/core";
import * as styles from "./style.css";
import CalendarElement from "../CalendarElement";
import { createCalendar } from "../../services/calendar";

const calendar = createCalendar();
console.log(calendar);

const days = ["日", "月", "火", "水", "木", "金", "土"];

const CalendarBoard = () => {
  return (
    <div className={styles.container}>
      <GridList className={styles.grid} cols={7} spacing={0} cellHeight="auto">
        { days.map(day =>
          <li key={ day }>
            <Typography
              // 中央揃えの色はグレー(textSecondary)で見た目が<caption>で実態が<div>のコンポーネント
              className={styles.days}
              color="textSecondary"
              align="right"
              variant="caption"
              component="div"
            >
              { day }
            </Typography>
          </li>
        )}
        { calendar.map(c => (
          <li key={ c.toISOString() }>
            <CalendarElement day={ c } />
          </li>
        ))}
      </GridList>
    </div>
  );
};

export default CalendarBoard;