import {RxStompConfig} from "@stomp/rx-stomp";

export const rxStompConfig: RxStompConfig = {
  brokerURL: 'ws://localhost:8080/ws',
  connectHeaders: {
    username: 'hannah' + new Date(),
    password: '...'
  },

  debug: (msg: string): void => {
    console.log('WS', new Date(), msg);
  },
}
