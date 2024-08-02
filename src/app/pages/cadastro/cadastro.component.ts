import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [SharedModule, RouterLink],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.scss'
})
export class CadastroComponent implements OnInit {

  @Output() showCardCadastro = new EventEmitter;
  cadastroForm: FormGroup = new FormGroup({});

  constructor(
    private formBuilder: FormBuilder,
  ) {}

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.cadastroForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.maxLength(50)]],
      email: ['', [Validators.required, Validators.maxLength(20)]],
      password: ['', [Validators.required]],
      confirm_password: ['', [Validators.required]],
    });
  }

  onSubmit(event: Event) {
    event.preventDefault();

    if(this.cadastroForm.valid){
      console.log(this.cadastroForm.value)
    }
  }

  voltar() {
    this.showCardCadastro.emit(false)
  }

}
