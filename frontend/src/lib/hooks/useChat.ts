import { BASE_SOKET_IO_PATH } from "@lib/api";
import React, { useCallback, useEffect, useState } from "react";

const { SockJS, Stomp } = window as any;
interface IUseChatProps {
  roomId: string;
  initMessages: any;
}
const sockJs = new SockJS(`${BASE_SOKET_IO_PATH}/stomp/chat`);
const stomp = Stomp.over(sockJs);
function useChat({ initMessages, roomId }: IUseChatProps) {
  const [messages, setMessages] = useState<any>(initMessages);
  const userId = 16;

  const onSendMessage = useCallback((value: string) => {
    stomp.send(
      `/pub/chat/message`,
      {},
      JSON.stringify({ roomId: roomId, userId: userId, message: value })
    );
  }, []);

  useEffect(() => {
    // const sockJs = new SockJS("/stomp/chat");
    //1. SockJS를 내부에 들고있는 stomp를 내어줌
    // const stomp = Stomp.over(sockJs);

    //2. connection이 맺어지면 실행
    stomp.connect({}, function () {
      console.log("STOMP Connection");

      //4. subscribe(path, callback)으로 메세지를 받을 수 있음
      stomp.subscribe(`/sub/chat/room/` + roomId, function (chat: any) {
        const {
          message,
          createdDate,
          userId: senderUserId,
        } = JSON.parse(chat.body);
        // console.log(content);

        // const sender = content.userId;
        // const nickName = content.nickName;
        // const message = content.message;
        const owner = senderUserId === userId ? "self" : "another";

        setMessages((messages: any) =>
          messages.concat({ owner, message, timestamp: createdDate })
        );
      });
    });

    return () => {
      //   stomp.disconnect();
    };
  }, []);

  return {
    messages,
    onSendMessage,
  };
}

export default useChat;