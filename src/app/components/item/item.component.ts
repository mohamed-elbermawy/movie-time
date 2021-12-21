import { Component, Input, OnInit } from '@angular/core';
import { Movie } from './../../models/movie';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input() dataItem: Movie | null = null;
  constructor() {}

  ngOnInit(): void {}
}
