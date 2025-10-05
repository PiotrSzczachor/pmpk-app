import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Message } from '../../models/message.model';
import { Conversation } from '../../models/conversation.model';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule, DatePipe, NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatFormFieldModule, MatIconModule, NgClass, FormsModule, DatePipe, MatInputModule,],
  templateUrl: './chat.html',
  styleUrl: './chat.scss'
})
export class Chat implements OnInit {
  userId = '1';
  messageText: string = '';

  conversations: Conversation[] = [];
  messages: Record<string, Message[]> = {};
  selectedConversation?: Conversation;
  conversationHistory: Message[] = [];

  ngOnInit(): void {
    this.generateMockData();
  }

  generateMockData(): void {
    this.conversations = [
      { user_id: '2', user_name: 'Anna Kowalska', last_message: 'Jasne, do zobaczenia!', last_message_time: '2025-10-05T13:25:00Z' },
      { user_id: '3', user_name: 'Piotr Nowak', last_message: 'Okej, wysyłam plik.', last_message_time: '2025-10-05T12:40:00Z' },
      { user_id: '4', user_name: 'Magda Zielińska', last_message: 'Haha, dokładnie 😄', last_message_time: '2025-10-05T11:10:00Z' }
    ];

    this.messages = {
      '2': [
        { id: 'm1', sender_id: '1', receiver_id: '2', content: 'Hej, jak tam?', created_at: '2025-10-05T13:00:00Z' },
        { id: 'm2', sender_id: '2', receiver_id: '1', content: 'Cześć! Wszystko super, a u Ciebie?', created_at: '2025-10-05T13:05:00Z' },
        { id: 'm3', sender_id: '1', receiver_id: '2', content: 'Też dobrze. Spotykamy się dziś?', created_at: '2025-10-05T13:15:00Z' },
        { id: 'm4', sender_id: '2', receiver_id: '1', content: 'Jasne, do zobaczenia!', created_at: '2025-10-05T13:25:00Z' }
      ],
      '3': [
        { id: 'm5', sender_id: '3', receiver_id: '1', content: 'Hej, masz chwilę?', created_at: '2025-10-05T12:30:00Z' },
        { id: 'm6', sender_id: '1', receiver_id: '3', content: 'Tak, co tam?', created_at: '2025-10-05T12:35:00Z' },
        { id: 'm7', sender_id: '3', receiver_id: '1', content: 'Okej, wysyłam plik.', created_at: '2025-10-05T12:40:00Z' }
      ],
      '4': [
        { id: 'm8', sender_id: '4', receiver_id: '1', content: 'Widziałeś to zdjęcie?', created_at: '2025-10-05T11:00:00Z' },
        { id: 'm9', sender_id: '1', receiver_id: '4', content: 'Tak! 😂 Mega zabawne!', created_at: '2025-10-05T11:05:00Z' },
        { id: 'm10', sender_id: '4', receiver_id: '1', content: 'Haha, dokładnie 😄', created_at: '2025-10-05T11:10:00Z' }
      ]
    };
  }

  selectConversation(conversation: Conversation): void {
    this.selectedConversation = conversation;
    this.conversationHistory = this.messages[conversation.user_id!] || [];
  }

  sendMessage(): void {
    if (!this.selectedConversation || !this.messageText.trim()) return;

    const newMessage: Message = {
      id: Math.random().toString(36).substring(2),
      sender_id: this.userId,
      receiver_id: this.selectedConversation.user_id,
      content: this.messageText,
      created_at: new Date().toISOString()
    };

    this.conversationHistory.push(newMessage);
    this.messages[this.selectedConversation.user_id!].push(newMessage);

    this.selectedConversation.last_message = this.messageText;
    this.selectedConversation.last_message_time = newMessage.created_at;

    this.messageText = '';
  }
}
