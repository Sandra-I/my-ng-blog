import { Component, OnInit, Input } from '@angular/core';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent implements OnInit {

  @Input() title: string;
  @Input() content: string;
  loveIts: number;
  dontLoveIts: number;

  createDate: Date;

  constructor() {
    this.createDate = new Date();
    this.loveIts = 0;
    this.dontLoveIts = 0;
  }
  ngOnInit(): void {
  }
  // Méthode bouton j'aime
  onLike() {
    return this.loveIts++;
  }
  // Méthode bouton j'aime pas
  onDislike() {
    return this.dontLoveIts++;
  }
  // Méthode gestion de class
  postColor() {
    if(this.loveIts>this.dontLoveIts) {
      return 'list-group-item-success';
    }else if(this.loveIts<this.dontLoveIts){
      return 'list-group-item-danger';
    }else{
      return '';
    }
  }

}
