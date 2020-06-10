import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent implements OnInit {

  @Input() titre: string;
  createDate = new Date();
  @Input() contenu: string;

  constructor() { }

  ngOnInit(): void {
  }

}
