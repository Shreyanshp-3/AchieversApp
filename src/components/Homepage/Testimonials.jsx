import React, { useState, useRef, useEffect } from "react";
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
    paragraph: `“From preparing for the GRE and TOEFL to receiving offers from the world’s top universities, Mrs. Pallavi Desai has been both an exceptional mentor and teacher. With Achievers Academy, I’ve been accepted into leading MS Aerospace Engineering programs at Stanford University, Georgia Tech, Purdue University, and UIUC in the US, as well as with a full scholarship at ISAE-SUPAERO in France.

Mrs. Desai brings out the best in her students, helping us build strong, well-rounded profiles, and supporting us through every step, be it test prep, applications, or visa process, and even beyond. Every dream needs direction, and Achievers Academy gives you both.”`,
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
    paragraph: `“Achievers Academy helped me go beyond just preparing for exams like GRE and TOEFL by teaching me the ‘correct’ approach for the exam using optimal strategy, which greatly helped in the verbal section. 
They constantly enlightened me with opportunities for profile building through relevant certifications, research outreach, and collaborative projects with our academy peers, which i believe was one of the culture practices that set Achievers apart.
The application phase was intensive, a different process and set of questions for each college but with Pallavi Ma’am’s resolute guidance and patience over multiple SOP iterations to make it perfect, I was able to present my profile effectively, making my application stand out. Even the visa counselling, often overlooked, was handled step-by-step, from bookings to mock interviews, giving me full confidence during the actual event which can be rather daunting.”`,
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
    ], paragraph: `“Joining Achievers Academy in my third year of engineering was the best decision I made for my MS journey. Pallavi ma’am’s GRE and TOEFL prep sessions were detailed and personal, with individual attention and tailored resources. Alongside this, she helped me build a strong profile through domain-relevant projects and certifications. When it came to shortlisting universities, her honest, student-first advice gave me confidence. Our LORs and SOPs were not templates, they were carefully crafted to tell my story. With her help, I secured admits from USC, Boston University, GWU, and IUB, even from a tier-3 undergraduate college background.”`,
  },
  {
    name: "Prasad Vanne",
    major: "MS in Information Systems",
    image: "/img/rohan.jpg",
    admits: [
      "New York University (NYU)",
      "University of Illinois Chicago (UIUC)",
      "Northeastern University (NEU)",
      "University of Wisconsin-Madison"
    ],
    paragraph: `“The whole study abroad process is really overwhelming when you start, but having Pallavi ma'am guide me made all the difference. Right from TOEFL prep, with her clear instructions and mock tests, to shortlisting universities and making the right choices for my goals, she was there at every step. Her advice was always on point and came from real experience, which gave me a lot of confidence. The visa process, in particular, felt much easier with her support, right from what to expect to how to answer questions and practice through mock interviews, she takes care of it all. What I value most is that, even now, as I get ready to move to the US, she’s still just as willing to guide me. I’m really grateful for everything ma'am has done to make this journey smoother for me.”`,
  },
  {
    name: "Anay Joglekar",
    major: "BS in Biomedical Engineering",
    image: "/img/priya.jpg",
    admits: [
      "Imperial College London",
      "University College London (UCL)",
      "University of Washington (UWash)",
      "Purdue University",
    ], paragraph: `“When I was in grade nine starting my IGCSEs, I barely understood what that meant for my future. That’s when Pallavi ma'am stepped in and changed everything. She introduced me to the world of education beyond my country and connected me with some incredible tutors. With her guidance, I enrolled in courses and summer schools, which significantly boosted both my profile and personal growth. Pallavi ma'am also tutored me for my SAT exams, helped me navigate my college applications, and guided me through my TOEFL exams. She was instrumental in building a strong portfolio and always knew how to put my parents at ease. Thanks to her continuous support and expertise, I have now received offers from top universities over the world. Altogether, I have been awarded scholarships worth over $250,000 from various institutions. I genuinely owe my success and confidence to Pallavi ma'am's exceptional guidance and care.”`,
  },
  {
    name: "Rujuta Kumbhojkar",
    major: "MA in Design Management",
    image: "/img/amit.jpg",
    admits: [
      "Royal College of Arts",
      "University of the Arts London",
      "Loughborough University",
    ],
    paragraph: `“Pallavi ma'am's guidance and targeted support were instrumental in helping me achieve my college admission goals. A particular highlight was her concrete, actionable feedback, and incredible attention to detail while building my SOP. This ensured the writing truly reflected my strengths and aspirations. Her analytical and well-informed perspective on global geopolitics helped me take an informed decision regarding my admissions. I’m grateful for her expert guidance and highly recommend her to anyone looking for comprehensive support throughout the application and visa process.”`,
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

  // Auto-scroll on mobile: every 5s, only if width <= 900px
  useEffect(() => {
    const isMobile = window.innerWidth <= 900;
    if (!isMobile) return;
    if (isSliding) return;
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
    // eslint-disable-next-line
  }, [centerIndex, isSliding]);

  // Hide arrows on mobile
  const isMobile = typeof window !== "undefined" && window.innerWidth <= 900;

  return (
    <div className="testimonials-carousel">
      <Heading className="testimonials-heading">Hear From Our Achievers</Heading>
      {!isMobile && (
        <>
          <button className="carousel-arrow left" onClick={handlePrev} aria-label="Previous" disabled={isSliding}>&#8592;</button>
          <button className="carousel-arrow right" onClick={handleNext} aria-label="Next" disabled={isSliding}>&#8594;</button>
        </>
      )}
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
              <Text className="testimonial-paragraph full">{testimonials[idx].paragraph}</Text>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}