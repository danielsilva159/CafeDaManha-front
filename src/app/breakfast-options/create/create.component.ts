import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ConnectionService } from 'src/app/connection.service';
import {Injectable} from '@angular/core';
import { Option } from '../option.model';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  list = [];
  constructor(
    private connection: ConnectionService
  ) { }
  name = new FormControl('');
  ngOnInit(): void {
  }
  save() {
    let option: Option = {
      option: this.name.value
    }
    this.connection.createOption(option).subscribe(() => {
      this.name.reset()
    })
  }
}
