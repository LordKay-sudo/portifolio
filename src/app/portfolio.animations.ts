import {
  animate,
  query,
  stagger,
  style,
  transition,
  trigger,
} from '@angular/animations';

const enterEase = 'cubic-bezier(0.22, 1, 0.36, 1)';
const enterDuration = '460ms';
const staggerDelay = 72;

/** Staggered reveal for project cards (complements skill-pill animation). */
export const projectsGridEnter = trigger('projectsGridEnter', [
  transition(':enter', [
    query(
      '.project-card',
      [
        style({
          opacity: 0,
          transform: 'translate3d(0, 1.4rem, 0) scale(0.97)',
          filter: 'blur(4px)',
        }),
        stagger(`${staggerDelay}ms`, [
          animate(
            `${enterDuration} ${enterEase}`,
            style({
              opacity: 1,
              transform: 'translate3d(0, 0, 0) scale(1)',
              filter: 'blur(0)',
            }),
          ),
        ]),
      ],
      { optional: true },
    ),
  ]),
]);
