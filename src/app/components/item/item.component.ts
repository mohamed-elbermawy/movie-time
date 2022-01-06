import { Component, Input, OnInit } from '@angular/core';
import { Movie } from './../../models/movie';
import { IMAGE_SIZES } from './../../constants/image-sizes';
import { Router } from '@angular/router';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input() dataItem: Movie | null = null;
  readonly imageSizes = IMAGE_SIZES;
  constructor(private router: Router) {}

  ngOnInit(): void {}

  navigate(id: number): void {
    this.router.navigate([`/movie/${id}`]).then(() => {
      window.location.reload();
    });
  }
}
