import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ConnectionService } from 'src/app/connection.service';

@Component({
  selector: 'app-create-update',
  templateUrl: './create-update.component.html',
  styleUrls: ['./create-update.component.css']
})
export class CreateUpdateComponent implements OnInit {
  form = new FormGroup({
  name:  new FormControl('', Validators.required),
  cpf :  new FormControl('', Validators.required)
  })
  mensagem = false

  constructor(private connectionService: ConnectionService) { }

  ngOnInit(): void {}
  save() {
    this.connectionService.createCollaborator(this.form.value).subscribe(collaborator => {
      console.log(collaborator);

      this.mensagem=true
      this.form.reset();
      setTimeout(() => {
        this.mensagem = false
      }, 3000)
   })

}
}
