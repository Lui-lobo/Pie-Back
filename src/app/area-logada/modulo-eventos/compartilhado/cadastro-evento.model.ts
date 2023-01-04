export class CadastroEventoReservadoAssentoLivre {
  idEvento: number = 0;
  nomeEvento : string = '';
  dataHoraEvento : string = '';
  localEvento : string =  '';
  descricao : string = '';
  qtdVagas : number =  0;
  limiteReservaPorUsuario : number =  0;
  necessidadeDeReserva : boolean = false;
  qtdFileiras : number = 0;
  qtdAssentosPorFileira : number = 0;
  qtdReservas: number = 0;
  status: string ='';
  dataHoraCriacaoEvento: string = "";
  nomeUsuarioCriadorEvento: string = "";
  dataHoraUltimaAlteracao: string = "";
  nomeUsuarioUltimaAlteracao: string = "";
}
