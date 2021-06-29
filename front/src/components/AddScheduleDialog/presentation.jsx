import React from "react";
import { 
  Dialog,
  DialogContent,
  TextField,
  DialogActions,
  Button,
  Input,
  Grid,
  IconButton
} from "@material-ui/core";
import { 
  LocationOnOutlined, 
  NotesOutlined,
  AccessTime,
  Close
} from "@material-ui/icons";
import { DatePicker } from "@material-ui/pickers";
import { withStyles } from "@material-ui/styles";
import * as styles from "./style.css";

const spacer = { margin: "4px 0" };
const Title = withStyles({
  root: { marginBottom: 32, fontSize: 22 }
})(Input);

// const AddScheduleDialog = ({}) => {
//   return (
//     <Dialog open={true} maxWidth="xs" fullWidth>
//       <DialogContent>dialog</DialogContent>
//     </Dialog>
//   );
// };

// ↓ これでredux側の状態が更新されると、それに伴ってdialogの開閉がされるようになる(isDialogOpenをtrueに変更するための関数が必要(CalendarBoard/container.jsx))

const AddScheduleDialog = ({
  schedule: {
    form: { title, location, description, date },
    isDialogOpen
  },
  closeDialog,
  setSchedule
}) => {
  return (
    <Dialog open={isDialogOpen} onClose={closeDialog} maxWidth="xs" fullWidth>
      <DialogActions>
        <div className={styles.closeButton}>
          <IconButton onClick={closeDialog} size="small">
            <Close />
          </IconButton>
        </div>
      </DialogActions>
      <DialogContent>
        <Title
          autoFocus
          fullWidth
          placeholder="タイトルと日時を追加"
          value={title}
          onChange={e => setSchedule({ title: e.target.value })} // さっき作ったdispatch用の関数(/AddScheduleDialog/container.jsx)をonChangeで指定している。これの引数は4-1 で定義したように{ [key]: value }で指定してあげる必要がある。例えば、titleを変更したいのであれば{ title: "次のstate" }という風に渡す。このvalueは、onChageのコールバックの引数のeから,e.target.valueと指定すると取ることができる。
        />
        <Grid container spacing={1} alignItems="center" justify="space-between">
          <Grid item>
            <AccessTime />
          </Grid>
          <Grid item xs={10}>
            <DatePicker
              value={date}
              onChange={d => setSchedule({ date: d })} // <DatePicker>のonChangeのコールバックは state として持ちたいDayjsオブジェクトをそのまま引数に渡してくれるから、{ date: d }としてsetScheduleに渡せばok
              variant="inline"
              format="YYYY年M月D日"
              animateYearScrolling
              disableToolbar
              fullWidth
              style={spacer}
            />
          </Grid>
        </Grid>
        <Grid container spacing={1} alignItems="center" justify="space-between">
          <Grid item>
            <NotesOutlined />
          </Grid>
          <Grid item xs={10}>
            <TextField
              style={spacer}
              fullWidth
              placeholder="説明を追加"
              value={description}
              onChange={e => setSchedule({ description: e.target.value })} // <Input>や<TextField>には、react での<input>と同様にvalueとして状態管理している変数を渡す必要があります。4-1 でformという state の中に変数を定義してあるのでそれを分割代入で引数として受け取ってそれぞれのコンポーネントに渡している
            />
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button color="primary" variant="outlined">
          保存
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddScheduleDialog;