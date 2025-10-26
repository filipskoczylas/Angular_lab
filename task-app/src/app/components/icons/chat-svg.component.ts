import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-chat-svg',
    template: `
    <svg
        xmlns="http://www.w3.org/2000/svg"
        [attr.width]="width" [attr.height]="height" [attr.class]="class" 
        viewBox="0 0 32 32"
    >
      <g
      fill="none"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
    >
      <path d="M25 5H7a4 4 0 0 0-4 4v10a4 4 0 0 0 4 4h11l6 4v-4h1a4 4 0 0 0 4-4V9a4 4 0 0 0-4-4Z" />
      <path d="M10 15a1 1 0 1 1-2 0a1 1 0 0 1 2 0Zm6 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0Zm6 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0Z" />
    </g>
    </svg>
  `
})
export class ChatSvgComponent {
  @Input() width:number = 32;
  @Input() height:number = 32;
  @Input() class:string = "";
}