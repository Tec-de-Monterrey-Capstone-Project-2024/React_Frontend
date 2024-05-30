import { io } from 'socket.io-client';

const URL = 'ws://localhost:8085?connectItemType=INSTANCE&username=FrontReact';

export const socket = io(URL);
