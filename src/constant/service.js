import Merch from '../assets/services/merch.png';
import AppWeb from '../assets/services/appwebdesign.png';
import BrandIdentity from '../assets/services/brandidentity.png';
import SocMed from '../assets/services/socmed.png' 


const services = [
  {
    number: '01',
    title: 'Brand Identity',
    summary: 'Turn your brand into something clear, memorable and unmistakably yours.',
    description:
      'Create a memorable brand identity with unique logos and cohesive visuals. Stand out, build trust, and leave a lasting impression.',
    items: ['Logo Design', 'Color Palette', 'Typography', 'Business Cards', 'Stationery & Promotional Items'],
    images : BrandIdentity
  },
  {
    number: '02',
    title: 'Social Media Design',
    summary: 'Scroll-stopping content designed to keep your brand consistent and engaging.',
    description:
      'Eye-catching infographics and engaging product visuals tailored to boost your brand. Elevate your content and attract clients with designs that stand out.',
    items: ['Visuals and Graphics', 'Infographics', 'Social Media Content', 'Video and Animation'],
    images : SocMed
  },
  {
    number: '03',
    title: 'Website Design',
    summary: 'Friendly, thoughtful websites that look polished on every screen.',
    description:
      'Create stunning, user-friendly websites with our expert design and development services. We craft responsive, SEO-optimised sites to give you the confidence to market your ideas.',
    items: ['Material Research and Prototyping', 'User Experience & Interface', 'Prototyping & Usability Testing', 'Visual Concept Design', 'Responsive Page Design', 'WordPress Web Development', 'Support and Maintenance'],
    images : AppWeb
  },
  {
    number: '04',
    title: 'Merchandise Design',
    summary: 'Useful, playful brand pieces that people will want to keep.',
    description:
      'Design merchandise that connects, represents and leaves an impact. Where creative meets purpose.',
    items: ['Apparel Design', 'Accessories', 'Print Designs', 'Packaging', 'Custom Merch Solutions'],
    images: Merch
  },
]

export default services;