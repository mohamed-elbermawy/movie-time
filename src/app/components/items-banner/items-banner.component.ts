import { Component, Input, OnInit } from '@angular/core';
import { Movie } from './../../models/movie';

@Component({
  selector: 'app-items-banner',
  templateUrl: './items-banner.component.html',
  styleUrls: ['./items-banner.component.scss']
})
export class ItemsBannerComponent implements OnInit {
  @Input() items: Movie[] = [];
  @Input() title: string = "";
  @Input() IsTVShows:boolean = false;

  constructor() {}

  ngOnInit(): void {}
}
