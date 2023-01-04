import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nossos-servicos-home',
  templateUrl: './nossos-servicos-home.component.html',
  styleUrls: ['./nossos-servicos-home.component.scss']
})
export class NossosServicosHomeComponent implements OnInit {

  private imagemInfo =   [
    {"tema":"Transporte","descricao":"Reserva de vagas de estacionamento e contratação de transporte escolares."},
    {"tema":"Reservas","descricao":"Alunos podem fazer reservas de máquinas da sala de informártica, assentos em auditórios, e muito mais."},
    {"tema":"Secretaria","descricao":"Abertura de requisições, agendamento de atendimento e aquisições de livros e uniformes entre outros."},
    {"tema":"Alimentação","descricao":"Cantinas, lanchonetes e restaurantes podem disponibilizar seus itens aqui. É só comprar pela plataforma e retirar."},
    {"tema":"Cronograma","descricao":"Todo cronograma de aulas pode ser disponibilizado aos alunos, bem como temas de aula e entregas previstas."},
    {"tema":"Biblioteca","descricao":"É possivel cadastrar todo acervo da Institução, e alunos podem reservar livros da biblioteca."}
  ]

  private imagens : NodeListOf<HTMLElement> = document.querySelectorAll('[data-tema]')
  private imagemTitulo : NodeListOf<HTMLElement> = document.querySelectorAll('.nossos-servicos__imagem-titulo')
  private imagemTexto : NodeListOf<HTMLElement> = document.querySelectorAll('.nossos-servicos__imagem-texto')


  constructor() { }

  ngOnInit(): void {

    this.imagens = document.querySelectorAll('[data-tema]')
    this.imagemTitulo = document.querySelectorAll('.nossos-servicos__imagem-titulo')
    this.imagemTexto = document.querySelectorAll('.nossos-servicos__imagem-texto')
    console.log(this.imagens)

    this.adicionarEventoHover()
  }

  adicionarEventoHover(){
    this.imagens.forEach((elemento) => {


      for(let contador=0;contador<Object.keys(this.imagemInfo).length;contador++){
          let contadorInterno = contador
          if(elemento.dataset['tema'] == this.imagemInfo[contador]['tema']){

            for(let contador2=0;contador2<this.imagemTitulo.length;contador2++){
              let contadorInterno2 = contador2
              elemento.addEventListener('mouseover', ()=>{
                this.imagemTitulo[contadorInterno2].innerHTML = this.imagemInfo[contadorInterno]['tema']
                this.imagemTexto[contadorInterno2].innerHTML = this.imagemInfo[contadorInterno]['descricao']
                })
            }
          }
      }
})
  }
}
