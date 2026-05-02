import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { skillsListEnter } from './skills.animations';
import {
  EDUCATION,
  EXPERIENCE,
  GITHUB_REPO_URL,
  HERO_HEADLINE,
  HERO_SUBTITLE,
  SKILL_CHIPS,
  SUMMARY,
  type SkillChip,
} from './portfolio.data';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  animations: [skillsListEnter],
})
export class App {
  protected readonly headline = HERO_HEADLINE;
  protected readonly subtitle = HERO_SUBTITLE;
  protected readonly summary = SUMMARY;
  protected readonly githubUrl = GITHUB_REPO_URL;

  protected readonly skills = signal<readonly SkillChip[]>(SKILL_CHIPS);
  protected readonly experience = signal(EXPERIENCE);
  protected readonly education = signal(EDUCATION);
}
