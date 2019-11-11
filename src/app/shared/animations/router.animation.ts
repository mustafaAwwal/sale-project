import { 
    stagger,
    group,
    animate,
    transition,
    trigger,
    query,
    style,
    animateChild
} from '@angular/animations';

export const RouterAnimation = trigger('routerAnimation', [
    transition("* <=> *", [
        query(':enter,:leave', [
            style({
                position: 'absolute',
                width: '100%'
            })
        ], {optional: true}),
        group([
            query(':enter', [
                style({
                    opacity: 0
                }),
                animate('200ms 400ms ease-in', style({
                    opacity: 1,
                    
                }))
            ], {optional: true}),
            query(':leave', [
                style({
                    opacity: 1,
                }),
                animate('200ms 0ms ease-in', style({
                    opacity: 0,
                    
                }))
            ], {optional: true})
        ]),
        
    ])
])