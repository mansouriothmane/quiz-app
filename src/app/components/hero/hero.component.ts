import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {
  imagePath = 'illustration.svg';
  headline = 'Learn, Compete, and Have Fun!';
  subheadline =
    'Dive into thousands of quizzes across diverse topics, test your knowledge, and compete with friends';
  keyFeatures = [
    {
      id: 1,
      name: 'Choose your challenge : From pop culture to science, there’s a quiz for everyone',
    },
    {
      id: 2,
      name: 'Customizable gameplay : Pick your category and difficulty to suit your mood',
    },
    {
      id: 3,
      name: 'Prove your skills and climb the leaderboard while learning something new',
    },
  ];
  callToAction = 'Start Your First Quiz';
}
