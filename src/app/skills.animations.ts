import {
  animate,
  query,
  stagger,
  style,
  transition,
  trigger,
} from '@angular/animations';

/** Smooth “ease-out-expo” style curve used in modern UI motion. */
const enterEase = 'cubic-bezier(0.22, 1, 0.36, 1)';
const enterDuration = '520ms';
const staggerDelay = 56;

/**
 * Staggered entrance for skill pills: lift, fade, and slight de-blur.
 * Runs once when the host enters the DOM (`:enter`).
 */
export const skillsListEnter = trigger('skillsListEnter', [
  transition(':enter', [
    query(
      '.skill-pill',
      [
        style({
          opacity: 0,
          transform: 'translate3d(0, 1.1rem, 0) scale(0.92)',
          filter: 'blur(5px)',
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
