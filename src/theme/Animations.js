import { keyframes } from '@emotion/react';

export const TrackingInContract = keyframes({
  '0%': { opacity: 0, letterSpacing: 5 },
  '40%': { opacity: 0.6 },
  '100%': { letterSpacing: 'normal', opacity: 1 }
});

export const BounceInTop = keyframes({
  '0%': {
    WebkitTransform: 'translateY(-500px)',
    transform: 'translateY(-500px)',
    WebkitAnimationTimingFunction: 'ease-in',
    AnimationTimingFunction: 'ease-in',
    opacity: 0
  },
  '38%': {
    WebkitTransform: 'translateY(0)',
    transform: 'translateY(0)',
    WebkitAnimationTimingFunction: 'ease-out',
    AnimationTimingFunction: 'ease-out',
    opacity: 1
  },
  '55%': {
    WebkitTransform: 'translateY(-65px)',
    transform: 'translateY(-65px)',
    WebkitAnimationTimingFunction: 'ease-in',
    AnimationTimingFunction: 'ease-in'
  },
  '72%': {
    WebkitTransform: 'translateY(0)',
    transform: 'translateY(0)',
    WebkitAnimationTimingFunction: 'ease-out',
    AnimationTimingFunction: 'ease-out'
  },
  '81%': {
    WebkitTransform: 'translateY(-28px)',
    transform: 'translateY(-28px)',
    WebkitAnimationTimingFunction: 'ease-in',
    AnimationTimingFunction: 'ease-in'
  },
  '90%': {
    WebkitTransform: 'translateY(0)',
    transform: 'translateY(0)',
    WebkitAnimationTimingFunction: 'ease-out',
    AnimationTimingFunction: 'ease-out'
  },
  '95%': {
    WebkitTransform: 'translateY(-8px)',
    transform: 'translateY(-8px)',
    WebkitAnimationTimingFunction: 'ease-in',
    AnimationTimingFunction: 'ease-in'
  },
  '100%': {
    WebkitTransform: 'translateY(0)',
    transform: 'translateY(0)',
    WebkitAnimationTimingFunction: 'ease-out',
    AnimationTimingFunction: 'ease-out'
  }
});
