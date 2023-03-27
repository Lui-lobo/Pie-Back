import { Component, OnInit } from '@angular/core';
import { AuthGuardGuard } from 'src/app/auth/auth-guard.guard';
import { EncontrarUsuarioService } from 'src/app/services/areaLogada/encontrar-usuario.service';

@Component({
  selector: 'app-cabecalho-interno',
  templateUrl: './cabecalho-interno.component.html',
  styleUrls: ['./cabecalho-interno.component.scss']
})
export class CabecalhoInternoComponent implements OnInit {

  constructor(private auth: AuthGuardGuard, private encontrarUsuarioService: EncontrarUsuarioService) { }

  ngOnInit(): void {
    this.encontrarUsuarioService.findUser().subscribe((res) => {
      console.log(res)
    })
  }

}
