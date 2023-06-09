import {
  Avatar,
  Box,
  Button,
  InputBase,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Paper,
  Typography,
  Grid,
  Divider,
  FormControl,
  FilledInput,
  InputAdornment,
  TextField,
  IconButton,
  SvgIcon,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import styled from "@emotion/styled";
import { ReactComponent as MessageSendIcon } from "@assets/icons/chat/Message_send.svg";

type OwnerType = "self" | "another";

function isOwnerSelf(owner: OwnerType) {
  return owner === "self";
}
export interface IMessage {
  owner: OwnerType;
  message: string;
  timestamp: string; // ex. 2023-05-07 17:48:13
}

interface IChatRoomProps extends IChatInputProps {
  messages: IMessage[];
}
export default function ChatRoom({
  messages,
  inputMessage,
  onChangeInputMessage,
  onSendMessage,
}: IChatRoomProps) {
  let previousTimeStamp: any = null;
  return (
    <Grid
      container
      direction="column"
      justifyContent="flex-start"
      alignItems="center"
      sx={{ height: "100%" }}
    >
      <Grid item sx={{ height: "85%" }}>
        <Grid container spacing={2} sx={{ p: 3 }}>
          {/* <Grid item xs={12}>
            <ChatDateDivider date={"2023년 04월 08일"} />
          </Grid> */}
          {messages.map(({ owner, message, timestamp }, index) => {
            let needDivider = !isSameYearMonthDay(previousTimeStamp, timestamp);

            previousTimeStamp = timestamp;
            return (
              <>
                {needDivider && (
                  <Grid item xs={12}>
                    <ChatDateDivider timestamp={timestamp} />
                  </Grid>
                )}
                <Grid item xs={12} key={index}>
                  <MessageBox
                    owner={owner}
                    message={message}
                    timestamp={timestamp}
                  />
                </Grid>
              </>
            );
          })}
        </Grid>
      </Grid>
      <Grid item sx={{ p: 2, width: "100%" }}>
        <ChatInput
          inputMessage={inputMessage}
          onChangeInputMessage={onChangeInputMessage}
          onSendMessage={onSendMessage}
        />
      </Grid>
    </Grid>
  );
}

interface IChatDateDividerProps {
  timestamp: string;
}
function ChatDateDivider({ timestamp }: IChatDateDividerProps) {
  const { year, month, day } = parseDateTime(timestamp);
  return (
    <Divider>
      <Typography
        sx={{ color: "grey" }}
      >{`${year}년 ${month}월 ${day}일`}</Typography>
    </Divider>
  );
}

function MessageBox({ owner, message, timestamp }: IMessage) {
  return (
    <Box sx={{ textAlign: isOwnerSelf(owner) ? "end" : "start" }}>
      {isOwnerSelf(owner) && <TimeStamp timestamp={timestamp} />}
      <Box
        sx={{
          backgroundColor: isOwnerSelf(owner) ? "#F3F7FA" : "#EEEBFF",
          m: isOwnerSelf(owner) ? "0 0 0 8px" : "0 8px 0 0",
          maxWidth: "70%",
          display: "inline-block",
          p: 1,
          borderRadius: "8px",
        }}
      >
        <Typography component={"div"}>{message}</Typography>
      </Box>
      {!isOwnerSelf(owner) && <TimeStamp timestamp={timestamp} />}
    </Box>
  );
}

interface ITimeStampProps {
  timestamp: string;
}
function TimeStamp({ timestamp }: ITimeStampProps) {
  const { hour, minute } = parseDateTime(timestamp);
  return (
    <Box
      component={"span"}
      sx={{
        fontSize: "0.8rem",
        lineHeight: "12px",
        color: "#868E96",
        verticalAlign: "bottom",
      }}
    >
      {`${hour}:${minute}`}
    </Box>
  );
}
interface IChatInputProps {
  inputMessage: string;
  onChangeInputMessage: any;
  onSendMessage: any;
}
function ChatInput({
  inputMessage,
  onChangeInputMessage,
  onSendMessage,
}: IChatInputProps) {
  return (
    <TextField
      value={inputMessage}
      onChange={onChangeInputMessage}
      placeholder="메시지를 입력하세요."
      variant="filled"
      fullWidth
      sx={{ p: 0 }}
      InputProps={{
        sx: {
          p: "0 !important",
          borderRadius: "20px !important",
          "&::before": { visibility: "hidden" },
          "&::after": { visibility: "hidden" },
        },
        endAdornment: (
          <IconButton aria-label="delete" size="large" onClick={onSendMessage}>
            <SvgIcon component={MessageSendIcon} />
          </IconButton>
        ),
      }}
      inputProps={{
        sx: { p: "12px !important" },
      }}
    />
  );
}

function isSameYearMonthDay(
  previousTimestamp: string | null,
  currentTimestamp: string
) {
  if (previousTimestamp === null) return false;
  const {
    year: prevYear,
    month: prevMonth,
    day: prevDay,
  } = parseDateTime(previousTimestamp);
  const {
    year: currentYear,
    month: currentMonth,
    day: currentDay,
  } = parseDateTime(currentTimestamp);

  if (
    prevYear === currentYear &&
    prevMonth === currentMonth &&
    prevDay === currentDay
  ) {
    return true;
  }

  return false;
}

function parseDateTime(text: string): {
  year: number;
  month: number;
  day: number;
  hour: number;
  minute: number;
} {
  const dateTime = new Date(text);
  const year = dateTime.getFullYear();
  const month = dateTime.getMonth() + 1; // 월은 0부터 시작하므로 1을 더해줌
  const day = dateTime.getDate();
  const hour = dateTime.getHours();
  const minute = dateTime.getMinutes();

  return { year, month, day, hour, minute };
}
