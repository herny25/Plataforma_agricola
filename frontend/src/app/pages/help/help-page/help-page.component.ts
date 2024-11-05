import { Component } from '@angular/core';

interface AccordionItem {
  title: string;
  content: string;
  isOpen: boolean;
}

@Component({
  selector: 'app-help-page',
  templateUrl: './help-page.component.html',
  styleUrls: ['./help-page.component.css']
})

export class HelpPageComponent {
  isOpen: boolean[] = new Array(6).fill(false);

  toggleAccordion(index: number): void {
    this.isOpen[index] = !this.isOpen[index];
  }
}
