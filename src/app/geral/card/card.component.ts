import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {

  @Input() nome: string;
  @Input() setor: string;
  @Input() imagem: string;
  @Output() result: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {}

  meClicou() {
    this.result.emit({
      nome: this.nome
    });
  }

}
