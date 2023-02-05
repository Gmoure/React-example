import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import '../App.css'
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const items = [
  {
    src: 'https://picsum.photos/id/123/1200/400',
    altText: 'Slide 1',
    caption: 'Service A',
    text: 'text example',
    key: 1,
    route: '/ServiceA',
  },
  {
    src: 'https://picsum.photos/id/456/1200/400',
    altText: 'Slide 2',
    caption: 'Service B',
    text: 'text example',
    key: 2,
    route: '/ServiceB',
  },
  {
    src: 'https://picsum.photos/id/678/1200/400',
    altText: 'Slide 3',
    caption: 'Service C',
    text: 'text example',
    key: 3,
    route: '/ServiceC',
  },
];

export function Slider(args) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem className='car-item'
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <Link to={item.route} ><img src={item.src} alt={item.altText} /></Link>
        <CarouselCaption 
          captionText={item.text}
          captionHeader={item.caption}
        />
      </CarouselItem>
    );
  });

  return (
    <Carousel className='Carousel'
      activeIndex={activeIndex}
      next={next}
      previous={previous}
      {...args}
    >
      <CarouselIndicators className='car-ind'
        items={items}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {slides}
      <CarouselControl className='car-ctrl1'
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}
      />
      <CarouselControl className='car-ctrl2'
        direction="next"
        directionText="Next"
        onClickHandler={next}
      />
    </Carousel>
  );
  }
