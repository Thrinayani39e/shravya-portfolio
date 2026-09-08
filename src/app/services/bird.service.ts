import { Injectable, signal } from '@angular/core';

export interface BirdPosition {
  x: number;
  y: number;
  facing: 1 | -1;
}

/** Perch spots (as fractions of viewport width/height) the decorative bird flies to per section. */
const PERCH_SPOTS: Record<string, [number, number]> = {
  '#top': [0.88, 0.56],
  '#about': [0.1, 0.28],
  '#experience': [0.86, 0.74],
  '#education': [0.12, 0.44],
  '#publications': [0.9, 0.22],
  '#projects': [0.07, 0.68],
  '#leadership': [0.84, 0.36],
  '#skills': [0.14, 0.76],
  '#contact': [0.88, 0.42]
};
const DEFAULT_SPOT: [number, number] = [0.92, 0.5];

/** Drives the little bird mascot that hops between section perches as the visitor navigates. */
@Injectable({ providedIn: 'root' })
export class BirdService {
  readonly position = signal<BirdPosition | null>(null);
  readonly flying = signal(false);

  private perchedHref: string | null = null;
  private landTimer: ReturnType<typeof setTimeout> | undefined;

  flyTo(href: string, animate: boolean) {
    if (typeof document === 'undefined') return;
    const spot = this.perchFor(href);
    const prev = this.position();
    const facing: 1 | -1 = prev && spot.x < prev.x - 6 ? -1 : 1;
    const shouldFly = animate && !!this.perchedHref;

    clearTimeout(this.landTimer);
    this.position.set({ x: spot.x, y: spot.y, facing });
    this.flying.set(shouldFly);
    if (shouldFly) {
      this.landTimer = setTimeout(() => this.flying.set(false), 1500);
    }
    this.perchedHref = href;
  }

  reperch() {
    if (this.perchedHref) this.flyTo(this.perchedHref, false);
  }

  private perchFor(href: string): { x: number; y: number } {
    const [fx, fy] = PERCH_SPOTS[href] ?? DEFAULT_SPOT;
    const vw = document.documentElement.clientWidth;
    const vh = document.documentElement.clientHeight;
    return {
      x: Math.max(8, Math.min(vw * fx, vw - 50)),
      y: Math.max(104, Math.min(vh * fy, vh - 50))
    };
  }
}
