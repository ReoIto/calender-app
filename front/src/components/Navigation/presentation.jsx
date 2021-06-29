import React from "react";
import { IconButton, Toolbar, Typography, withStyles } from "@material-ui/core";
import ArrowBackIos from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIos from "@material-ui/icons/ArrowForwardIos";
import DehazeIcon from "@material-ui/icons/Dehaze";
import { DatePicker } from "@material-ui/pickers";

// withStyles()でコンポーネントをラップすることで、そのコンポーネントにある程度のstyleを指定することができる
const StyledToolbar = withStyles({
  root: { padding: "0" }
})(Toolbar);

const StyledTypography = withStyles({
  root: { margin: "0 30px 0 10px" }
})(Typography);

const StyledDatePicker = withStyles({
  root: { marginLeft: 30 }
})(DatePicker);

const Navigation = ({ setNextMonth, setPreviousMonth, setMonth, month }) => {
  return (
    <StyledToolbar>
      <IconButton>
        <DehazeIcon />
      </IconButton>
      <img src="/images/calendar_icon.png" width="40" height="40" />
      <StyledTypography color="textSecondary" variant="h5" component="h1">
        Calendar
      </StyledTypography>
      <IconButton size="small" onClick={setPreviousMonth}>
        <ArrowBackIos />
      </IconButton>
      <IconButton size="small" onClick={setNextMonth}>
        <ArrowForwardIos />
      </IconButton>
      <StyledDatePicker
        value={month}
        onChange={setMonth}
        variant="inline" // これを指定しないとデフォルトのdialogになってしまう
        format="YYYY年 M月" // 常に表示される部分のフォーマットを指定
        animateYearScrolling // animateYearScrolling={true}と同義。アニメーションを許可してる
        disableToolbar // ToolBarを非表示
      />
    </StyledToolbar>
  );
};

export default Navigation;