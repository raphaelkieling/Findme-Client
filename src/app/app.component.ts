import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(
    private snack: MatSnackBar
  ) { }

  ngOnInit() {
    this.notificacaoCasoEstejaSemInternet();
  }

  private notificacaoCasoEstejaSemInternet() {
    window.addEventListener('offline', () => {
      this.snack.open('Você está offline, conecte-se novamente a internet', 'Beleza', {
        duration: 3000
      });
    });

    
  }
}
