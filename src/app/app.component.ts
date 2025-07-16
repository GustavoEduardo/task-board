import { Component, inject, OnInit } from '@angular/core';
import { ThemeToggleComponent } from './shared/components/theme-toggle/theme-toggle.component';
import { ThemeService } from './shared/services/theme.service';
import { MainComponent } from './layout/main/main.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ThemeToggleComponent, MainComponent],
  templateUrl: './app.component.html',
  styles: ``,
})
export class AppComponent implements OnInit {
  private themeService = inject(ThemeService);

  public ngOnInit(): void {
    const currentColorTheme = this.themeService.getPreferredColorTheme();

    this.themeService.setColorTheme(currentColorTheme);
  }
}
