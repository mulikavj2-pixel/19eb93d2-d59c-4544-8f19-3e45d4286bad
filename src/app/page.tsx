"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroBillboardCarouselSplit from '@/components/sections/hero/HeroBillboardCarouselSplit';
import AboutMetric from '@/components/sections/about/AboutMetric';
import FeatureCardSix from '@/components/sections/feature/FeatureCardSix';
import ProductCardSeven from '@/components/sections/product/ProductCardSeven';
import PricingCardEight from '@/components/sections/pricing/PricingCardEight';
import TestimonialCardNine from '@/components/sections/testimonial/TestimonialCardNine';
import SocialProofTwo from '@/components/sections/socialProof/SocialProofTwo';
import FaqBase from '@/components/sections/faq/FaqBase';
import ContactFaq from '@/components/sections/contact/ContactFaq';
import FooterSplit from '@/components/sections/footer/FooterSplit';
import { Coffee, Leaf, Globe, Users, Mail, Phone, MapPin } from 'lucide-react';

export default function CoffeeShopPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="expand-hover"
      defaultTextAnimation="reveal-blur"
      borderRadius="pill"
      contentWidth="small"
      sizing="mediumSizeExtraLargeSpacing"
      background="animatedGrid"
      cardStyle="solid"
      primaryButtonStyle="shadow"
      secondaryButtonStyle="minimal"
      headingFontWeight="medium"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          brandName="Coffee Haven"
          navItems={[
            { name: "Menu", id: "products" },
            { name: "About", id: "about" },
            { name: "Contact", id: "contact" },
            { name: "FAQ", id: "faq" }
          ]}
          button={{
            text: "Order Now",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardCarouselSplit
          title="Discover Your Perfect Cup of Coffee"
          mediaItems={[
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766070256177-bfluos1a.jpg",
              imageAlt: "Espresso shot"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766070261138-2ommyqra.jpg",
              imageAlt: "Creamy cappuccino"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766070262789-myih43c3.jpg",
              imageAlt: "Premium coffee beans"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766070264863-g4ue6sr4.jpg",
              imageAlt: "Barista making coffee"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766070267250-byk3294r.jpg",
              imageAlt: "Morning coffee ritual"
            }
          ]}
          buttons={[
            {
              text: "Browse Menu",
              href: "products"
            },
            {
              text: "Subscribe",
              href: "pricing"
            }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <AboutMetric
          title="Crafted with passion, sourced with purpose. Every cup tells a story of quality, sustainability, and the dedication of coffee farmers worldwide."
          metrics={[
            {
              icon: Coffee,
              label: "Years Brewing Excellence",
              value: "15+"
            },
            {
              icon: Leaf,
              label: "Sustainable Partners",
              value: "50+"
            },
            {
              icon: Globe,
              label: "Origins Sourced",
              value: "12"
            },
            {
              icon: Users,
              label: "Happy Coffee Lovers",
              value: "5,000+"
            }
          ]}
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="process" data-section="process">
        <FeatureCardSix
          title="Our Coffee Journey"
          description="From farm to cup, discover how we bring you the finest coffee experience through careful sourcing, expert roasting, and perfect brewing."
          tag="Process"
          textboxLayout="default"
          useInvertedBackground="noInvert"
          features={[
            {
              id: 1,
              title: "Ethical Sourcing",
              description: "We partner directly with coffee farmers to ensure fair prices and sustainable farming practices that honor both people and planet.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766070269011-bkczhxkv.jpg",
              imageAlt: "Coffee farm sourcing"
            },
            {
              id: 2,
              title: "Artisan Roasting",
              description: "Our master roasters craft small batches to unlock the unique flavor profile of each origin, bringing out the best in every bean.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766070270295-2kp4ps7i.jpg",
              imageAlt: "Coffee roasting process"
            },
            {
              id: 3,
              title: "Perfect Brewing",
              description: "Learn the best techniques to brew your coffee at home, with guides for pour-over, espresso, and traditional methods.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766070271528-pxntr50k.jpg",
              imageAlt: "Brewing coffee at home"
            }
          ]}
        />
      </div>

      <div id="products" data-section="products">
        <ProductCardSeven
          title="Our Coffee Selection"
          description="Choose from our curated collection of premium coffee blends and single-origin varieties."
          tag="Menu"
          textboxLayout="default"
          useInvertedBackground="noInvert"
          products={[
            {
              id: "espresso",
              name: "Classic Espresso",
              price: "$8",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766070272874-taukecie.jpg",
              imageAlt: "Rich espresso shot"
            },
            {
              id: "americano",
              name: "Bold Americano",
              price: "$6",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766070274374-erwy46x9.jpg",
              imageAlt: "Smooth americano"
            },
            {
              id: "cappuccino",
              name: "Creamy Cappuccino",
              price: "$7",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766070275642-8s5snaq2.jpg",
              imageAlt: "Velvety cappuccino"
            }
          ]}
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          containerStyle="default"
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardEight
          title="Coffee Plans"
          description="Subscribe to get fresh coffee delivered to your door, tailored to your taste preferences."
          tag="Subscriptions"
          textboxLayout="default"
          useInvertedBackground="noInvert"
          plans={[
            {
              id: "starter",
              badge: "Popular Choice",
              price: "$29/month",
              subtitle: "For casual coffee lovers",
              buttons: [
                {
                  text: "Subscribe Now",
                  href: "contact"
                }
              ],
              features: [
                "1 bag per month (12oz)",
                "Free shipping",
                "Pause anytime",
                "Member discount code"
              ]
            },
            {
              id: "enthusiast",
              badge: "Best Value",
              price: "$59/month",
              subtitle: "For true coffee enthusiasts",
              buttons: [
                {
                  text: "Subscribe Now",
                  href: "contact"
                }
              ],
              features: [
                "2 bags per month (12oz each)",
                "Free fast shipping",
                "Exclusive blends access",
                "Monthly tasting notes",
                "Brew guide included"
              ]
            },
            {
              id: "connoisseur",
              badge: "Premium",
              price: "$99/month",
              subtitle: "For the ultimate coffee lover",
              buttons: [
                {
                  text: "Subscribe Now",
                  href: "contact"
                }
              ],
              features: [
                "4 bags per month (12oz each)",
                "Priority shipping",
                "Rare single-origins",
                "Monthly virtual tastings",
                "Personalized recommendations",
                "Lifetime 15% discount"
              ]
            }
          ]}
          animationType="slide-up"
          containerStyle="default"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardNine
          title="Loved by Coffee Enthusiasts"
          description="Hear from our customers about their Coffee Haven experience."
          tag="Reviews"
          textboxLayout="default"
          useInvertedBackground="noInvert"
          variant="card"
          testimonials={[
            {
              id: "1",
              quote: "The quality of coffee is exceptional. I've tried beans from all over, and these are by far the freshest and most flavorful. The subscription is a game-changer.",
              name: "Sarah Chen",
              role: "Coffee Enthusiast",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766070280126-3g6ykjyy.jpg",
              imageAlt: "Sarah Chen"
            },
            {
              id: "2",
              quote: "Finally found a coffee shop that cares about sustainability. Every cup tastes amazing, and I feel good supporting their mission.",
              name: "Marcus Johnson",
              role: "Sustainability Advocate",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766070281150-kyau2hbw.jpg",
              imageAlt: "Marcus Johnson"
            },
            {
              id: "3",
              quote: "The baristas really know their craft. My morning coffee has never been better. This is my new favorite spot.",
              name: "Emily Rodriguez",
              role: "Daily Regular",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766070282872-oj8bvcr7.jpg",
              imageAlt: "Emily Rodriguez"
            },
            {
              id: "4",
              quote: "The brewing guides they provide are incredibly helpful. I've become much better at making coffee at home thanks to their tips.",
              name: "David Park",
              role: "Home Barista",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766070283903-9nqf6vs4.jpg",
              imageAlt: "David Park"
            }
          ]}
        />
      </div>

      <div id="social-proof" data-section="social-proof">
        <SocialProofTwo
          title="Trusted By"
          description="Partnered with the world's leading coffee organizations and certifications."
          textboxLayout="default"
          useInvertedBackground="noInvert"
          logos={[
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766070285782-hfgszrpb.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766070287732-tixonlwf.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766070288893-210ov20p.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766070289927-c0893z0d.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766070291508-c8t9cvzr.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766070292462-3i25hhrx.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766070293678-52x0gj6s.jpg"
          ]
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqBase
          title="Frequently Asked Questions"
          description="Everything you need to know about our coffee and services."
          tag="Support"
          textboxLayout="default"
          useInvertedBackground="noInvert"
          animationType="smooth"
          showCard={true}
          faqs={[
            {
              id: "1",
              title: "How fresh is your coffee?",
              content: "Our coffee is roasted fresh weekly. We ship orders within 24-48 hours of roasting to ensure maximum freshness and flavor. All our beans arrive within 1-2 weeks of roasting for the best possible taste."
            },
            {
              id: "2",
              title: "Do you offer decaf options?",
              content: "Yes! We offer a selection of high-quality decaf coffees from various origins. Our decaffeination process uses water-based methods to preserve flavor while removing 99.5% of caffeine."
            },
            {
              id: "3",
              title: "Can I cancel my subscription anytime?",
              content: "Absolutely! You can pause or cancel your subscription anytime, no questions asked. Changes take effect on your next billing cycle, and there are no hidden fees or penalties."
            },
            {
              id: "4",
              title: "What brewing methods do you recommend?",
              content: "It depends on your preference! We provide brewing guides for pour-over, espresso, French press, AeroPress, and more. Each method brings out different flavor notes. Our team can help you find your favorite."
            },
            {
              id: "5",
              title: "Are your beans ethically sourced?",
              content: "Yes, 100%. We work directly with coffee farmers and ensure fair-trade pricing, sustainable farming practices, and transparent supply chains. We're certified by major fair-trade organizations."
            },
            {
              id: "6",
              title: "What if I don't like your coffee?",
              content: "We offer a 100% satisfaction guarantee. If you're not happy with your coffee, we'll replace it or refund your money. Your satisfaction is our priority."
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactFaq
          ctaTitle="Get in Touch"
          ctaDescription="Have a question or ready to order? Reach out and we'll get back to you within 24 hours."
          ctaButton={{
            text: "Send Message",
            href: "mailto:hello@coffeehaven.com"
          }}
          ctaIcon={Mail}
          useInvertedBackground="noInvert"
          animationType="slide-up"
          accordionAnimationType="smooth"
          showCard={true}
          faqs={[
            {
              id: "1",
              title: "How do I place an order?",
              content: "You can order through our website, select your preferred coffee and delivery frequency, and we'll handle the rest. Orders are processed the same day and ship within 24 hours."
            },
            {
              id: "2",
              title: "What are your shipping options?",
              content: "We offer standard shipping (3-5 business days) and priority shipping (1-2 business days). Free shipping applies to all subscription orders and orders over $50."
            },
            {
              id: "3",
              title: "Do you ship internationally?",
              content: "We currently ship within the United States. International shipping is coming soon! Sign up for our newsletter to be notified when we expand globally."
            }
          ]}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterSplit
          logoText="Coffee Haven"
          title="Brewing excellence, supporting communities, creating moments of peace."
          columns={[
            {
              title: "Shop",
              items: [
                { label: "Menu", href: "#products" },
                { label: "Subscriptions", href: "#pricing" },
                { label: "Gift Cards", href: "#contact" }
              ]
            },
            {
              title: "Learn",
              items: [
                { label: "Brewing Guide", href: "#process" },
                { label: "Our Story", href: "#about" },
                { label: "Blog", href: "#blog" }
              ]
            },
            {
              title: "Company",
              items: [
                { label: "About Us", href: "#about" },
                { label: "Sustainability", href: "#" },
                { label: "Careers", href: "#" }
              ]
            }
          ]}
          contactItems={[
            {
              icon: Phone,
              text: "(555) 123-4567"
            },
            {
              icon: Mail,
              text: "hello@coffeehaven.com"
            },
            {
              icon: MapPin,
              text: "123 Brew Street, Coffee City, CA 90210"
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}