import {
  LeadingActions,
  SwipeableList,
  SwipeableListItem,
  SwipeAction,
  TrailingActions,
  Type,
} from "react-swipeable-list";
import React, { useState, useRef } from "react";
import {
  Box,
  Avatar,
  Divider,
  Typography,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Grid,
} from "@mui/material";
import SlidableList from "@components/common/SlidableList";
import BillimConfirm from "@components/common/BillimConfirm";

const Trailer = ({ id, onOpenDialog }: any) => (
  <TrailingActions>
    <SwipeAction onClick={() => onOpenDialog(id)}>
      <Grid
        container
        justifyContent={"center"}
        alignItems={"center"}
        sx={{ backgroundColor: "black", color: "white", height: "100%" }}
      >
        <Grid item> 삭제 </Grid>
      </Grid>
    </SwipeAction>
  </TrailingActions>
);

export interface IChatInfo {
  id: string;
  lastMessage: string;
  lastMessageDate: string; //"yyyy-MM-dd HH:mm:ss";
  productName: string;
  traderName: string;
  // 이미지 경로
  imageName: string;
}

interface IChattingListProps {
  onRemove: any;
  onMoveChat: any;
  chattingLists: IChatInfo[];
}
export default function ChattingList({
  onMoveChat,
  onRemove,
  chattingLists,
}: IChattingListProps) {
  const [openDialog, setDialog] = useState(false);
  const chatIdRef = useRef<string | null>(null);

  const onOpenDialog = (chatId: string) => {
    setDialog(true);
    chatIdRef.current = chatId;
  };

  const onCloseDialog = () => {
    setDialog(false);
    chatIdRef.current = null;
  };

  const onConfirm = () => {
    onRemove(chatIdRef.current);
    onCloseDialog();
  };

  return (
    /* SwipeableList 하위에 무조건 SwipeableListItem이 위치해야 정상 작동함
      따라서 별도의 Item Component로 분리시키지 못함 (library props중 해당
      규칙을 변경하는게 있을걸로 추정됌 */
    <>
      <SlidableList>
        {chattingLists.map(
          ({
            id,
            traderName,
            lastMessage,
            productName,
            lastMessageDate,
            imageName,
          }) => {
            return (
              <SwipeableListItem
                key={id}
                trailingActions={
                  <Trailer id={id} onOpenDialog={onOpenDialog} />
                }
              >
                <ListItem
                  alignItems="flex-start"
                  onClick={() => onMoveChat(id)}
                >
                  <ListItemAvatar>
                    <Avatar alt="Remy Sharp" src={imageName} />
                  </ListItemAvatar>
                  <ListItemText
                    primary={
                      <Grid container justifyContent={"space-between"}>
                        <Grid item>
                          <Typography component="span">{traderName}</Typography>
                          <Typography component="span"> </Typography>
                          <Typography
                            component="span"
                            sx={{ fontSize: "0.9rem", color: "grey" }}
                          >
                            {productName}
                          </Typography>
                        </Grid>
                        <Grid item>
                          <Typography
                            component="span"
                            sx={{ fontSize: "0.9rem", color: "grey" }}
                          >
                            {lastMessageDate}
                          </Typography>
                        </Grid>
                      </Grid>
                    }
                    secondary={
                      <Grid container>
                        <Grid item>
                          <Typography variant="body2" color="text.primary">
                            {lastMessage}
                          </Typography>
                        </Grid>
                      </Grid>
                    }
                  />
                </ListItem>
              </SwipeableListItem>
            );
          }
        )}
      </SlidableList>
      <BillimConfirm
        open={openDialog}
        title={"삭제 시 대화 내용이 모두 삭제되고 채팅 목록에서도 삭제돼요."}
        confirmMessage={"삭제"}
        onConfirm={onConfirm}
        onCancle={onCloseDialog}
      />
    </>
  );
}
