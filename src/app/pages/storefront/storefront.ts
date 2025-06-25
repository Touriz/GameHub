import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { CardComponent } from "../../components/card/card.component";

@Component({
  selector: 'app-storefront',
  imports: [HeaderComponent, FooterComponent, CardComponent],
  templateUrl: './storefront.html',
  styleUrl: './storefront.scss'
})
export class Storefront {

}
