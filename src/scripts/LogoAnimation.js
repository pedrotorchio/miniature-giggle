import { TimelineMax } from 'gsap';

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

    
    drawPath(head, 6, counter * .5);
    drawPath(cog1, 2, counter * .5);
    rotateCog(cog1);
    drawPath(cog2, 2, counter * .5);
    rotateCog(cog2, -1);
    drawPath(cog3, 2, counter * .5);
    rotateCog(cog3);
    
    reatoLetters.forEach( lt => drawPath(lt, .5, counter * .1));
    underText.forEach( lt => drawPath(lt, 1, counter * .01));

    timeline.addCallback(done);

    
    function drawPath(component, duration, offset) {
        timeline
            .fromTo(component.el, duration, { strokeDashoffset: component.length }, { strokeDashoffset: 0 }, offset)

        counter++;
    }
    function rotateCog(cog, dir = 1) {
        timeline
            .to(cog, 1, {
                rotation: dir * 45,
                transformOrigin: "50% 50%",
                repeat: -1
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