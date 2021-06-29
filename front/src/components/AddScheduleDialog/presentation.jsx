import React from "react";
import { Dialog, DialogContent } from "@material-ui/core";

// const AddScheduleDialog = ({}) => {
//   return (
//     <Dialog open={true} maxWidth="xs" fullWidth>
//       <DialogContent>dialog</DialogContent>
//     </Dialog>
//   );
// };

// ↓ これでredux側の状態が更新されると、それに伴ってdialogの開閉がされるようになる(isDialogOpenをtrueに変更するための関数が必要(CalendarBoard/container.jsx))

const AddScheduleDialog = ({ schedule: { isDialogOpen }, closeDialog }) => {
  return (
    <Dialog open={isDialogOpen} onClose={closeDialog} maxWidth="xs" fullWidth>
      <DialogContent>dialog</DialogContent>
    </Dialog>
  );
};

export default AddScheduleDialog;