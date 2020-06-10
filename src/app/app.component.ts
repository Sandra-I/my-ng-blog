import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  posts = [
    {
      title: "Article 1",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In diam leo, ultricies vitae eros in, semper fringilla lectus. Aenean interdum, lectus sed elementum blandit, neque odio vestibulum sapien, quis faucibus libero nisl ac est. Mauris congue tincidunt lorem in commodo.",
      loveIts: 0,
      created_at: null
    },
    {
      title: "Article 2",
      content: "Nullam porttitor lacus vitae velit porttitor, ut fringilla sapien tincidunt. Fusce libero lectus, iaculis eget tellus eu, dignissim posuere augue. Nam lobortis tincidunt arcu, a iaculis ligula consequat id. Vivamus congue elit nec pellentesque pellentesque. In egestas molestie ex ac commodo.",
      loveIts: 0,
      created_at: null
    },
    {
      title: "Article 3",
      content: "Sed eu varius massa, nec molestie nulla. Fusce et nibh convallis, interdum nunc at, sollicitudin odio. Nam fringilla libero ac orci hendrerit ullamcorper. Maecenas laoreet nulla sit amet odio luctus, ac suscipit libero luctus.",
      loveIts: 0,
      created_at: null
    }
  ]

  getPosts() {
    return this.posts;
  }

}
