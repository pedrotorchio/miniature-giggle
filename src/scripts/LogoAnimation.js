import { TimelineMax, TweenMax, Linear } from 'gsap';

export function logoEnter(svg, done) {
    
    const els = extractComponents({
        head: '#head',
        cog1: '#cog1',
        cog2: '#cog2',
        cog3: '#cog3',
        reatoLetters: [ '#reato path' ],
        underText: [ '#under-text path' ],
    }, svg);
    els.underText.forEach( lt => lt.setStyle('strokeWidth', ".8px") );
    const { head, cog1, cog2, cog3, reatoLetters, underText } = els;
    
    const timeline = new TimelineMax();
    let counter = 0;

    
    drawPath(head, 4, false);

    drawPath(cog1, -1.5, .5);
    timeline.addCallback(() => {
        rotateCog(cog1, 1);
    })
    
    drawPath(cog2, 1.5, 1);
    timeline.addCallback(() => {
        rotateCog(cog2, -1);
    })
    
    drawPath(cog3, 1.5, 1.5);
    timeline.addCallback(() => {
        rotateCog(cog3, 1);
    })

    reatoLetters.forEach( lt => drawPath(lt, .5, counter * .1, false));
    underText.forEach( lt => drawPath(lt, 1, counter * .01, false));

    timeline.addCallback(done);

    
    function drawPath(component, duration, offset = "+=0", fix = true) {
        // let dir = 1;
        
        if (duration < 0) {
            // dir = -1;
            duration *= -1;
        }
        let finalOffset = fix ? component.length/2 - 20 : 0;
        let engine = timeline;
        let parameters = [component.el, duration, { strokeDashoffset: component.length }, { strokeDashoffset: finalOffset } ];

        if (offset === false) {
            engine = TweenMax;

        } else {
            counter++
            parameters.push(offset);
        }

        engine
            .fromTo(...parameters);

    }
    function rotateCog(cog, dir, offset = 0) {
        TweenMax
            .to(cog.el, 5, {
                rotation: dir * 360,
                transformOrigin: "50% 50%",
                repeat: -1,
                ease: Linear.easeNone,
                delay: offset
            });
    }
}

export function extractComponents( selectors, svg ) {
    // eslint-disable-next-line
    Object.entries(selectors).forEach(([ key, selector ]) => {
        let component = null;
        
        if (Array.isArray(selector)) {
            let els = Array.from(svg.querySelectorAll(selector.pop()));

            component = els.map( el => makePathComponent(el) );
            
        } else {
            let el = svg.querySelector(selector);
            component = makePathComponent(el);
        }

        selectors[key] = component;

    });

    return selectors;
}

export function makePathComponent(el) {

    const fill = window.getComputedStyle(el).fill;
    const length = el.getTotalLength();
    
    const component = {
        el,
        fill,
        length,
        setStyle(property, value) {
            this.el.style[property] = value;
        }
    }
    
    component.setStyle('stroke', "#1c4477");
    component.setStyle('fill', "none");
    component.setStyle('strokeWidth', "2px");
    component.setStyle('strokeDasharray', component.length);
    component.setStyle('strokeDashoffset', component.length);

    return component;
}