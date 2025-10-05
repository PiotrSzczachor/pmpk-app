import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { Message } from "../models/message.model";
import { Conversation } from "../models/conversation.model";

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private socket!: WebSocket;
//   private token$!: Observable<string | undefined>;
//   private userId: string | undefined;
  private messageSubject = new Subject<Message>();

  constructor(
    // private store: Store<AppState>,
    private http: HttpClient
  ) {
  }

  sendMessage(receiverId: string, content: string): void {
    if (this.socket && this.socket.readyState === WebSocket.OPEN) {
      const messageData = {
        receiver_id: receiverId,
        content: content
      };
      this.socket.send(JSON.stringify(messageData));
    } else {
      console.error('WebSocket nie jest połączony');
    }
  }

  getMessages(): Observable<Message> {
    return this.messageSubject.asObservable();
  }

//   getConversationHistory(userId: string): Observable<any> {
//     return this.http.get<any>(`${environment.chatUrl}/chat/messages/${userId}`, {
//       headers: { 'X-User-ID': this.userId || '' }
//     });
//   }

//   getConversations(): Observable<Conversation[]> {
//     return this.http.get<Conversation[]>(`${environment.chatUrl}/chat/conversations`, {
//       headers: { 'X-User-ID': this.userId || '' }
//     });
//   }

  closeConnection(): void {
    if (this.socket && this.socket.readyState === WebSocket.OPEN) {
      this.socket.close();
    }
  }

  reconnect(): void {
    this.closeConnection();
    this.connectWebSocket();
  }

  isConnected(): boolean {
    return this.socket && this.socket.readyState === WebSocket.OPEN;
  }

  private connectWebSocket(): void {
    // if (!this.userId) return;

    // const wsUrl = `ws://${environment.socketUrl}${this.userId}`;
    // this.socket = new WebSocket(wsUrl);

    // this.socket.onopen = () => {
    //   console.log('WebSocket połączony');
    // };

    // this.socket.onclose = (event) => {
    //   console.warn('WebSocket zamknięty', event);
    //   setTimeout(() => this.reconnect(), 3000);
    // };

    // this.socket.onerror = (event) => {
    //   console.error('WebSocket błąd', event);
    // };

    // this.socket.onmessage = (event) => {
    //   try {
    //     const message: Message = JSON.parse(event.data);
    //     if (message.error) {
    //       console.error('Błąd z serwera:', message.error);
    //     } else {
    //       this.messageSubject.next(message);
    //     }
    //   } catch (e) {
    //     console.error('Błąd parsowania wiadomości:', e);
    //   }
    // };
  }
}