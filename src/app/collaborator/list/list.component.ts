import { FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConnectionService } from 'src/app/connection.service';
import { Collaborator } from '../collaborator.model';
import { Option } from 'src/app/breakfast-options/option.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  options: any = [];
  collaborators: any = [];
  collaboratorsOfOptions: any = [];
  markedOptions: Option[] = [];
  collaborator: Collaborator = {
    name: '',
    cpf: '',
    options: []
  }
  selectedContributor: number = 0;

  constructor(
    private route: Router,
    private connectionService: ConnectionService
  ) { }

  ngOnInit(): void {
    this.listOptions()
    this.listCollaborator();
  }

  request() {
    this.route.navigate(['/create-update'])
  }

  listOptions() {
    this.connectionService.listOptions().subscribe(data => {
      this.options = data;
    })
  }

  listCollaborator() {
    this.connectionService.listCollaborator().subscribe(collaborators => {
      this.collaboratorsOfOptions = collaborators.filter(c => c.options?.length)
      this.collaborators = collaborators
    })
  }
  marked(event: any) {
    const option: Option = {
      option: event.target.value
}
    if (event.target.checked) {
      this.markedOptions.push(option)
    } else {
      this.markedOptions.forEach((option: any, index: number) => {
        if (option.name === event.target.value) {
          this.markedOptions.splice(index, 1)
        }
      });
    }
    console.log(this.markedOptions);
  }

  saveOptionsCollaborator() {
    const collaborator = this.collaborators.find((c: Collaborator) => c.id == this.selectedContributor)
    if (collaborator && this.markedOptions.length) {
      this.collaborator = {
        name: collaborator.name,
        cpf: collaborator.cpf,
        options: this.markedOptions
      }
      this.connectionService.updateCollaborator(collaborator.id, this.collaborator).subscribe(() => {
        this.listCollaborator();
      })
    }

  }
}
