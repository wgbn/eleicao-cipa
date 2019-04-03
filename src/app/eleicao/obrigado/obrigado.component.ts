import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {NavController} from "@ionic/angular";

@Component({
    selector: 'app-obrigado',
    templateUrl: './obrigado.component.html',
    styleUrls: ['./obrigado.component.scss'],
})
export class ObrigadoComponent implements OnInit {

    constructor(private location: Location, private nav: NavController) { }

    ngOnInit() {
        setTimeout(() => this.nav.navigateBack('/eleicao'), 2000);
    }

}
