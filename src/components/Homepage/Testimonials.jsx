import React, { useState, useRef } from "react";
import "./Testimonials.css";
import { Box, Text, Heading, UnorderedList, ListItem, Image, Flex } from "@chakra-ui/react";



const testimonials = [
  {
    name: "Aditya Kothari",
    major: "MS in Aerospace Engineering",
    image: "/img/aditya.jpg",
    admits: [
      "Stanford University, CA, USA",
      "Georgia Tech, USA",
      "Purdue University, USA",
      "ISAE-SUPAERO, France",
      "University of Illinois Urbana-Champaign, USA",
    ],
  },
  {
    name: "Viraj Parmaaj",
    major: "MS in Statistics",
    image: "/img/viraj.jpg",
    admits: [
      "University of Illinois Urbana-Champaign (UIUC)",
      "University of Maryland College Park",
      "Northeastern University",
    ],
    paragraph: `“Achievers Academy helped me go beyond just preparing for exams like GRE and TOEFL by teaching me the correct approach for the exam using optimal strategy, which greatly helped in the verbal section.\n\nThe organization enlightened me with opportunities for profile building through relevant certifications, research outreach, and collaborative projects with peers.\n\nThe application phase was intensive, a different process and set of questions for each college—but with Pallavi Ma'am’s guidance, profile polishing, mock interviews, and booking support, the entire experience became structured and smooth.”`,
  },
  {
    name: "Samruddhi Kale",
    major: "MS in Data Science",
    image: "/img/samruddhi.jpg",
    admits: [
      "University of Southern California (USC)",
      "Boston University",
      "George Washington University (GWU)",
      "Indiana University Bloomington (IUB)",
    ],
  },
  {
    name: "Rohan Mehta",
    major: "MS in Computer Science",
    image: "/img/rohan.jpg",
    admits: [
      "Carnegie Mellon University",
      "University of California, Berkeley",
      "University of Michigan, Ann Arbor",
    ],
    paragraph: `“The mentorship and resources at Achievers Academy were invaluable for my journey. The mock interviews and application reviews made a huge difference.”`,
  },
  {
    name: "Priya Sharma",
    major: "MBA",
    image: "/img/priya.jpg",
    admits: [
      "Harvard Business School",
      "INSEAD",
      "London Business School",
    ],
  },
  {
    name: "Amit Patel",
    major: "MS in Mechanical Engineering",
    image: "/img/amit.jpg",
    admits: [
      "ETH Zurich",
      "TU Munich",
      "Purdue University",
    ],
  },
];

function get3Indices(center, total) {
  const prev = (center - 1 + total) % total;
  const next = (center + 1) % total;
  return [prev, center, next];
}

function truncate(str, n) {
  return str && str.length > n ? str.slice(0, n - 1) + "…" : str;
}

export default function Testimonials() {
  const [centerIndex, setCenterIndex] = useState(1);
  const [slideDir, setSlideDir] = useState(null);
  const [isSliding, setIsSliding] = useState(false);
  const total = testimonials.length;
  const rowRef = useRef();
  const CARD_WIDTH = 350 + 56;
  
  const visible = get3Indices(centerIndex, total);

  
  let translateX = 0;
  if (slideDir === "left") translateX = -CARD_WIDTH;
  if (slideDir === "right") translateX = CARD_WIDTH;

  const handlePrev = () => {
    if (isSliding) return;
    setSlideDir("right");
    setIsSliding(true);
    setTimeout(() => {
      setCenterIndex((prev) => (prev - 1 + total) % total);
      setSlideDir(null);
      setIsSliding(false);
    }, 500);
  };
  const handleNext = () => {
    if (isSliding) return;
    setSlideDir("left");
    setIsSliding(true);
    setTimeout(() => {
      setCenterIndex((prev) => (prev + 1) % total);
      setSlideDir(null);
      setIsSliding(false);
    }, 500);
  };

  return (
    <div className="testimonials-carousel">
      <Heading className="testimonials-heading">Hear From Our Achievers</Heading>
      <button className="carousel-arrow left" onClick={handlePrev} aria-label="Previous" disabled={isSliding}>&#8592;</button>
      <button className="carousel-arrow right" onClick={handleNext} aria-label="Next" disabled={isSliding}>&#8594;</button>
      <div
        className="carousel-inner"
        ref={rowRef}
        style={{
          transform: `translateX(${translateX}px)`,
          transition: slideDir ? "transform 0.5s cubic-bezier(0.4,0,0.2,1)" : "none"
        }}
      >
        {visible.map((idx, i) => (
          <div
            key={idx}
            className={
              "testimonial-card" + (i === 1 ? " center" : "")
            }
          >
            <div className="testimonial-header">
              <Image
                src={testimonials[idx].image}
                className="testimonial-image"
                alt={testimonials[idx].name}
              />
              <div>
                <Text className="testimonial-name">{testimonials[idx].name}</Text>
                <Text className="testimonial-major">Major: {testimonials[idx].major}</Text>
              </div>
            </div>
            <div>
              <Text className="testimonial-admits">Admits:</Text>
              <UnorderedList className="testimonial-list">
                {testimonials[idx].admits.map((a, j) => (
                  <ListItem key={j}>{a}</ListItem>
                ))}
              </UnorderedList>
            </div>
            {i === 1 && testimonials[idx].paragraph && (
              <Text className="testimonial-paragraph">{truncate(testimonials[idx].paragraph, 100)}</Text>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
