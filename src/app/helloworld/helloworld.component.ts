import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'msg',
  template: '<h1>{{ message }}</h1>'
})
export class HelloworldComponent implements OnInit {
  message = 'Default text';
  ngOnInit() {
    this.message = 'Hello world!'
  }
}
